
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

export const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+1234567890";
  const whatsappMessage = "Hi! I need help with my phone repair/purchase.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Support Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-scale-in">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Need Help?
              </CardTitle>
              <p className="text-blue-100 text-sm">Choose how you'd like to contact us</p>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+1234567890'}
                variant="outline"
                className="w-full justify-start border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
              <Button
                onClick={() => window.location.href = '/contact'}
                variant="outline"
                className="w-full justify-start border-gray-200 hover:bg-gray-50"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <div className="text-xs text-gray-500 text-center pt-2">
                Available Mon-Sat, 9AM-7PM
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
