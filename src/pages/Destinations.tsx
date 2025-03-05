
import { useState } from "react";
import { Search, MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Destination = {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  category: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Experience the stunning white-washed buildings, blue domes, and breathtaking sunsets of this iconic Greek island.",
    price: 1200,
    rating: 4.8,
    category: "Beach",
  },
  {
    id: 2,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Discover the perfect balance of beautiful beaches, lush rice terraces, and spiritual temples in this tropical paradise.",
    price: 950,
    rating: 4.7,
    category: "Beach",
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Immerse yourself in Japanese culture with ancient temples, traditional tea houses, and beautiful cherry blossoms.",
    price: 1400,
    rating: 4.9,
    category: "Cultural",
  },
  {
    id: 4,
    name: "Amalfi Coast",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Enjoy the dramatic coastline, colorful villages, and delicious Italian cuisine along this UNESCO World Heritage site.",
    price: 1100,
    rating: 4.6,
    category: "Coastal",
  },
  {
    id: 5,
    name: "Machu Picchu",
    location: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Explore the ancient Incan citadel set high in the Andes Mountains, offering spectacular views and rich history.",
    price: 1300,
    rating: 4.9,
    category: "Historical",
  },
  {
    id: 6,
    name: "Maldives",
    location: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Relax in luxury overwater bungalows surrounded by crystal clear waters and vibrant coral reefs.",
    price: 1800,
    rating: 4.9,
    category: "Beach",
  },
  {
    id: 7,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Experience the romance, art, and cuisine of the City of Light, from the Eiffel Tower to charming cafés.",
    price: 1200,
    rating: 4.7,
    category: "City",
  },
  {
    id: 8,
    name: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Enjoy breathtaking mountain scenery, world-class skiing, and charming alpine villages in this winter wonderland.",
    price: 1500,
    rating: 4.8,
    category: "Mountain",
  },
  {
    id: 9,
    name: "Great Barrier Reef",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Discover the world's largest coral reef system with vibrant marine life and excellent diving opportunities.",
    price: 1700,
    rating: 4.8,
    category: "Beach",
  },
];

const categories = ["All", "Beach", "Mountain", "City", "Cultural", "Historical", "Coastal"];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" || destination.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our Destinations
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover breathtaking locations around the world and find your perfect getaway.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories and destinations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destinations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No destinations found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{destination.name}</h3>
          <div className="bg-primary/10 rounded-full py-1 px-3 text-xs font-semibold flex items-center">
            <Star className="w-3 h-3 mr-1 text-yellow-500" />
            {destination.rating}
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{destination.location}</span>
        </div>
        
        <p className="text-muted-foreground mb-6 line-clamp-3">
          {destination.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">
            ${destination.price}
            <span className="text-sm font-normal text-muted-foreground"> / person</span>
          </span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
