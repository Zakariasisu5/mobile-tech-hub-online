import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";
import iphone15ProMaxImage from "@/assets/iphone-15-pro-max.jpg";
import iphone15Image from "@/assets/iphone-15.jpg";
import iphone14ProImage from "@/assets/iphone-14-pro.jpg";
import samsungS24UltraImage from "@/assets/samsung-s24-ultra.jpg";
import samsungS24Image from "@/assets/samsung-s24.jpg";
import samsungA54Image from "@/assets/samsung-a54.jpg";
import pixel8ProImage from "@/assets/pixel-8-pro.jpg";
import oneplus12Image from "@/assets/oneplus-12.jpg";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    // iPhone Products
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "iphone",
      price: 1199,
      originalPrice: 1299,
      image: iphone15ProMaxImage,
      rating: 4.8,
      reviews: 124,
      features: ["A17 Pro Chip", "48MP Camera", "Titanium Design"],
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: "iPhone 15",
      category: "iphone",
      price: 799,
      originalPrice: 899,
      image: iphone15Image,
      rating: 4.7,
      reviews: 89,
      features: ["A16 Bionic", "48MP Main Camera", "USB-C"],
      inStock: true,
      isNew: true,
    },
    {
      id: 3,
      name: "iPhone 14 Pro",
      category: "iphone",
      price: 899,
      originalPrice: 999,
      image: iphone14ProImage,
      rating: 4.6,
      reviews: 156,
      features: ["A16 Bionic", "Dynamic Island", "Pro Camera System"],
      inStock: true,
      isNew: false,
    },
    // Samsung Products
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      category: "samsung",
      price: 1199,
      originalPrice: 1299,
      image: samsungS24UltraImage,
      rating: 4.7,
      reviews: 98,
      features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen Included"],
      inStock: true,
      isNew: true,
    },
    {
      id: 5,
      name: "Samsung Galaxy S24",
      category: "samsung",
      price: 799,
      originalPrice: 899,
      image: samsungS24Image,
      rating: 4.5,
      reviews: 67,
      features: ["Snapdragon 8 Gen 3", "50MP Camera", "7 Years Updates"],
      inStock: true,
      isNew: true,
    },
    {
      id: 6,
      name: "Samsung Galaxy A54",
      category: "samsung",
      price: 399,
      originalPrice: 449,
      image: samsungA54Image,
      rating: 4.3,
      reviews: 45,
      features: ["Exynos 1380", "50MP Triple Camera", "5000mAh Battery"],
      inStock: true,
      isNew: false,
    },
    // Other Brands
    {
      id: 7,
      name: "Google Pixel 8 Pro",
      category: "others",
      price: 999,
      originalPrice: 1099,
      image: pixel8ProImage,
      rating: 4.6,
      reviews: 78,
      features: ["Tensor G3", "AI Photography", "7 Years Updates"],
      inStock: true,
      isNew: true,
    },
    {
      id: 8,
      name: "OnePlus 12",
      category: "others",
      price: 799,
      originalPrice: 899,
      image: oneplus12Image,
      rating: 4.4,
      reviews: 56,
      features: ["Snapdragon 8 Gen 3", "50MP Hasselblad", "100W Fast Charging"],
      inStock: false,
      isNew: true,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'iphone', label: 'iPhone' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'others', label: 'Other Brands' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under $500' },
    { value: '500-800', label: '$500 - $800' },
    { value: '800-1200', label: '$800 - $1200' },
    { value: '1200+', label: '$1200+' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = (() => {
      if (selectedPriceRange === 'all') return true;
      const [min, max] = selectedPriceRange.split('-').map(p => p.replace('+', ''));
      if (selectedPriceRange.includes('+')) {
        return product.price >= parseInt(min);
      }
      return product.price >= parseInt(min) && product.price <= parseInt(max);
    })();

    return matchesCategory && matchesSearch && matchesPrice;
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">Find the perfect smartphone for your needs</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="relative">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-blue-600">
                      New
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <CardDescription className="mb-4">
                  <ul className="text-sm space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardDescription>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? 'Buy Now' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
