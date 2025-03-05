
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Destination = {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 1200,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 950,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 1400,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Amalfi Coast",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 1100,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Machu Picchu",
    location: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 1300,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Maldives",
    location: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 1800,
    rating: 4.9,
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary mb-2">Explore</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Destinations</h3>
          </div>
          <Link
            to="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all destinations
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, idx) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              className={cn(
                "animate-fadeInUp animate-once",
                idx === 0 ? "animate-delay-100" :
                idx === 1 ? "animate-delay-200" :
                idx === 2 ? "animate-delay-300" :
                idx === 3 ? "animate-delay-400" :
                "animate-delay-500"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ 
  destination, 
  className 
}: { 
  destination: Destination; 
  className?: string 
}) {
  return (
    <div 
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
      
      <div className="absolute bottom-0 w-full p-6">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
            <p className="text-white/80 text-sm">{destination.location}</p>
          </div>
          <div className="text-right">
            <div className="text-white font-bold">${destination.price}</div>
            <div className="text-white/80 text-sm">Per person</div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4">
        <div className="bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full py-1 px-3 text-xs font-semibold">
          {destination.rating} ★
        </div>
      </div>
      
      <Link
        to={`/destinations/${destination.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${destination.name}`}
      >
        <span className="sr-only">View destination</span>
      </Link>
    </div>
  );
}
