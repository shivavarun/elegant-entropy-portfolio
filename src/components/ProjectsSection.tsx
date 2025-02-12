
import { Timeline } from "@/components/ui/timeline";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Store",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
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
            <h4 className="text-foreground font-semibold mb-2">Key Features:</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
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
      title: "Jewelry Store",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Coming soon: An elegant jewelry e-commerce website with 3D product visualization and secure payment integration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/6b1798fd-f908-492c-9c93-863890728d81.png"
              alt="Shopping cart"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/lovable-uploads/5a0a06a9-b063-4ecd-b274-6b787218f9f9.png"
              alt="Product catalog"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mobile Food UI Kit",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Coming soon: A comprehensive UI kit for food delivery applications, featuring modern design components and smooth animations.
          </p>
          <div className="h-40 md:h-60 w-full flex items-center justify-center bg-secondary/30 rounded-lg">
            <p className="text-muted-foreground">Project in development</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative">
      <Timeline data={projects} />
    </section>
  );
};

export default ProjectsSection;
