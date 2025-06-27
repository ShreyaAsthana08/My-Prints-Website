"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientAOSWrapper() {
  useEffect(() => {
    AOS.init({
      once: true, // animation only once
      duration: 800,
    });
  }, []);

  return null; // this component is just for AOS setup
}
