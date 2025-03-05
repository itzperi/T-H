
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  content: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    title: "Travel Enthusiast",
    content: "The trip to Santorini was an absolute dream. The accommodations were perfect, the views were breathtaking, and the local experiences arranged by Travelly were truly authentic.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Adventure Seeker",
    content: "I was amazed by how seamless my entire journey was. From booking to the return flight, Travelly took care of every detail. The Kyoto tour guide was knowledgeable and personable.",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    title: "Family Traveler",
    content: "Traveling with three kids can be challenging, but Travelly made our Bali vacation stress-free. The family-friendly accommodations and activities kept everyone happy.",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "David Williams",
    title: "Business Traveler",
    content: "I've used many travel services, but Travelly stands out for their attention to detail and exceptional customer service. My business trip to Tokyo was perfectly arranged.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 6000);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-primary mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of travelers choose our services for their journeys around the world.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-1/2 md:-translate-x-0 bg-background/80 dark:bg-card p-2 rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-1/2 md:translate-x-0 bg-background/80 dark:bg-card p-2 rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial card */}
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="relative">
              <Quote
                size={48}
                className="absolute -top-4 -left-4 text-primary/10"
                strokeWidth={1}
              />
              <div className="mb-10 text-center">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "absolute top-0 left-0 w-full transition-opacity duration-500 text-card-foreground",
                      idx === activeIndex ? "opacity-100 relative" : "opacity-0"
                    )}
                  >
                    <p className="text-lg md:text-xl mb-6 italic [text-wrap:balance]">
                      "{testimonial.content}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.title}</p>
                      <div className="mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={cn(
                              "text-lg",
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-muted"
                            )}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  idx === activeIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
