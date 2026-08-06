import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // validation
    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "nischay-dev-portfolio", 
        "template_eda2ig5", 
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "EJV8aWBcnOsxEy9U1" 
      );

      alert("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-8 w-full max-w-7xl mx-auto z-10"
    >
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading
        title="Let's Build Something Amazing Together"
        subtitle="Ready to take your digital presence to the next level? Drop me a message and let's talk about your project."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 relative z-10">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="h-full p-8 md:p-12" hoverEffect={false}>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-none md:hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </GlassCard>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <GlassCard className="p-8" hoverEffect={false}>
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:gladiatoruk1234@gmail.com"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-white/40 mb-1">Email</p>
                  <p className="font-medium">gladiatoruk1234@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918478912039"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-white/40 mb-1">Phone</p>
                  <p className="font-medium">+91 84789 12039</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/70">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-white/40 mb-1">Location</p>
                  <p className="font-medium">Kolkata, India</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 flex-grow" hoverEffect={false}>
            <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
            <div className="flex gap-4">
              {/* GitHub */}
              <a href="https://github.com/nischayio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-sm md:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/mavuru-nischay" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-sm md:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/nischayio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-sm md:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
