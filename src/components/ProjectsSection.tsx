
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg",
    description: "A modern e-commerce platform with advanced filtering and search capabilities."
  },
  {
    id: 2,
    title: "Jewelry Store",
    category: "Web Design",
    image: "/placeholder.svg",
    description: "Elegant online jewelry store with 3D product visualization."
  },
  {
    id: 3,
    title: "Electronics Marketplace",
    category: "Web Development",
    image: "/placeholder.svg",
    description: "Feature-rich electronics marketplace with real-time inventory."
  },
  {
    id: 4,
    title: "Mobile App UI Kit",
    category: "Design",
    image: "/placeholder.svg",
    description: "Comprehensive mobile app UI kit with over 100 components."
  }
];

const categories = ["All", "Web Development", "Web Design", "Design"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gray-500">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
