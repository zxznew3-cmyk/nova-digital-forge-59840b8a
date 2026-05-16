import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/nova-contact";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)]"
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
      <MessageCircle className="size-6 relative" />
    </motion.a>
  );
}
