import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

/**
 * Minimalist Tropical Luxury Design
 * - Generous whitespace and asymmetric layouts
 * - Warm earth tones (sand, cream, ocean blue, charcoal)
 * - Smooth scroll animations and subtle hover effects
 * - Playfair Display for headings, Lato for body, Caveat for accents
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-cream text-charcoal font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl">Hotel Paradise</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sleep" className="hover:text-ocean transition-colors">Sleep</a>
            <a href="#feast" className="hover:text-ocean transition-colors">Feast</a>
            <a href="#wellbeing" className="hover:text-ocean transition-colors">Wellbeing</a>
            <a href="#contact" className="hover:text-ocean transition-colors">Contact</a>
          </div>
          <Button className="btn-luxury">Book Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-0 relative overflow-hidden">
        <div className="relative min-h-screen flex items-center justify-center">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/luxury-hotel-hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-6 lg:px-12 py-20">
            <div className="font-accent text-2xl text-sand mb-4">Welcome to Hotel Paradise</div>
            <h1 className="font-display text-5xl lg:text-7xl leading-tight mb-6 text-white">
              Luxury Hotel Experience
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              Experience world-class hospitality, exceptional dining, and premium amenities. Your perfect getaway awaits at our luxury destination.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Sleep Section */}
      <section id="sleep" className="py-20 bg-cream">
        <div className="container">
          <div className="mb-16">
            <div className="font-accent text-2xl text-ocean mb-2">Rooms & Suites</div>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">Accommodation</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Choose from our selection of elegantly appointed rooms and suites, each featuring premium furnishings, modern amenities, and stunning views.
            </p>
          </div>

          {/* Accommodation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Standard Room", desc: "Comfortable room with city or garden view", price: "$180" },
              { name: "Deluxe Room", desc: "Spacious room with premium bedding and amenities", price: "$280" },
              { name: "Suite", desc: "Separate living area with modern furnishings", price: "$420" },
            ].map((room, idx) => (
              <div key={idx} className="card-luxury group overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-sand to-ocean/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-3xl text-ocean/50">{idx + 1}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">{room.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{room.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-ocean">{room.price}/night</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Feast Section */}
      <section id="feast" className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="font-accent text-2xl text-ocean mb-2">Fine Dining</div>
              <h2 className="font-display text-4xl lg:text-5xl mb-4">Fine Dining</h2>
              <p className="text-lg text-gray-600 mb-6">
                Indulge in world-class cuisine prepared by our award-winning chefs. From casual dining to fine dining experiences, we offer exceptional culinary excellence.
              </p>
              <Button className="btn-luxury">Reserve a Table</Button>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663470810298/YBehhQJxNGb2ADEfjUW2Ks/luxury-dining-LJJHNWwNYamww2fXmuRkmz.webp"
              alt="Fine dining restaurant"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Restaurants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "The Grill House", cuisine: "Steakhouse", desc: "Premium cuts and fine wines in an elegant setting" },
              { name: "Coastal Bistro", cuisine: "International", desc: "Contemporary cuisine with global influences" },
              { name: "Cafe Meridian", cuisine: "Casual Dining", desc: "Relaxed atmosphere with diverse menu options" },
              { name: "The Lounge Bar", cuisine: "Cocktails & Tapas", desc: "Craft cocktails and light bites in a sophisticated ambiance" },
            ].map((restaurant, idx) => (
              <div key={idx} className="card-luxury p-6 border border-border">
                <h3 className="font-display text-2xl mb-1">{restaurant.name}</h3>
                <p className="text-sm text-ocean font-medium mb-3">{restaurant.cuisine}</p>
                <p className="text-gray-600 mb-4">{restaurant.desc}</p>
                <a href="#" className="inline-flex items-center text-ocean hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Wellbeing Section */}
      <section id="wellbeing" className="py-20 bg-cream">
        <div className="container">
          <div className="mb-16">
            <div className="font-accent text-2xl text-ocean mb-2">Health & Wellness</div>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">Spa & Fitness</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Relax and rejuvenate at our full-service spa and state-of-the-art fitness center. Enjoy professional treatments, personal training, and wellness programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663470810298/YBehhQJxNGb2ADEfjUW2Ks/luxury-spa-modern-PQsKnATKdajCpDwdh2jFDp.webp"
              alt="Modern luxury spa and wellness"
              className="rounded-lg shadow-lg"
            />
            <div>
              <div className="space-y-6">
                {[
                  { title: "Yoga Classes", time: "7:00 AM & 5:00 PM" },
                  { title: "Spa Treatments", time: "9:00 AM - 9:00 PM" },
                  { title: "Personal Training", time: "By appointment" },
                  { title: "Fitness Classes", time: "Various times" },
                ].map((activity, idx) => (
                  <div key={idx} className="border-l-2 border-ocean pl-4">
                    <h3 className="font-display text-lg">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                ))}
              </div>
              <Button className="btn-luxury mt-8">Register Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Kids Club Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-accent text-2xl text-ocean mb-2">Family Fun</div>
              <h2 className="font-display text-4xl lg:text-5xl mb-4">Kids Club & Pool</h2>
              <p className="text-lg text-gray-600 mb-6">
                A safe and fun environment where children can play, learn, and make memories. Our dedicated kids club features supervised activities, games, and entertainment for all ages.
              </p>
              <div className="space-y-3 mb-8">
                <p className="flex items-center gap-3">
                  <span className="text-ocean">✓</span> Supervised activities and games
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-ocean">✓</span> Dedicated kids pool and splash area
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-ocean">✓</span> Arts, crafts, and entertainment programs
                </p>
              </div>
              <Button className="btn-luxury">Enroll Your Child</Button>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663470810298/YBehhQJxNGb2ADEfjUW2Ks/luxury-kids-club-CythB9gbapskhwPf6KDoHs.webp"
              alt="Modern luxury kids club"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Philosophy Section */}
      <section className="py-20 bg-ocean text-cream">
        <div className="container text-center">
          <div className="font-accent text-2xl mb-4">Our Commitment</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-8 max-w-3xl mx-auto">
            Excellence in Every Detail
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed opacity-90">
            At Tropical Paradise, we believe that exceptional hospitality is about attention to detail and genuine care. We're committed to providing world-class service, sustainable practices, and unforgettable experiences that exceed your expectations.
          </p>
          <Button className="bg-cream text-ocean hover:bg-sand">Learn About Regeneration</Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-cream">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl mb-4">Stay Connected</h2>
            <p className="text-gray-600">Subscribe to our newsletter for updates on events, experiences, and special offers.</p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-ocean"
            />
            <Button className="btn-luxury">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-charcoal text-cream py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-display text-xl mb-4">Hotel Paradise</h3>
              <p className="text-sm opacity-75">Your premier destination for luxury hospitality and unforgettable experiences.</p>
            </div>
            <div>
              <h4 className="font-display mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#sleep" className="hover:text-ocean transition-colors">Sleep</a></li>
                <li><a href="#feast" className="hover:text-ocean transition-colors">Feast</a></li>
                <li><a href="#wellbeing" className="hover:text-ocean transition-colors">Wellbeing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@example.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 123 Beach Road, Coastal City, CC 12345
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-ocean transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-ocean transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-ocean transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-ocean/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2026 Hotel Paradise. All rights reserved. | Excellence in Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
