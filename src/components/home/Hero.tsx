
import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 [text-wrap:balance] text-shadow-lg animate-fadeInUp animate-once">
          Discover the World's <span className="text-sky-300">Hidden Gems</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 [text-wrap:balance] text-shadow animate-fadeInUp animate-once animate-delay-100">
          Explore breathtaking destinations and create unforgettable memories with our premium travel experiences.
        </p>

        {/* Search box */}
        <div className="max-w-4xl mx-auto animate-fadeInUp animate-once animate-delay-200">
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500" size={20} />
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="w-full bg-white/80 dark:bg-black/40 border border-white/30 rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500" size={20} />
                <input
                  type="text"
                  placeholder="Travel dates"
                  className="w-full bg-white/80 dark:bg-black/40 border border-white/30 rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500" size={20} />
                <select
                  className="w-full bg-white/80 dark:bg-black/40 border border-white/30 rounded-lg py-3 pl-10 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-sky-500/30 appearance-none"
                >
                  <option value="">Travelers</option>
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4+ Travelers</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-sky-500/20">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fadeInUp animate-once animate-delay-300">
          <button className="glass text-white py-2.5 px-6 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105">
            Book Now
          </button>
          <button className="glass text-white py-2.5 px-6 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105">
            Explore Destinations
          </button>
          <button className="glass text-white py-2.5 px-6 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105">
            Check Reviews
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-fadeInDown animate-infinite"></div>
        </div>
      </div>
    </section>
  );
}
