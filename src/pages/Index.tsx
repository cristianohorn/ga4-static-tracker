import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { trackPageView, trackScroll } from "@/utils/analytics";

const Index = () => {
  useEffect(() => {
    // Track page view on mount
    trackPageView(window.location.pathname, 'Home - Studio Noir');

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / documentHeight) * 100;
      
      // Track at 25%, 50%, 75%, and 100% milestones
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        if (scrollPercentage >= 25 && scrollPercentage < 50 && maxScroll < 50) {
          trackScroll(25);
        } else if (scrollPercentage >= 50 && scrollPercentage < 75 && maxScroll < 75) {
          trackScroll(50);
        } else if (scrollPercentage >= 75 && scrollPercentage < 100 && maxScroll < 100) {
          trackScroll(75);
        } else if (scrollPercentage >= 100) {
          trackScroll(100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
