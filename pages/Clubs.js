import ClubMap from "@/components/Clubs";
import Beams from "@/components/Beams";

export default function ClubsPage() {
  return (
    <>
      {/* ✅ Fullscreen Beams background */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* ✅ Blur Header */}
      <div className="bg-white/10 backdrop-blur-md h-[100px] sticky top-0 w-full rounded-2xl p-10 text-4xl text-center z-10" style={{ fontFamily: "Josefin Sans" }}>
        Explore Our Clubs
      </div>

      {/* ✅ Scrollable ClubMap section with frosted gradient bg */}
      <div className=" mx-auto w-fit">
        <ClubMap />

        <div className="h-[300px] flex items-center justify-center">
          {/* Optional: Add footer or scroll prompt here */}
        </div>
      </div>
    </>
  );
}
