
import { useState } from "react";
import { Search, Calendar, Users, Filter, MapPin, Star, Wifi, Coffee, Tv, Bath } from "lucide-react";

type Hotel = {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  amenities: string[];
};

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Grand Plaza Resort",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Experience luxury and relaxation in this beachfront resort with stunning ocean views and world-class amenities.",
    price: 250,
    rating: 4.8,
    category: "Resort",
    amenities: ["Pool", "Spa", "Restaurant", "Free WiFi", "Beach Access"],
  },
  {
    id: 2,
    name: "The Skyline Hotel",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Located in the heart of Manhattan, this modern hotel offers easy access to famous attractions and vibrant nightlife.",
    price: 320,
    rating: 4.6,
    category: "City Hotel",
    amenities: ["Gym", "Restaurant", "Business Center", "Free WiFi", "City View"],
  },
  {
    id: 3,
    name: "Alpine Lodge",
    location: "Swiss Alps, Switzerland",
    image: "https://images.unsplash.com/photo-1610532550975-f31049f243cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Cozy mountain retreat offering stunning views, traditional cuisine, and easy access to ski slopes.",
    price: 180,
    rating: 4.7,
    category: "Mountain Lodge",
    amenities: ["Fireplace", "Ski Storage", "Restaurant", "Hot Tub", "Mountain View"],
  },
  {
    id: 4,
    name: "Seaside Villa Resort",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Luxurious overwater bungalows with private pools and direct access to crystal clear waters.",
    price: 550,
    rating: 4.9,
    category: "Resort",
    amenities: ["Private Pool", "Ocean Access", "Spa", "Restaurant", "Water Sports"],
  },
  {
    id: 5,
    name: "Heritage Palace Hotel",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Classic elegance in a historic building, offering refined rooms and exceptional service in the heart of Paris.",
    price: 420,
    rating: 4.8,
    category: "Boutique Hotel",
    amenities: ["Fine Dining", "Concierge", "Spa", "Room Service", "City View"],
  },
  {
    id: 6,
    name: "Desert Oasis Resort",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Luxury desert retreat with traditional architecture, private pools, and stunning dune views.",
    price: 380,
    rating: 4.7,
    category: "Resort",
    amenities: ["Desert Tours", "Pool", "Spa", "Restaurant", "Free WiFi"],
  },
];

const categories = ["All", "Resort", "City Hotel", "Boutique Hotel", "Mountain Lodge", "Villa"];
const priceRanges = ["All", "Under $200", "$200-$300", "$300-$400", "$400+"];

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);

  const filterByPriceRange = (hotel: Hotel) => {
    if (selectedPriceRange === "All") return true;
    if (selectedPriceRange === "Under $200") return hotel.price < 200;
    if (selectedPriceRange === "$200-$300") return hotel.price >= 200 && hotel.price < 300;
    if (selectedPriceRange === "$300-$400") return hotel.price >= 300 && hotel.price < 400;
    if (selectedPriceRange === "$400+") return hotel.price >= 400;
    return true;
  };

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || hotel.category === selectedCategory;
    const matchesPriceRange = filterByPriceRange(hotel);
    
    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  return (
    <div>
      {/* Hero section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your Perfect Stay
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover luxury hotels, resorts, and vacation rentals around the world.
              </p>
            </div>
            
            {/* Booking form */}
            <div className="bg-card rounded-xl shadow-lg p-6">
              <form className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="text"
                      placeholder="Search for hotels, resorts, or destinations..."
                      className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="date"
                      placeholder="Check-in"
                      className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="date"
                      placeholder="Check-out"
                      className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <select
                      className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>
                
                <div className="md:col-span-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground rounded-lg py-3 transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    Search Hotels
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels list */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl shadow-md p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <Filter size={18} className="mr-2" />
                    Filters
                  </h3>
                  <hr className="border-border mb-4" />
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Hotel Type</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="mr-2"
                          />
                          {category}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <label key={range} className="flex items-center">
                          <input
                            type="radio"
                            name="priceRange"
                            checked={selectedPriceRange === range}
                            onChange={() => setSelectedPriceRange(range)}
                            className="mr-2"
                          />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedPriceRange("All");
                    setSearchTerm("");
                  }}
                  className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg py-2 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Hotels grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold">{filteredHotels.length} Hotels Found</h2>
                <select className="bg-background border border-border rounded-lg py-2 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              
              <div className="space-y-6">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>

              {filteredHotels.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No hotels found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover md:absolute inset-0"
        />
      </div>
      
      <div className="md:w-2/3 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{hotel.name}</h3>
          <div className="bg-primary/10 rounded-full py-1 px-3 text-xs font-semibold flex items-center">
            <Star className="w-3 h-3 mr-1 text-yellow-500" />
            {hotel.rating}
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{hotel.location}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {hotel.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 4).map((amenity, idx) => (
            <div key={idx} className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-full flex items-center">
              {amenity.includes("WiFi") && <Wifi className="w-3 h-3 mr-1" />}
              {amenity.includes("Restaurant") && <Coffee className="w-3 h-3 mr-1" />}
              {amenity.includes("TV") && <Tv className="w-3 h-3 mr-1" />}
              {amenity.includes("Bath") && <Bath className="w-3 h-3 mr-1" />}
              {amenity}
            </div>
          ))}
          {hotel.amenities.length > 4 && (
            <div className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-full">
              +{hotel.amenities.length - 4} more
            </div>
          )}
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">${hotel.price}</span>
            <span className="text-sm text-muted-foreground"> / night</span>
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
