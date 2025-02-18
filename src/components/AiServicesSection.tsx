
import { Brain, Bot, Database, Code, Server, Bot as Assistant, Mail, Share2, ShoppingCart, FileText, FileSearch, Stethoscope } from "lucide-react";
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
  }
];

const AiServicesSection = () => {
  return (
    <section className="section-padding relative bg-black text-white">
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
            AI Solutions
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Our AI Services
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Leverage the power of artificial intelligence to transform your business with our comprehensive suite of AI services.
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
      </div>
    </section>
  );
};

export default AiServicesSection;
