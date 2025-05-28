import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../elements/button";

export default function HeroSection() {
  const [textYOffset, setTextYOffset] = useState({ initial: 280, animate: 320 });
  const [boxYOffset, setBoxYOffset] = useState({ initial: 690, animate: 580 });

  useEffect(() => {
    const updateOffsets = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setTextYOffset({ initial: 100, animate: 150 });
        setBoxYOffset({ initial: 1000, animate: 1200 }); // mobile: more downward
      } else {
        setTextYOffset({ initial: 280, animate: 320 });
        setBoxYOffset({ initial: 580, animate: 690 }); // desktop: less downward
      }
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  // Debug current state - will show latest values after render
  console.log("Current offsets:", { textYOffset, boxYOffset });

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[180vh] px-8 md:px-20 py-20"
      style={{
        backgroundImage: `url('/assets/A3A4D5C8-6C66-4DE0-8063-9EF3E4D04BEC.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          key={`text-${textYOffset.animate}`} 
          className="text-white max-w-3xl space-y-4 font-metric text-center md:text-left mx-auto md:mx-0"
          initial={{ opacity: 0, y: textYOffset.initial }}
          animate={{ opacity: 1, y: textYOffset.animate }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-relaxed mb-4">
            Willkommen zur HPE Private Lounge – Exklusive Vorteile für unsere Partner
          </h1>
          <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
            Sichern Sie sich Tank- und Wunschgutscheine und gewinnen Sie einen spektakulären Aktivurlaub für 2
          </h2>

          <Button asChild>
            <a
              href="#registration"
              className="inline-block px-8 py-3 text-white text-lg font-medium rounded transition"
            >
              Jetzt registrieren & gewinnen
            </a>
          </Button>
        </motion.div>

        <div className="h-12 md:h-24" />

        <motion.div
          key={`box-${boxYOffset.animate}`} 
          className="relative z-10 bg-white text-black w-full max-w-5xl mx-auto px-8 py-10 space-y-6 border border-gray-300 font-metric mb-6"
          initial={{ opacity: 0, y: boxYOffset.initial }}
          animate={{ opacity: 1, y: boxYOffset.animate }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center font-bold">
            HPE Private Lounge – Gewinnen Sie einen unvergesslichen Aktivurlaub, sowie Tank- und Wunschgutscheine
          </h2>

          <div className="flex justify-center">
            <img
              src="/assets/asset1.png"
              alt="Aktivurlaub Preis Vorschau"
              className="max-h-64 w-full object-cover"
              style={{ borderRadius: 0 }}
            />
          </div>

          <p className="text-lg md:text-xl text-center">
            Entdecken Sie exklusive Vorteile und maßgeschneiderte Angebote unseres HPE Private Lounge Programms. Werden Sie Teil eines exklusiven Clubs, der speziell darauf ausgerichtet ist, Ihr Hewlett Packard Enterprise & HPE Aruba Networking Geschäftswachstum zu fördern und Ihre Erfahrungen mit unseren führenden Produkten zu bereichern.
          </p>

          <div className="flex justify-center">
            <Button asChild>
              <a href="#registration" className="px-6 py-3 text-lg font-medium">
                Jetzt registrieren & gewinnen
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
