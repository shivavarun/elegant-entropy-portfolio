"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function PixelatedCanvasDemo() {
  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
        src="/profile.jpg"
        width={560}
        height={700}
        cellSize={4}
        dotScale={0.85}
        shape="circle"
        backgroundColor="#000000"
        dropoutStrength={0.3}
        interactive
        distortionStrength={4}
        distortionRadius={110}
        distortionMode="repel"
        followSpeed={0.25}
        jitterStrength={3}
        jitterSpeed={3}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.15}
        className="rounded-xl border border-neutral-800 shadow-lg"
      />
    </div>
  );
}


