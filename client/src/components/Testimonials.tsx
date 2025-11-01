import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/const";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Stories from Our Clients
          </p>
          <h2 className="section-title">Read Testimonials from Our Satisfied Clients</h2>
          <p className="section-subtitle">
            Discover why our clients love working with us. Read their stories and experiences to understand the value
            and dedication we bring to every real estate journey.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-lg shadow-lg p-8 md:p-12 relative">
            {/* Stars */}
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-4 text-foreground">{testimonial.title}</h3>

            {/* Text */}
            <p className="text-lg text-center text-muted-foreground mb-6 italic">"{testimonial.text}"</p>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-foreground">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 border border-border rounded-full hover:bg-muted transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-2 border border-border rounded-full hover:bg-muted transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === current ? "bg-accent w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
