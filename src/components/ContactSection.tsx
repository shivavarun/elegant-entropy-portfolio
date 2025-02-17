
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GlowEffect } from "@/components/ui/glow-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#eee,rgba(0,0,0,0)),radial-gradient(2px_2px_at_40px_70px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_50px_160px,#ddd,rgba(0,0,0,0)),radial-gradient(2px_2px_at_90px_40px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_130px_80px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_160px_120px,#ddd,rgba(0,0,0,0))] bg-repeat bg-[size:200px_200px] animate-[twinkle_5s_ease-in-out_infinite] opacity-50" />
      </div>

      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Start a Project
          </h2>
        </div>

        <div className="max-w-xl mx-auto relative">
          <GlowEffect
            colors={['#FFB7C5', '#4FABFF', '#9E7AFF', '#FE8BBB']}
            mode="breathe"
            blur="stronger"
            scale={1.2}
          />
          <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-800/50 shadow-sm focus:border-gray-400 focus:ring-gray-400 text-white sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-800/50 shadow-sm focus:border-gray-400 focus:ring-gray-400 text-white sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-800/50 shadow-sm focus:border-gray-400 focus:ring-gray-400 text-white sm:text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
