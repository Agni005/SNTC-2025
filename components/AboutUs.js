import { motion } from "framer-motion";

export default function Aboutus() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <h3 style={{fontFamily:"Josefin Sans", marginLeft:"45px"}} className="text-5xl">About Us: </h3>
      <div className="relative top-[50px] left-8 w-[1175px] backdrop-blur-md bg-white/10 border-b border-white/20 rounded-4xl h-[220px] p-10 text-xl" style={{boxSizing:"border-box", fontFamily:"Josefin Sans"}}>
      <span style={{color:"#00f0f4"}}>Igniting Innovation at
        IIT (BHU) Varanasi </span>
        The Science and Technology Council, nestled within the prestigious walls of IIT BHU, is a beacon of student initiative and innovation. This organization, driven by the relentless curiosity and passion of its student members, is dedicated to fostering a deep understanding and practical application of science and technology. It serves as a vibrant hub within the IIT BHU community, illuminating the path of scientific discovery and technological advancement. </div>
    </motion.div>
  );
}
