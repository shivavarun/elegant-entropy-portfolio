
import Aurora from "@/components/ui/Aurora";

const AuroraSection = () => {
  return (
    <section className="relative h-32 w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Aurora
        colorStops={["#5227FF", "#00FFB2", "#FF00E5"]}
        amplitude={0.8}
        blend={0.6}
        speed={0.5}
      />
    </section>
  );
};

export default AuroraSection;
