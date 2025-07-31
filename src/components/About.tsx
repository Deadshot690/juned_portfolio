import { Card } from "@/components/ui/card";
import avatarImage from "@/assets/avatar_j.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - AI Avatar */}
            <div className="animate-slide-in-right">
              <Card className="p-8 card-hover">
                <div className="aspect-square bg-gradient-secondary rounded-lg overflow-hidden">
                  <img 
                    src={avatarImage} 
                    alt="Mohd Juned Md Taufik Bhojani - AI-Integrated Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
            
            {/* Right Column - About Text */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Final Year B.Sc Computer Science Student
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based in Mumbai, I'm passionate about merging software engineering with artificial intelligence 
                  to create solutions that automate, simplify, and elevate user experiences.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  What Drives Me
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building intelligent applications that solve real-world problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Exploring the intersection of AI/ML with modern web technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contributing to open-source projects and continuous learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Creating scalable, maintainable, and user-centric solutions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  My Philosophy
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of technology to transform ideas into reality. As a strong advocate 
                  for lifelong learning, I constantly explore emerging technologies and best practices to 
                  deliver innovative solutions that make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="mt-16 text-center animate-scale-in">
            <Card className="p-8 bg-gradient-card border-primary/20 card-hover">
              <blockquote className="text-xl md:text-2xl font-semibold text-center leading-relaxed">
                <span className="text-primary">"</span>
                <span className="gradient-text">
                  I blend logic with creativity to engineer smart systems that solve real-world problems using the power of AI.
                </span>
                <span className="text-primary">"</span>
              </blockquote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;