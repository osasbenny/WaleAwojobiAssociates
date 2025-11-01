import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, COMPANY_PHONE, COMPANY_EMAIL } from "@/const";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground text-sm py-2">
        <div className="container flex justify-end gap-6">
          <a href={`tel:${COMPANY_PHONE[0]}`} className="flex items-center gap-2 hover:opacity-80 transition">
            <Phone size={16} />
            {COMPANY_PHONE[0]}
          </a>
          <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 hover:opacity-80 transition">
            <Mail size={16} />
            {COMPANY_EMAIL}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:opacity-80 transition">
          <img src="/logo.png" alt="Wale Awojobi Associates" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item: any) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent transition font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden md:inline btn-primary">
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-accent transition font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <a href="/contact" className="btn-primary text-center">
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
