import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the actual PDF file
    link.download = 'Mohd_Juned_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <div className="text-muted-foreground text-lg mb-4 font-mono">
            Hello, I'm
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
            <span className="gradient-text">Mohd Juned</span>
            <br />
            <span className="text-foreground">Md Taufik Bhojani</span>
          </h1>
          
          {/* Role */}
          <div className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            AI-Integrated Web Developer
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Building intelligent, scalable web and mobile experiences powered by modern AI
          </p>
          
          {/* Location & Status */}
          <div className="flex items-center justify-center gap-4 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-glow"></div>
              <span>Available for opportunities</span>
            </div>
            <span>•</span>
            <span>Mumbai, India</span>
            <span>•</span>
            <span>Final Year B.Sc CS</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-smooth glow-primary"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-smooth"
              onClick={downloadResume}
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/Deadshot690" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/juned-bhojani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:junedbhojani61@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;