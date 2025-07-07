
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  device: z.string().min(1, "Please select your device"),
  repairType: z.string().min(1, "Please select the repair type"),
  issueDescription: z.string().min(10, "Please describe the issue in detail"),
  appointmentDate: z.date({
    required_error: "Please select an appointment date",
  }),
  appointmentTime: z.string().min(1, "Please select an appointment time"),
  urgency: z.string().min(1, "Please select urgency level"),
});

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      device: "",
      repairType: "",
      issueDescription: "",
      appointmentTime: "",
      urgency: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Booking submission:", values);
    
    toast({
      title: "Booking Confirmed! 🎉",
      description: "We'll send you a confirmation email shortly. Our team will contact you to confirm the details.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const deviceOptions = [
    { value: "iphone-15-pro", label: "iPhone 15 Pro/Pro Max" },
    { value: "iphone-15", label: "iPhone 15/15 Plus" },
    { value: "iphone-14-pro", label: "iPhone 14 Pro/Pro Max" },
    { value: "iphone-14", label: "iPhone 14/14 Plus" },
    { value: "iphone-13", label: "iPhone 13" },
    { value: "iphone-12", label: "iPhone 12" },
    { value: "iphone-11", label: "iPhone 11" },
    { value: "samsung-s24", label: "Samsung Galaxy S24" },
    { value: "samsung-s23", label: "Samsung Galaxy S23" },
    { value: "samsung-s22", label: "Samsung Galaxy S22" },
    { value: "samsung-a54", label: "Samsung Galaxy A54" },
    { value: "pixel-8", label: "Google Pixel 8" },
    { value: "pixel-7", label: "Google Pixel 7" },
    { value: "oneplus-12", label: "OnePlus 12" },
    { value: "other", label: "Other (specify in description)" },
  ];

  const repairTypes = [
    { value: "screen", label: "Screen Repair/Replacement" },
    { value: "battery", label: "Battery Replacement" },
    { value: "water-damage", label: "Water Damage Repair" },
    { value: "camera", label: "Camera Repair" },
    { value: "charging-port", label: "Charging Port Repair" },
    { value: "speaker", label: "Speaker/Audio Repair" },
    { value: "home-button", label: "Home Button/Touch ID" },
    { value: "software", label: "Software Issues" },
    { value: "other", label: "Other Issue" },
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"
  ];

  const urgencyLevels = [
    { value: "low", label: "Low - Within a week is fine" },
    { value: "medium", label: "Medium - Within 2-3 days" },
    { value: "high", label: "High - As soon as possible" },
    { value: "emergency", label: "Emergency - Same day service needed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Repair</h1>
          <p className="text-lg text-gray-600">
            Schedule your smartphone repair appointment with our expert technicians
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Repair Booking Form</CardTitle>
                <CardDescription>
                  Fill out the form below to schedule your repair appointment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Device Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="device"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Device Model</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your device" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {deviceOptions.map((device) => (
                                  <SelectItem key={device.value} value={device.value}>
                                    {device.label}
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
                        name="repairType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Repair Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select repair type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {repairTypes.map((repair) => (
                                  <SelectItem key={repair.value} value={repair.value}>
                                    {repair.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="issueDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issue Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe the issue with your device in detail..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            The more details you provide, the better we can prepare for your repair
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Appointment Scheduling */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="appointmentDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Appointment Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() || date.getDay() === 0 // Disable past dates and Sundays
                                  }
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="appointmentTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Urgency Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="How urgent is your repair?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {urgencyLevels.map((level) => (
                                <SelectItem key={level.value} value={level.value}>
                                  {level.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Booking..." : "Book Appointment"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Call us directly:</p>
                  <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                    (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="font-medium">Business Hours:</p>
                  <p className="text-sm text-gray-600">
                    Mon-Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <p className="font-medium">Emergency Repairs:</p>
                  <a href="tel:+1234567890" className="text-red-600 hover:underline">
                    (555) 911-PHONE
                  </a>
                  <p className="text-xs text-gray-500">24/7 for water damage</p>
                </div>
              </CardContent>
            </Card>

            {/* What to Bring */}
            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Your device and charger (if available)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Valid photo ID
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Backup your data beforehand
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Any relevant accessories
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Quick Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Screen Repair</span>
                    <span className="font-medium">from $30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Battery Replacement</span>
                    <span className="font-medium">from $50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Water Damage</span>
                    <span className="font-medium">from $90</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other Repairs</span>
                    <span className="font-medium">from $40</span>
                  </div>
                  <div className="pt-2 border-t text-xs text-gray-500">
                    Final price determined after diagnosis
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
