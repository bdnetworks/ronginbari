import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/home";
import CourseDetail from "./pages/course-detail";
import Courses from "./pages/courses";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/shobar-jnno-freelancing" component={CourseDetail} />
      <Route path="/web-development" component={CourseDetail} />
      <Route path="/video-editing" component={CourseDetail} />
      <Route path="/graphics-design" component={CourseDetail} />
      <Route path="/digital-marketing" component={CourseDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
