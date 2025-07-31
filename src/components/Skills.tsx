import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Paintbrush, 
  Settings,
  Monitor,
  Server
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Monitor className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "PWA"],
    color: "primary"
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "Supabase", "REST APIs", "Python", "Java"],
    color: "accent"
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "Prisma ORM"],
    color: "primary"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Flutter", "Mobile UI/UX", "Progressive Web Apps"],
    color: "accent"
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Natural Language Processing", "Deep Learning", "Prompt Engineering", "Model Integration", "Computer Vision", "NumPy", "Pandas", "PyTorch", "TensorFlow"],
    color: "primary"
  },
  {
    title: "Frameworks & Tools",
    icon: <Code className="h-6 w-6" />,
    skills: ["Django", "Angular", "Flutter"],
    color: "accent"
  },
  {
    title: "Design & Prototyping",
    icon: <Paintbrush className="h-6 w-6" />,
    skills: ["Figma", "Adobe XD", "Canva", "UI/UX Design", "Wireframing", "Responsive Design"],
    color: "primary"
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "VS Code", "Postman", "Terminal CLI"],
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in modern technologies that power intelligent web applications
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-xs hover:bg-primary/20 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Tech Stack Highlight */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-card border-primary/20">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Specialized In
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">AI Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Implementing AI models and APIs into web applications
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Full-Stack Development</h4>
                <p className="text-muted-foreground text-sm">
                  End-to-end web application development with modern frameworks
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Cross-Platform</h4>
                <p className="text-muted-foreground text-sm">
                  Building responsive web and mobile applications
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;