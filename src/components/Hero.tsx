import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Simple floating dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink rounded-full gentle-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Della Yunika Zebua</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-text-secondary max-w-2xl mx-auto">
            I'm a passionate{" "}
            <span className="text-neon-pink font-semibold">Front-End Developer</span>
            {" "}crafting beautiful, functional, and user-centered web interfaces
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-hover bg-neon-pink hover:bg-neon-pink-hover text-background font-semibold px-8 py-3"
              onClick={scrollToProjects}
            >
              Explore My Work
            </Button>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/dellayunika" 
                className="p-3 rounded-full border border-neon-pink/50 hover:border-neon-pink transition-all duration-300 glow-hover"
              >
                <Github className="w-5 h-5 text-neon-pink" />
              </a>
              <a 
                href="https://www.linkedin.com/in/della-yunika-zebua-7b876b206" 
                className="p-3 rounded-full border border-neon-pink/50 hover:border-neon-pink transition-all duration-300 glow-hover"
              >
                <Linkedin className="w-5 h-5 text-neon-pink" />
              </a>
              <a 
                href="mailto:yuyudella4@gmail.com" 
                className="p-3 rounded-full border border-neon-pink/50 hover:border-neon-pink transition-all duration-300 glow-hover"
              >
                <Mail className="w-5 h-5 text-neon-pink" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-neon-pink" />
      </div>
    </section>
  );
};

export default Hero;