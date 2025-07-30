
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, Shield, Zap } from "lucide-react";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FAQSection } from "@/components/FAQSection";
import { ChatSupport } from "@/components/ChatSupport";

const Index = () => {
  const services = [
    {
      icon: "📱",
      title: "Screen Repair",
      description: "Professional screen replacement for all major brands",
      price: "from $30",
      duration: "1 hour",
    },
    {
      icon: "🔋",
      title: "Battery Replacement",
      description: "New batteries to restore your phone's power",
      price: "from $50",
      duration: "45 min",
    },
    {
      icon: "💧",
      title: "Water Damage Repair",
      description: "Expert water damage restoration services",
      price: "from $90",
      duration: "1-2 hours",
    },
    {
      icon: "⚙️",
      title: "Other Repairs",
      description: "Camera, speaker, charging port, and more",
      price: "from $50",
      duration: "30 min+",
    },
  ];

  const phoneCategories = [
    {
      icon: "📱",
      title: "iPhone",
      description: "Shop the latest models",
      link: "/products?category=iphone",
    },
    {
      icon: "📱",
      title: "Samsung",
      description: "Explore our Galaxy selection",
      link: "/products?category=samsung",
    },
    {
      icon: "📱",
      title: "Other Brands",
      description: "Discover more smartphones",
      link: "/products?category=others",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Fast Service",
      description: "Most repairs completed within hours",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Warranty Included",
      description: "90-day warranty on all repairs",
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Quick Turnaround",
      description: "Same-day service for most common issues",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/aa576642-ff27-420e-9b6b-f2c67ec15138.png)',
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                ⚡ Fast & Reliable Service
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Fast & Reliable
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Phone Repairs
                </span>
                <br />
                & Sales
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We fix all major smartphone brands and sell the latest models at unbeatable prices.
                Professional service with warranty included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 shadow-lg min-w-[180px]">
                    Book a Repair
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 shadow-lg min-w-[180px]">
                    Browse Phones
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in lg:block hidden">
              <div className="w-full max-w-md mx-auto h-64 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PhoneFix Pro?</h2>
            <p className="text-lg text-gray-600">Professional service you can trust</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Brand</h2>
            <p className="text-lg text-gray-600">Find the perfect phone for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {phoneCategories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="text-center hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{category.description}</CardDescription>
                    <Button variant="outline" className="w-full">
                      View Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Repair Services</h2>
            <p className="text-lg text-gray-600">Professional repairs with warranty included</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span className="font-semibold text-blue-600">{service.price}</span>
                    <span>{service.duration}</span>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* FAQ Section */}
      <FAQSection />

      {/* Chat Support */}
      <ChatSupport />
    </div>
  );
};

export default Index;
