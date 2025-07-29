import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId?: string;
}

export default function EnrollmentModal({ isOpen, onClose, courseId }: EnrollmentModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
    name: "",
    email: ""
  });
  const { toast } = useToast();

  const resetModal = () => {
    setStep(1);
    setFormData({ phone: "", otp: "", name: "", email: "" });
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  const nextStep = () => {
    if (step === 1 && !formData.phone) {
      toast({
        title: "ত্রুটি",
        description: "দয়া করে একটি বৈধ মোবাইল নম্বর দিন",
        variant: "destructive"
      });
      return;
    }
    if (step === 2 && !formData.otp) {
      toast({
        title: "ত্রুটি", 
        description: "দয়া করে OTP কোড দিন",
        variant: "destructive"
      });
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const completeEnrollment = () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "ত্রুটি",
        description: "দয়া করে সকল তথ্য পূরণ করুন",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "সফল!",
      description: "ভর্তি সম্পন্ন হয়েছে! শীঘ্রই আমরা আপনার সাথে যোগাযোগ করবো।"
    });
    
    handleClose();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.substring(0, 11);
    }
    setFormData({ ...formData, phone: value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 font-bengali">কোর্সে ভর্তি হন</DialogTitle>
        </DialogHeader>
        
        {/* Step indicators */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className={`w-8 h-8 ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-sm font-bold`}>1</div>
            <span className="ml-2 text-sm font-bengali">ফোন নম্বর</span>
          </div>
          <div className={`w-8 h-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-sm font-bold`}>2</div>
            <span className="ml-2 text-sm font-bengali">আপনার তথ্য</span>
          </div>
          <div className={`w-8 h-1 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-sm font-bold`}>3</div>
            <span className="ml-2 text-sm font-bengali">পেমেন্ট</span>
          </div>
        </div>
        
        {/* Step 1: Phone Number */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label className="font-bengali">মোবাইল নম্বর</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">+88</span>
                <Input 
                  type="tel"
                  className="rounded-l-none"
                  placeholder="01XXXXXXXXX"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <Button onClick={nextStep} className="w-full bg-purple-600 hover:bg-purple-700">
              এগিয়ে যান
            </Button>
          </div>
        )}
        
        {/* Step 2: OTP */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2 font-bengali">আপনার মোবাইল নম্বরে প্রেরিত ওটিপি দিন</h4>
            </div>
            <div>
              <Label className="font-bengali">OTP কোড</Label>
              <Input 
                type="text"
                placeholder="6 ডিজিটের কোড"
                maxLength={6}
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              />
            </div>
            <Button onClick={nextStep} className="w-full bg-purple-600 hover:bg-purple-700">
              এগিয়ে যান
            </Button>
          </div>
        )}
        
        {/* Step 3: Personal Information */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label className="font-bengali">আপনার নাম</Label>
              <Input 
                type="text"
                placeholder="পূর্ণ নাম লিখুন"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label className="font-bengali">ইমেইল</Label>
              <Input 
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <Button onClick={completeEnrollment} className="w-full bg-purple-600 hover:bg-purple-700">
              ভর্তি সম্পন্ন করুন
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
