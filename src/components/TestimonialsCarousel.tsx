
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! My iPhone screen was fixed in just 30 minutes. The quality is perfect and the price was very reasonable.",
      service: "Screen Repair",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional and fast service. My Samsung Galaxy was water damaged and they brought it back to life. Highly recommend!",
      service: "Water Damage Repair",
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "Great customer service and quick turnaround. My phone battery replacement was done perfectly and now it lasts all day.",
      service: "Battery Replacement",
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Best phone repair shop in town! Fair prices, expert technicians, and excellent warranty. Will definitely come back.",
      service: "Multiple Repairs",
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Bought my new iPhone here and the staff was incredibly helpful. Great selection and competitive prices!",
      service: "Phone Purchase",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Join thousands of satisfied customers</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.service}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};
