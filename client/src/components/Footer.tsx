import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted estate surveyors and valuation professionals providing top-tier services across Nigeria.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:opacity-80 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-80 transition">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/listings" className="hover:opacity-80 transition">
                  Property Listings
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Valuation Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Estate Surveying
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY_PHONE[0]}`} className="flex items-center gap-2 hover:opacity-80 transition">
                  <Phone size={16} />
                  {COMPANY_PHONE[0]}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 hover:opacity-80 transition">
                  <Mail size={16} />
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2025 {COMPANY_NAME} | All Rights Reserved.</p>
            <p className="text-center">Designed by Cactus Digital Media</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-80 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
