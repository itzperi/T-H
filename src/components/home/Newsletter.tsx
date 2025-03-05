
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Inspired For Your Next Trip
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, travel guides, and insider tips for your next adventure.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground rounded-lg py-3 px-6 transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
