import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface WhatsAppChatProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
}

export default function WhatsAppChat({ isOpen, onClose, courseTitle }: WhatsAppChatProps) {
  const whatsappNumber = "8801613823645"; // WhatsApp number
  
  const getWhatsAppMessage = () => {
    const baseMessage = `আসসালামু আলাইকুম। আমি ${courseTitle || 'একটি কোর্সে'} ভর্তি হতে আগ্রহী। দয়া করে বিস্তারিত জানান।`;
    return encodeURIComponent(baseMessage);
  };

  const handleWhatsAppClick = () => {
    const message = getWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleDirectCall = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 font-bengali text-center">
            কোর্সে ভর্তি হন
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-bengali">
              {courseTitle ? `${courseTitle} কোর্সে` : 'কোর্সে'} ভর্তি হতে চান?
            </h3>
            <p className="text-gray-600 font-bengali mb-6">
              আমাদের সাথে সরাসরি যোগাযোগ করুন এবং তাৎক্ষণিক সহায়তা পান
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-bengali flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp এ চ্যাট করুন</span>
            </Button>
            
            <Button 
              onClick={handleDirectCall}
              variant="outline"
              className="w-full border-green-500 text-green-600 hover:bg-green-50 py-3 text-lg font-bengali"
            >
              <span>📞 সরাসরি কল করুন</span>
            </Button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2 font-bengali">যোগাযোগের সময়:</h4>
            <ul className="text-blue-700 text-sm space-y-1 font-bengali">
              <li>• সকাল ৯টা থেকে রাত ১০টা</li>
              <li>• সাত দিন খোলা</li>
              <li>• তাৎক্ষণিক সাপোর্ট</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2 font-bengali">যে তথ্য দরকার:</h4>
            <ul className="text-purple-700 text-sm space-y-1 font-bengali">
              <li>• আপনার নাম</li>
              <li>• মোবাইল নম্বর</li>
              <li>• কোন কোর্সে ভর্তি হতে চান</li>
              <li>• পেমেন্ট পদ্ধতি</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}