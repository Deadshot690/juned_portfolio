import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";

const Resume = () => {
  const downloadResume = () => {
    // In a real app, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/Juned_Bhojani.pdf';
    link.download = 'Juned_Bhojani.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            <span className="gradient-text">Resume</span> Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey and technical expertise
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Facts */}
          <div className="lg:col-span-1 animate-slide-in-right">
            <Card className="p-6 bg-gradient-card border-primary/20 sticky top-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">Education</h4>
                    <p className="text-muted-foreground text-sm">B.Sc Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-semibold text-sm">Specialization</h4>
                    <p className="text-muted-foreground text-sm">AI-Integrated Web Dev</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">Focus</h4>
                    <p className="text-muted-foreground text-sm">Full-Stack + AI/ML</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-semibold text-sm">Certifications</h4>
                    <p className="text-muted-foreground text-sm">IBM AI/ML & Prompt Eng.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={downloadResume}
                className="w-full mt-6 bg-gradient-primary hover:scale-105 transition-smooth glow-primary"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Full Resume
              </Button>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            {/* Key Highlights */}
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Key Highlights
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">AI + Web Development Expertise:</strong> Specialized in integrating AI/ML models with modern web applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">2 Major Projects in Development:</strong> Oblivion AI and CodeCraft demonstrating real-world application skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Full-Stack & Mobile Development:</strong> Proficient in React, Node.js, React Native, and Flutter
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Recent Certifications:</strong> IBM Prompt Engineering and AI/ML Fundamentals (2025)
                  </span>
                </li>
              </ul>
            </Card>

            {/* Technical Competencies */}
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Technical Competencies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Backend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">AI/ML Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">NLP</Badge>
                    <Badge variant="secondary">Prompt Engineering</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Mobile & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Current Projects */}
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-accent" />
                Current Focus
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Oblivion AI</h4>
                  <p className="text-muted-foreground text-sm">
                    AI assistant with voice command automation using Node.js, Python, and advanced NLP
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">CodeCraft</h4>
                  <p className="text-muted-foreground text-sm">
                    Gamified coding platform with challenges across AI, DSA, and Web Development
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Actively pursuing advanced AI/ML courses and contributing to open-source projects
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center animate-scale-in">
          <Card className="p-8 bg-gradient-secondary border-primary/20">
            <h3 className="text-xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download my complete resume for detailed information about my experience, 
              projects, and technical skills. Let's discuss how I can contribute to your team.
            </p>
            <Button 
              onClick={downloadResume}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-smooth glow-primary"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Complete Resume
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;