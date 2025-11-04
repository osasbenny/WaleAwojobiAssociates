import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from "@/const";

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">{COMPANY_NAME}</h3>
            <p className="text-primary-foreground/90 text-sm mb-4">
              Your trusted estate surveyors and valuation professionals providing top-tier services across Nigeria.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/listings" className="footer-link">
                  Property Listings
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Valuation Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Estate Surveying
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground">{COMPANY_ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY_PHONE[0]}`} className="footer-link flex items-center gap-2">
                  <Phone size={16} />
                  {COMPANY_PHONE[0]}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="footer-link flex items-center gap-2">
                  <Mail size={16} />
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-primary-foreground">&copy; 2025 Wale Awojobi & Associates | All Rights Reserved.</p>
            <p className="text-center text-primary-foreground">Designed by <a href="https://cactusdigitalmedia.ng" target="_blank" rel="noopener noreferrer" className="footer-link underline hover:no-underline">Cactus Digital Media</a></p>
            <div className="flex gap-6">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
