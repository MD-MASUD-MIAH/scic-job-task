"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {  FiUsers ,FiHeart,FiBook} from "react-icons/fi"; 
import Link from "next/link";
function Hero(props) {
 const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://i.ibb.co.com/Qv39yKVV/Flux-Dev-highresolution-stock-photo-of-A-clean-modern-and-prof-2.jpg",
    "https://i.ibb.co.com/N6D9sJBc/Flux-Dev-highresolution-stock-photo-of-A-clean-modern-and-prof-1.jpg",
    "https://i.ibb.co.com/Psc4RcRb/Flux-Dev-highresolution-stock-photo-of-A-clean-modern-and-prof-0.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden md:h-[calc(100vh-120px)]">
  {/* Background images with fade transition */}
  <div className="absolute inset-0">
    {images.map((img, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentImage === index ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={img}
          alt={`Medical ${index + 1}`}
          className="w-full h-full object-cover object-center "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-100/20" />
      </motion.div>
    ))}
  </div>

  <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-6 lg:px-12 py-24">
      <div className="w-full max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Empower Your{" "}
            <span className="text-blue-600">Health Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Discover expert insights, trusted advice, and the latest in medical research to stay informed and healthy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Read Articles
              </motion.button>
            </Link>
            <Link href="/resources">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent hover:bg-blue-50 text-blue-600 font-semibold rounded-lg border border-blue-600 shadow-md transition-all duration-300"
              >
                Explore Resources
              </motion.button>
            </Link>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-3 bg-blue-100 rounded-full">
                <FiBook className="text-blue-600 text-xl" />
              </div>
              <span className="font-medium">Expert Articles</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-3 bg-blue-100 rounded-full">
                <FiHeart className="text-blue-600 text-xl" />
              </div>
              <span className="font-medium">Health Tips</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-3 bg-blue-100 rounded-full">
                <FiUsers className="text-blue-600 text-xl" />
              </div>
              <span className="font-medium">Community Insights</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>

  {/* Animated scroll indicator */}
  <motion.div
    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-6 left-1/2 -translate-x-1/2"
  >
    <svg
      className="w-6 h-6 text-blue-600 animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </motion.div>
</section>
  );
}

export default Hero;
