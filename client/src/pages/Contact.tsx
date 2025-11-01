import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from "@/const";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: "", email: "", reason: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in Touch with Our Team</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="flex justify-center mb-4">
                <Phone className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">{COMPANY_PHONE[0]}</p>
              <p className="text-muted-foreground">{COMPANY_PHONE[1]}</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="flex justify-center mb-4">
                <Mail className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:opacity-80 transition">
                {COMPANY_EMAIL}
              </a>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground">{COMPANY_ADDRESS}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                <MessageSquare size={20} />
                <span>Thank you! We will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Reason for Contact</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  <option value="">Select a reason</option>
                  <option value="property-inquiry">Property Inquiry</option>
                  <option value="valuation">Valuation Services</option>
                  <option value="surveying">Surveying Services</option>
                  <option value="management">Property Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-6">Find Us</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Google Map Integration Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
