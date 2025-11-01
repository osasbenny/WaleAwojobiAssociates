import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/const";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
