import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Front-End Development",
      description: "React, TypeScript, Vite, Tailwind CSS"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "UI Engineering & Design Systems",
      description: "Shadcn UI, Radix UI, component architecture"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Performance & Accessibility",
      description: "Lighthouse 90+, a11y best practices, SEO"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Animations & Micro-Interactions",
      description: "Framer Motion, smooth UX, subtle motion"
    }
  ];

  const techStack = [
    "HTML5", "CSS3", "JavaScript", "TypeScript",
    "React", "Vite", "Tailwind CSS", "Shadcn UI", "Radix UI",
    "Framer Motion", "Recharts", "React Router"
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Front-End Developer focused on building accessible, performant, and beautiful user interfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 neon-border">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-neon-pink">
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                With a strong focus on front-end development, I build responsive, accessible interfaces with React and modern tooling. I care deeply about performance, design systems, and pixel-perfect execution.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I write clean, maintainable UI code and keep up with the fast-moving front-end ecosystem. When I'm not coding, I explore new UI patterns, refine component libraries, or share knowledge with the community.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-heading text-lg font-semibold mb-4 text-neon-pink">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-sm text-neon-pink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 glow-hover group"
              >
                <div className="text-neon-pink mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="font-heading font-semibold mb-2 text-foreground">
                  {skill.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;