import ClubMap from "@/components/Clubs";
import Beams from "@/components/Beams";
import CardSwap, { Card } from "@/components/ClubCards";
import BlurText from "@/components/BlurText";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { color } from "framer-motion";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ClubsPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };

  return (
    <div className="w-screen min-h-screen relative overflow-hidden bg-black flex flex-col items-center px-4 md:px-12 lg:px-24">
      
      <div className="mt-12 md:mt-20 lg:mt-24 text-center md:text-left w-full">
        <BlurText
          text="Our Clubs"
          delay={150}
          animateBy="words"
          direction="right"
          onAnimationComplete={handleAnimationComplete}
          
          className={`${josefin.className} text-4xl sm:text-5xl md:text-6xl text-[#00f0f4] mt-6`}
        />
      </div>

      
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-8 mt-12">
        
        <div className="text-white max-w-md order-2 md:order-1">
          <BlurText
          text="IIT BHU Varanasi has clubs to quench students' thirst for knowledge while giving them a fun and engaging college life."
          delay={150}
          animateBy="words"
          direction="right"
          onAnimationComplete={handleAnimationComplete}
          className={`${josefin.className} 
  text-[15px] sm:text-[15px] md:text-[20px] text-white 
  mt-1 sm:mt-4 md:mt-[5px]`}
        />
          {/* <h2 className="text-2xl font-bold mb-4 mt-3" >About Our Clubs</h2>
          <p className="text-gray-300">
            IIT BHU Varanasi has clubs to quench students' thirst for knowledge while giving them a fun and engaging college life.
          </p> */}

          <Link
        href="/"
        className={` ${josefin.className} inline-block px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-200 mx-auto mt-[50px]`}
      >
        Back to Home
      </Link>
        </div>

      
        <div
          className="order-1 md:order-2"
          style={{ height: "auto", position: "relative", top:"240px" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
            
          >
            <Card>
              <h3>Card 1</h3>
              <p>Club Image and description</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Club Image and description</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Club Image and description</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}
