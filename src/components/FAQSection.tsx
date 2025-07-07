
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical repair take?",
      answer: "Most common repairs like screen replacements and battery changes can be completed within 1-2 hours. Complex repairs may take 24-48 hours. We'll provide an accurate timeframe when you bring in your device.",
    },
    {
      question: "Do you offer warranty on repairs?",
      answer: "Yes! We provide a 90-day warranty on all repairs. If you experience any issues related to our repair work within this period, we'll fix it free of charge.",
    },
    {
      question: "What brands do you repair?",
      answer: "We repair all major smartphone brands including iPhone, Samsung, Google Pixel, OnePlus, Huawei, LG, and many others. If you're unsure about your device, just give us a call!",
    },
    {
      question: "Do I need to make an appointment?",
      answer: "While walk-ins are welcome, we recommend booking an appointment to ensure faster service and avoid waiting times. You can book online or call us directly.",
    },
    {
      question: "What should I bring for a repair?",
      answer: "Please bring your device, charger (if available), and a valid ID. Make sure to backup your data before bringing your phone in, as we cannot guarantee data preservation during repairs.",
    },
    {
      question: "Do you buy used phones?",
      answer: "Yes, we purchase used smartphones in good condition. The price depends on the model, age, and condition of the device. Bring your phone in for a free evaluation and quote.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards (Visa, Mastercard, American Express), debit cards, and digital payments including Apple Pay and Google Pay.",
    },
    {
      question: "Can you recover data from a broken phone?",
      answer: "In many cases, yes! We offer data recovery services for devices with various types of damage. However, success depends on the extent of the damage. We'll assess your device and let you know what's possible.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Get answers to common questions about our services</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
