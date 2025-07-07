
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, MapPin, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: "10,000+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8 text-blue-600" />, value: "8+", label: "Years Experience" },
    { icon: <Star className="w-8 h-8 text-blue-600" />, value: "4.9", label: "Average Rating" },
    { icon: <Shield className="w-8 h-8 text-blue-600" />, value: "98%", label: "Success Rate" },
  ];

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Master Technician & Owner",
      experience: "8+ years",
      specialties: ["iPhone Repair", "Micro-soldering", "Data Recovery"],
      image: "/lovable-uploads/17537d8c-183e-4f40-a10b-8227a6618da7.png",
    },
    {
      name: "Sarah Chen",
      role: "Senior Repair Specialist",
      experience: "6+ years",
      specialties: ["Samsung Repair", "Water Damage", "Screen Replacement"],
      image: "/lovable-uploads/17537d8c-183e-4f40-a10b-8227a6618da7.png",
    },
    {
      name: "Mike Johnson",
      role: "Customer Service Manager",
      experience: "5+ years",
      specialties: ["Customer Relations", "Quality Assurance", "Training"],
      image: "/lovable-uploads/17537d8c-183e-4f40-a10b-8227a6618da7.png",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Quality First",
      description: "We use only genuine or high-quality replacement parts and follow industry best practices."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Fast Service",
      description: "Most repairs completed within hours, not days. We value your time as much as you do."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to ensure you're happy."
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Expert Care",
      description: "Our certified technicians have years of experience with all major smartphone brands."
    },
  ];

  const certifications = [
    "Apple Authorized Service Provider",
    "Samsung Certified Repair Center",
    "Google Pixel Authorized Repair",
    "IPC Certified Technicians",
    "ISO 9001 Quality Management",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About PhoneFix Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted local smartphone repair experts, serving the community with professional 
            service, genuine parts, and unbeatable warranties since 2016.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-medium">{stat.label}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                PhoneFix Pro was founded in 2016 with a simple mission: to provide fast, reliable, 
                and affordable smartphone repair services to our community. What started as a small 
                repair shop has grown into the most trusted phone repair service in the area.
              </p>
              <p>
                Our founder, Alex Rodriguez, started fixing phones as a hobby in college. After 
                seeing how much people struggled with expensive repairs and poor service elsewhere, 
                he decided to open PhoneFix Pro to offer a better alternative.
              </p>
              <p>
                Today, we've repaired over 10,000 devices and continue to set the standard for 
                quality, speed, and customer service in the smartphone repair industry. We're not 
                just a repair shop – we're your technology partners.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/17537d8c-183e-4f40-a10b-8227a6618da7.png"
              alt="PhoneFix Pro Workshop"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-gray-600">Years Serving</div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                  <Badge variant="outline" className="mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-700">Specialties:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Partnerships</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              Visit Our Store
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="font-medium">123 Tech Street</p>
              <p className="text-gray-600">Downtown, City 12345</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-medium mb-2">Store Hours</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Contact Info</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@phonefixpro.com</p>
                  <p>Emergency: (555) 911-PHONE</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
