
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";

const Repairs = () => {
  const repairServices = [
    {
      id: 1,
      icon: "📱",
      title: "Screen Repair",
      description: "Professional screen replacement using genuine parts. We fix cracked screens, unresponsive touch, and display issues.",
      price: "from $30",
      duration: "1 hour",
      warranty: "90 days",
      features: ["Genuine parts", "Same-day service", "Free diagnosis"],
      popular: true,
    },
    {
      id: 2,
      icon: "🔋",
      title: "Battery Replacement",
      description: "Restore your phone's battery life with our high-quality replacement batteries.",
      price: "from $50",
      duration: "45 min",
      warranty: "90 days",
      features: ["Original capacity", "Quick installation", "Battery health test"],
      popular: true,
    },
    {
      id: 3,
      icon: "💧",
      title: "Water Damage Repair",
      description: "Emergency water damage restoration using specialized equipment and techniques.",
      price: "from $90",
      duration: "1-2 hours",
      warranty: "60 days",
      features: ["24/7 emergency service", "Professional cleaning", "Component replacement"],
      popular: false,
    },
    {
      id: 4,
      icon: "📸",
      title: "Camera Repair",
      description: "Fix camera issues including lens replacement, focus problems, and image quality issues.",
      price: "from $70",
      duration: "1-2 hours",
      warranty: "90 days",
      features: ["Lens replacement", "Software calibration", "Quality testing"],
      popular: false,
    },
    {
      id: 5,
      icon: "🔌",
      title: "Charging Port Repair",
      description: "Repair or replace faulty charging ports, loose connections, and charging issues.",
      price: "from $60",
      duration: "1 hour",
      warranty: "90 days",
      features: ["Port cleaning", "Component replacement", "Connection testing"],
      popular: false,
    },
    {
      id: 6,
      icon: "🔊",
      title: "Speaker Repair",
      description: "Fix audio issues including speaker replacement, microphone problems, and sound quality.",
      price: "from $55",
      duration: "45 min",
      warranty: "90 days",
      features: ["Speaker replacement", "Audio testing", "Quality assurance"],
      popular: false,
    },
    {
      id: 7,
      icon: "🏠",
      title: "Home Button Repair",
      description: "Repair or replace non-responsive home buttons and fingerprint sensors.",
      price: "from $65",
      duration: "1 hour",
      warranty: "90 days",
      features: ["Button replacement", "Sensor calibration", "Functionality testing"],
      popular: false,
    },
    {
      id: 8,
      icon: "⚙️",
      title: "Software Issues",
      description: "Fix software problems, virus removal, data recovery, and system optimization.",
      price: "from $40",
      duration: "30 min+",
      warranty: "30 days",
      features: ["Virus removal", "Data recovery", "System optimization"],
      popular: false,
    },
  ];

  const brands = [
    { name: "iPhone", icon: "📱", supported: true },
    { name: "Samsung", icon: "📱", supported: true },
    { name: "Google Pixel", icon: "📱", supported: true },
    { name: "OnePlus", icon: "📱", supported: true },
    { name: "Huawei", icon: "📱", supported: true },
    { name: "Xiaomi", icon: "📱", supported: true },
    { name: "LG", icon: "📱", supported: true },
    { name: "Motorola", icon: "📱", supported: true },
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Fast Service",
      description: "Most repairs completed within hours"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Warranty Included",
      description: "90-day warranty on all repairs"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Genuine Parts",
      description: "Original and high-quality replacement parts"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Repair Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            Professional smartphone repair services with warranty included
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
              Book a Repair Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Repair Services Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Repair Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {repairServices.map((service) => (
              <Card key={service.id} className={`hover:shadow-lg transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-blue-200' : ''}`}>
                <CardHeader className="relative">
                  {service.popular && (
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600">
                      Most Popular
                    </Badge>
                  )}
                  <div className="text-3xl mb-4 text-center">{service.icon}</div>
                  <CardTitle className="text-lg text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{service.price}</div>
                      <div className="text-gray-500">Price</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{service.duration}</div>
                      <div className="text-gray-500">Duration</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Badge variant="outline" className="border-green-200 text-green-600">
                      {service.warranty} warranty
                    </Badge>
                  </div>

                  <ul className="space-y-1 text-sm">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/booking" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supported Brands */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Supported Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{brand.icon}</div>
                <div className="font-medium text-gray-900">{brand.name}</div>
                <CheckCircle className="w-4 h-4 text-green-500 mx-auto mt-1" />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don't see your brand? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link> - we likely support it!
          </p>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Diagnosis</h3>
              <p className="text-blue-100 text-sm">Free assessment of your device and transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Repair</h3>
              <p className="text-blue-100 text-sm">Professional repair using genuine parts by certified technicians</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-blue-100 text-sm">Thorough quality testing to ensure everything works perfectly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Warranty</h3>
              <p className="text-blue-100 text-sm">90-day warranty coverage for your peace of mind</p>
            </div>
          </div>
        </div>

        {/* Emergency Service */}
        <Card className="bg-red-50 border-red-200 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-red-700">🚨 Emergency Repair Service</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <CardDescription className="text-red-600">
              Water damage or completely broken phone? We offer 24/7 emergency repair services for critical issues.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                Call Emergency Line: (555) 911-PHONE
              </Button>
              <Link to="/booking">
                <Button className="bg-red-600 hover:bg-red-700">
                  Book Emergency Repair
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Repairs;
