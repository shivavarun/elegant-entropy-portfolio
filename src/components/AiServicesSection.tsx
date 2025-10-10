import { Brain, Bot, Database, Code, Server, Bot as Assistant, Mail, Share2, ShoppingCart, FileText, FileSearch, Stethoscope, Smartphone, Palette } from "lucide-react";

const aiServices = [
  {
    title: "AI Agents & Automation",
    description: "Empower your business with intelligent AI agents that automate tasks, streamline operations, and enhance efficiency.",
    services: [
      {
        icon: Bot,
        title: "Custom AI Assistants",
        description: "AI-powered virtual assistants tailored for your business needs."
      },
      {
        icon: Assistant,
        title: "Chatbots & Conversational AI",
        description: "Smart chatbots for customer support, sales, and automation."
      },
      {
        icon: Code,
        title: "Task Automation Agents",
        description: "AI-driven tools that integrate with APIs for workflow automation."
      },
      {
        icon: Database,
        title: "AI Research & Data Collection",
        description: "AI that scrapes, summarizes, and analyzes data from the web."
      }
    ]
  },
  {
    title: "AI Business Solutions",
    description: "Leverage AI for smarter decision-making and seamless automation.",
    services: [
      {
        icon: Brain,
        title: "AI Sales & Lead Qualification",
        description: "Automate lead generation and client engagement processes."
      },
      {
        icon: Mail,
        title: "AI-powered Email Outreach",
        description: "AI that handles email campaigns and follow-ups effectively."
      },
      {
        icon: Share2,
        title: "AI Social Media Manager",
        description: "AI-driven content creation, scheduling, and audience engagement."
      },
      {
        icon: FileText,
        title: "AI Document Assistant",
        description: "AI that drafts, summarizes, and organizes documents intelligently."
      },
      {
        icon: FileSearch,
        title: "OCR & Text Processing",
        description: "Extract and process information from documents, PDFs, and images."
      },
      {
        icon: Stethoscope,
        title: "AI Virtual Assistant",
        description: "Smart chatbot for scheduling, guidance, and automated support."
      }
    ]
  },
  {
    title: "Development Services",
    description: "Expert development services to bring your digital vision to life with modern technologies and best practices.",
    services: [
      {
        icon: Code,
        title: "Web Development",
        description: "Custom websites built with modern technologies, optimized for performance and user experience."
      },
      {
        icon: Smartphone,
        title: "App Development",
        description: "Native and cross-platform mobile applications that deliver seamless experiences across devices."
      },
      {
        icon: Share2,
        title: "Digital Marketing",
        description: "Data-driven SEO, content and paid campaigns to grow traffic, leads and conversions."
      }
    ]
  }
];

const AiServicesSection = () => {
  return (
    <section id="services" className="section-padding relative bg-transparent text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            AI & Development Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Leverage the power of artificial intelligence and expert development to transform your business with our comprehensive suite of services.
          </p>
        </div>

        <div className="space-y-16">
          {aiServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <p className="mt-2 text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="relative rounded-3xl p-6 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{service.title}</h4>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default AiServicesSection;
