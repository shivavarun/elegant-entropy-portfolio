
import { Timeline } from "@/components/ui/timeline";
import { ShootingStars } from "@/components/ui/shooting-stars";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Store",
      content: (
        <div className="text-white">
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-8">
            A modern clothing e-commerce platform with advanced filtering, shopping cart functionality, and a seamless checkout process.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/1722307a-a1da-4627-98fd-597c99d0f4bc.png"
              alt="E-commerce home page"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/fb452799-229c-4c3a-b65b-9bb68ac6ec4b.png"
              alt="E-commerce products page"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/dd664b13-d2de-4836-8a7c-6629a908a399.png"
              alt="Product detail page"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/c1265774-7e66-44b2-a71f-d6f9c56c7b61.png"
              alt="Checkout page"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Advanced filtering system with size, availability, and price range</li>
              <li>• Responsive design with mobile-first approach</li>
              <li>• Interactive product gallery with multiple view options</li>
              <li>• Streamlined checkout process with order summary</li>
              <li>• Shopping cart with real-time updates</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jewellery Store",
      content: (
        <div className="text-white">
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-8">
            An elegant jewellery e-commerce website with 3D product visualization and secure payment integration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/274d3b16-3b42-45dd-a0f2-0bcdf647a202.png"
              alt="Gold and diamond jewellery"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/ceba49a8-08d6-4779-a8c6-0fadf678063b.png"
              alt="Gold bracelet and ring"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Premium jewellery showcase with high-quality imagery</li>
              <li>• Detailed product specifications and sizing options</li>
              <li>• Secure payment processing for valuable items</li>
              <li>• Custom jewellery design consultation</li>
              <li>• International shipping with CITES compliance</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile Food UI Kit",
      content: (
        <div className="text-white">
          <p className="text-gray-300 text-xs md:text-sm font-normal mb-8">
            A comprehensive mobile UI kit for food delivery applications, featuring modern design components, intuitive user flows, and smooth animations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/235383c3-0a90-404c-a066-41ba8db7987e.png"
              alt="User onboarding screens"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/3574f3b5-d3fa-49fe-812e-7983c485d425.png"
              alt="Restaurant listing and search"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/04777d4b-ef79-4ad7-afc6-d6a2183698ba.png"
              alt="Food ordering and checkout process"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/48710398-5e70-40b0-b426-9a5083ea8f01.png"
              alt="User profile and order tracking"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Sleek onboarding flow with social authentication</li>
              <li>• Restaurant discovery with advanced search and filters</li>
              <li>• Real-time order tracking with live map integration</li>
              <li>• Secure payment system with multiple options</li>
              <li>• User profile management and order history</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative bg-black">
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
      
      <Timeline data={projects} />
    </section>
  );
};

export default ProjectsSection;
