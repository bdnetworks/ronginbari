// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import { z } from "zod";

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  duration: text("duration").notNull(),
  image: text("image").notNull(),
  isLive: integer("is_live").default(1)
});
var enrollments = pgTable("enrollments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  phone: text("phone").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  courseId: varchar("course_id").references(() => courses.id),
  createdAt: timestamp("created_at").defaultNow()
});
var testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  courseId: varchar("course_id").references(() => courses.id),
  review: text("review").notNull(),
  avatar: text("avatar")
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertCourseSchema = createInsertSchema(courses).omit({
  id: true
});
var insertEnrollmentSchema = createInsertSchema(enrollments).omit({
  id: true,
  createdAt: true
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/enrollments", async (req, res) => {
    try {
      const enrollmentData = insertEnrollmentSchema.parse(req.body);
      res.json({
        success: true,
        message: "Enrollment successful",
        enrollmentId: `enroll_${Date.now()}`
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Validation failed",
          details: error.errors
        });
      } else {
        res.status(500).json({
          error: "Internal server error"
        });
      }
    }
  });
  app2.get("/api/courses", async (req, res) => {
    const courses2 = [
      {
        id: "1",
        title: "\u09B8\u09AC\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AB\u09CD\u09B0\u09BF\u09B2\u09CD\u09AF\u09BE\u09A8\u09CD\u09B8\u09BF\u0982",
        slug: "shobar-jnno-freelancing",
        description: "\u09AB\u09CD\u09B0\u09BF\u09B2\u09CD\u09AF\u09BE\u09A8\u09CD\u09B8\u09BF\u0982 \u098F\u09B0 \u09AE\u09C2\u09B2 \u09AC\u09BF\u09B7\u09AF\u09BC\u0997\u09C1\u09B2\u09CB \u09B6\u09BF\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u0985\u09A8\u09B2\u09BE\u0987\u09A8\u09C7 \u0986\u09AF\u09BC \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
        price: 750,
        duration: "\u09ED \u09A6\u09BF\u09A8\u09C7\u09B0 \u0995\u09CB\u09B0\u09CD\u09B8",
        image: "https://skill-shikhun.netlify.app/static/media/FL.36b4e5cbb64728ca3c0a.png",
        isLive: 1
      },
      {
        id: "2",
        title: "\u09AB\u09C1\u09B2 \u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u0995 \u0993\u09AF\u09BC\u09C7\u09AC \u09A1\u09C7\u09AD\u09C7\u09B2\u09AA\u09AE\u09C7\u09A8\u09CD\u099F",
        slug: "web-development",
        description: "\u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u0993\u09AF\u09BC\u09C7\u09AC \u09A1\u09C7\u09AD\u09C7\u09B2\u09AA\u09AE\u09C7\u09A8\u09CD\u099F \u09B6\u09BF\u0996\u09C1\u09A8 HTML, CSS, JavaScript \u098F\u09AC\u0982 \u0986\u09B0\u0993 \u0985\u09A8\u09C7\u0995 \u0995\u09BF\u099B\u09C1",
        price: 1500,
        duration: "\u09E9 \u09AE\u09BE\u09B8\u09C7\u09B0 \u0995\u09CB\u09B0\u09CD\u09B8",
        image: "https://skill-shikhun.netlify.app/static/media/WD.3c2e0df1e4412a1f69a5.png",
        isLive: 1
      },
      {
        id: "3",
        title: "\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09AE\u09BE\u09B0\u09CD\u0995\u09C7\u099F\u09BF\u0982",
        slug: "digital-marketing",
        description: "\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09AE\u09BE\u09B0\u09CD\u0995\u09C7\u099F\u09BF\u0982 \u098F\u09B0 \u09B8\u0995\u09B2 \u0995\u09CC\u09B6\u09B2 \u09B6\u09BF\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
        price: 1500,
        duration: "\u09E8 \u09AE\u09BE\u09B8\u09C7\u09B0 \u0995\u09CB\u09B0\u09CD\u09B8",
        image: "https://skill-shikhun.netlify.app/static/media/DM.f0f690691a1af9996b02.png",
        isLive: 1
      },
      {
        id: "4",
        title: "\u0997\u09CD\u09B0\u09BE\u09AB\u09BF\u0995\u09CD\u09B8 \u09A1\u09BF\u099C\u09BE\u0987\u09A8",
        slug: "graphics-design",
        description: "\u09AA\u09CD\u09B0\u09AB\u09C7\u09B6\u09A8\u09BE\u09B2 \u0997\u09CD\u09B0\u09BE\u09AB\u09BF\u0995\u09CD\u09B8 \u09A1\u09BF\u099C\u09BE\u0987\u09A8 \u09B6\u09BF\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09C7\u099F\u09BF\u09AD \u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
        price: 1500,
        duration: "\u09E9 \u09AE\u09BE\u09B8\u09C7\u09B0 \u0995\u09CB\u09B0\u09CD\u09B8",
        image: "https://skill-shikhun.netlify.app/static/media/GD.63300e1ce24623e1f031.png",
        isLive: 1
      },
      {
        id: "5",
        title: "\u09AD\u09BF\u09A1\u09BF\u0993 \u098F\u09A1\u09BF\u099F\u09BF\u0982",
        slug: "video-editing",
        description: "\u09AA\u09CD\u09B0\u09AB\u09C7\u09B6\u09A8\u09BE\u09B2 \u09AD\u09BF\u09A1\u09BF\u0993 \u098F\u09A1\u09BF\u099F\u09BF\u0982 \u09B6\u09BF\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u09B8\u09C3\u099C\u09A8\u09B6\u09C0\u09B2 \u0995\u09A8\u09CD\u099F\u09C7\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
        price: 1500,
        duration: "\u09E8 \u09AE\u09BE\u09B8\u09C7\u09B0 \u0995\u09CB\u09B0\u09CD\u09B8",
        image: "https://skill-shikhun.netlify.app/static/media/VE.f7fcb97cb00d6a1210fa.png",
        isLive: 1
      }
    ];
    res.json(courses2);
  });
  app2.get("/api/testimonials", async (req, res) => {
    const testimonials2 = [
      {
        id: "1",
        name: "Tutul Ahmed",
        courseId: "4",
        review: "\u0985\u09B8\u09BE\u09A7\u09BE\u09B0\u09A3!! \u0996\u09C1\u09AC \u09B8\u09C1\u09A8\u09CD\u09A6\u09B0 \u098F\u0995\u099F\u09BF \u0995\u09CB\u09B0\u09CD\u09B8!! \u0987\u09A8\u09B6\u09BE\u0986\u09B2\u09CD\u09B2\u09BE\u09B9 \u09AD\u09BE\u09B2\u09CB \u0995\u09BF\u099B\u09C1 \u09B6\u09BF\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09CB \u0986\u09B6\u09BE \u0995\u09B0\u09BF\u0964",
        avatar: null
      },
      {
        id: "2",
        name: "Abed Hossain",
        courseId: "5",
        review: "Very very important course for video editing. So helpful for professional video editing as well as freelancing. The mentor is well enough to help cordially as soon as possible",
        avatar: "https://skill-shikhun.netlify.app/static/media/Abed%20Hossain.71c7d737de1765d175fb.jpg"
      },
      {
        id: "3",
        name: "Ramisa Anjum",
        courseId: "5",
        review: "This course is so effective to develop skill about video editing. I appreciate that if anyone follow the all lesson of this course with regular practice he must gain.",
        avatar: null
      },
      {
        id: "4",
        name: "Supto Khan",
        courseId: "5",
        review: "\u0986\u09AE\u09BF \u0986\u09B8\u09B2\u09C7 \u0985\u09A8\u09C7\u0995 \u0995\u09A8\u09AB\u09BF\u0989\u099C\u09A1 \u099B\u09BF\u09B2\u09BE\u09AE \u098F\u0987 \u0995\u09CB\u09B0\u09CD\u09B8 \u099F\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u0995\u09BE\u09B0\u09A8 \u0986\u09AE\u09BF \u098F\u09A4 \u09A6\u09BF\u09A8 \u0996\u09C1\u099C\u09C7 \u09AF\u09BE\u099A\u09CD\u099B\u09BF\u09B2\u09BE\u09AE \u098F\u09AE\u09A8 \u098F\u0995\u099F\u09BE \u0995\u09CB\u09B0\u09CD\u09B8\u0964 \u09AF\u09BE\u0995 \u09AD\u09BE\u0987\u09AF\u09BC\u09BE \u0996\u09C1\u09AC\u0987 \u09AB\u09CD\u09B0\u09C7\u09A8\u09CD\u09A1\u09B2\u09BF \u0985\u09A8\u09C7\u0995 \u09B9\u09C7\u09B2\u09CD\u09AA \u0995\u09B0\u09C7\u0964 \u0986\u09AE\u09BF \u0986\u09B6\u09BE \u0995\u09B0\u09BF \u098F\u0987 \u0995\u09CB\u09B0\u09CD\u09B8 \u09A5\u09C7\u0995\u09C7 \u09AD\u09BE\u09B2\u09CB \u0995\u09BF\u099B\u09C1 \u0985\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09AC\u09CB",
        avatar: null
      }
    ];
    res.json(testimonials2);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
