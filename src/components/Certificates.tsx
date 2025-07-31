import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  verificationUrl?: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    title: "Prompt Engineering",
    issuer: "IBM",
    year: "2025",
    description: "Comprehensive course covering advanced prompt engineering techniques, AI model optimization, and practical applications in real-world scenarios.",
    skills: ["Prompt Engineering", "AI Optimization", "Model Fine-tuning", "AI Ethics"]
  },
  {
    title: "AI/ML Fundamental",
    issuer: "IBM",
    year: "2025", 
    description: "Foundation course in artificial intelligence and machine learning covering core concepts, algorithms, and practical implementation strategies.",
    skills: ["Machine Learning", "AI Fundamentals", "Data Science", "Algorithm Design"]
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            <span className="gradient-text">Certificates</span> & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in cutting-edge technologies
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title}
              className="p-8 card-hover bg-gradient-card border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span className="font-semibold text-primary">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {cert.description}
              </p>

              {/* Skills Learned */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3">
                {cert.verificationUrl ? (
                  <Button size="sm" variant="outline" asChild>
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                ) : (
                  <Badge className="bg-success/20 text-success border-success/50">
                    ✓ Completed
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Journey Section */}
        <div className="text-center animate-fade-in">
          <Card className="p-8 bg-gradient-secondary border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These certifications represent my commitment to staying current with emerging technologies 
                and best practices in AI and software development. I believe in continuous learning and 
                regularly pursue new courses and certifications to enhance my expertise.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-primary">2+</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Certificates</h4>
                  <p className="text-muted-foreground text-sm">Professional certifications completed</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-accent">IBM</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Trusted Source</h4>
                  <p className="text-muted-foreground text-sm">Industry-recognized programs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-primary">2025</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Recent</h4>
                  <p className="text-muted-foreground text-sm">Up-to-date knowledge</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;