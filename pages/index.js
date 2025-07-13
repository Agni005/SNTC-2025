import Hyperspeed from "@/components/Hyperspeed";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridClubs from "@/components/GridClubs";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Aboutus from "@/components/AboutUs";
import "animate.css/animate.min.css";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <div className="relative w-screen min-h-screen overflow-hidden">
    
      <div className="fixed inset-0 z-0 right-10 top-2">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 300,
            roadWidth: 20,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>

      
      <div className="relative z-10 p-10 text-white w-screen">
        {/* <h1 className="text-4xl font-bold">SciTech Council</h1>
        <p className="mt-4">Welcome to the official website!</p> */}
        <Navbar/>
        <Hero/>
        

      </div>
      
    </div>
    {/* <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
    <div className="relative mt-40 px-10 left-[50px] w-screen">
          <GridClubs/>
    </div>
    </AnimationOnScroll> */}
    <div className="relative h-[600px] w-screen top-[100px] ">
      <Aboutus/>
      <Footer/>
    </div>
    
        </>
  );
}
