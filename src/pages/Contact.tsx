
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Contact form submission:", values);
    
    toast({
      title: "Message Sent! 📧",
      description: "We'll get back to you within 24 hours. For urgent matters, please call us directly.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: [
        { label: "Main Line", value: "(555) 123-4567" },
        { label: "Emergency", value: "(555) 911-PHONE" },
      ],
      action: { text: "Call Now", href: "tel:+15551234567" },
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: [
        { label: "General", value: "info@phonefixpro.com" },
        { label: "Support", value: "support@phonefixpro.com" },
      ],
      action: { text: "Send Email", href: "mailto:info@phonefixpro.com" },
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "WhatsApp",
      details: [
        { label: "Chat Support", value: "+1 (555) 123-4567" },
        { label: "Available", value: "Mon-Sat, 9AM-7PM" },
      ],
      action: { text: "Chat Now", href: "https://wa.me/15551234567" },
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Location",
      details: [
        { label: "Address", value: "123 Tech Street" },
        { label: "City", value: "Downtown, City 12345" },
      ],
      action: { text: "Get Directions", href: "https://maps.google.com" },
    },
  ];

  const subjects = [
    { value: "repair-inquiry", label: "Repair Inquiry" },
    { value: "pricing", label: "Pricing Information" },
    { value: "warranty", label: "Warranty Claim" },
    { value: "feedback", label: "Feedback" },
    { value: "partnership", label: "Partnership" },
    { value: "other", label: "Other" },
  ];

  const faqItems = [
    {
      question: "How long do repairs typically take?",
      answer: "Most common repairs like screen replacements take 1-2 hours. More complex repairs may take 24-48 hours.",
    },
    {
      question: "Do you offer warranty on repairs?",
      answer: "Yes, we provide a 90-day warranty on all repairs covering parts and labor.",
    },
    {
      question: "What should I do if my phone got water damage?",
      answer: "Turn it off immediately, don't charge it, and bring it to us ASAP. We offer 24/7 emergency service for water damage.",
    },
    {
      question: "Do you buy used phones?",
      answer: "Yes, we purchase used smartphones in good condition. Bring your device for a free evaluation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with our expert team for any questions or support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjects.map((subject) => (
                                <SelectItem key={subject.value} value={subject.value}>
                                  {subject.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {info.icon}
                    <span className="ml-3">{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-gray-600">{detail.label}:</span>
                        <span className="font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={info.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      {info.action.text}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Clock className="w-6 h-6 mr-2 text-blue-600" />
              Business Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-center">Regular Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Sunday</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-center">Emergency Service</h3>
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Water damage and critical repairs
                  </p>
                  <p className="font-medium text-red-600">24/7 Available</p>
                  <a href="tel:+15559110000">
                    <Button variant="outline" className="mt-2 border-red-200 text-red-600 hover:bg-red-50">
                      Emergency Line: (555) 911-PHONE
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google Maps Embed */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Find Our Store</CardTitle>
            <CardDescription className="text-center">
              123 Tech Street, Downtown, City 12345
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Google Maps</p>
                <p className="text-sm">(Map integration would go here)</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500">
                Get Directions
              </Button>
              <Button variant="outline" className="flex-1">
                View on Google Maps
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Questions?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
