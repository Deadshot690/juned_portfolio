import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Quote */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3">
              <span className="gradient-text">Mohd Juned Md Taufik Bhojani</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              AI-Integrated Web Developer passionate about building intelligent, 
              scalable applications that solve real-world problems.
            </p>
            <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/50 pl-4">
              "I blend logic with creativity to engineer smart systems that solve real-world problems using the power of AI."
            </blockquote>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                About Me
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            <p className="flex items-center gap-1">
              © {currentYear} Mohd Juned. Made with <Heart className="h-3 w-3 text-red-500" /> in Mumbai
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Deadshot690"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/juned-bhojani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:junedbhojani61@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;