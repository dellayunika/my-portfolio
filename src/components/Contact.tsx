import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Konfigurasi Formspree - Ganti dengan Form ID Anda
    const formId = 'mnnzlarr';
    
    fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast({
            title: "Error!",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Error!",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
        console.error('Formspree error:', error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/dellayunika", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/della-yunika-zebua-7b876b206", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:yuyudella4@gmail.com", label: "Email" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "yuyudella4@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "+62 851 1906 4438" },
    { icon: <MapPin className="w-5 h-5" />, label: "Gunungsitoli, Indonesia" },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-neon-pink/20 neon-border">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-neon-pink">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-neon-pink/30 focus:border-neon-pink text-foreground placeholder:text-text-secondary"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-neon-pink/30 focus:border-neon-pink text-foreground placeholder:text-text-secondary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-neon-pink/30 focus:border-neon-pink text-foreground placeholder:text-text-secondary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full glow-hover bg-neon-pink hover:bg-neon-pink-hover text-background font-semibold"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/20 backdrop-blur-sm border-neon-pink/20">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-neon-pink">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-neon-pink">
                      {info.icon}
                    </div>
                    <span className="text-text-secondary">
                      {info.label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/20 backdrop-blur-sm border-neon-pink/20">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-neon-pink">
                Follow me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-full border border-neon-pink/50 hover:border-neon-pink transition-all duration-300 glow-hover text-neon-pink hover:text-background hover:bg-neon-pink"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center p-8 bg-gradient-to-r from-neon-pink/10 to-neon-pink-glow/10 rounded-2xl border border-neon-pink/20">
              <h4 className="font-heading text-xl font-semibold mb-2 text-foreground">
                Ready to work together?
              </h4>
              <p className="text-text-secondary mb-4">
                Let's create something amazing together
              </p>
              <Button 
                variant="outline" 
                className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;