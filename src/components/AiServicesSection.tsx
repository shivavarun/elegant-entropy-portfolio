
import { Brain, Robot, Database, Code, Server } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

const aiServices = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance for implementing AI solutions in your business, with focus on ROI and scalability."
  },
  {
    icon: Robot,
    title: "Chatbot Development",
    description: "Custom AI chatbots and virtual assistants powered by latest LLM technologies for enhanced customer engagement."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Advanced AI-driven data analysis and visualization to unlock valuable insights from your business data."
  },
  {
    icon: Code,
    title: "AI Integration",
    description: "Seamless integration of AI models and APIs into your existing applications and workflows."
  },
  {
    icon: Server,
    title: "AI Infrastructure",
    description: "Scalable and secure infrastructure setup for AI model deployment and management."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:translate-y-[-4px] group"
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServicesSection;
