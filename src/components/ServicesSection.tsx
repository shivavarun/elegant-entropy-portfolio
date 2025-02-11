
import { Code, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies, optimized for performance and user experience."
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across devices."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user-centered principles and attention to detail."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white border border-gray-100 hover:border-gray-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
