
import { Brain, Bot, Database, Code, Server, Bot as Assistant, Mail, Share2, ShoppingCart, FileText, FileSearch, Stethoscope, Smartphone, Palette } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

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
        icon: Palette,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces designed with user-centered principles and attention to detail."
      }
    ]
  }
];

const AiServicesSection = () => {
  return (
    <section id="services" className="section-padding relative bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#eee,rgba(0,0,0,0)),radial-gradient(2px_2px_at_40px_70px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_50px_160px,#ddd,rgba(0,0,0,0)),radial-gradient(2px_2px_at_90px_40px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_130px_80px,#fff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_160px_120px,#ddd,rgba(0,0,0,0))] bg-repeat bg-[size:200px_200px] animate-[twinkle_5s_ease-in-out_infinite] opacity-50" />
      </div>

      <ShootingStars
        starColor="#00FFB2"
        trailColor="#4FABFF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <ShootingStars
        starColor="#FF00E5"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />

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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:translate-y-[-4px] group h-full w-full"
                  >
                    <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Section */}
        <div className="mt-32 relative">
          <div className="relative rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  AI is the Future
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Even industry giants like Zomato are leveraging AI for 10X growth! Nugget, their AI-native customer support platform, is revolutionizing business scalability and automation. The AI revolution is here—are you ready?
                </p>
              </div>
              <div className="relative h-[400px] w-full">
                <img 
                  src="/lovable-uploads/30880827-43f6-42dd-b1cb-a38615b25e13.png"
                  alt="Nugget AI Platform by Zomato"
                  className="object-cover h-full w-full rounded-r-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent rounded-r-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiServicesSection;
