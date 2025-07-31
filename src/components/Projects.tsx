import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Clock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "in-progress" | "coming-soon" | "completed";
  category: "major" | "mini";
}

const projects: Project[] = [
  {
    title: "Oblivion AI",
    description: "An intelligent AI assistant that automates tasks via voice commands using system integration and advanced NLP modules. Features real-time voice processing, smart task recognition, and seamless system interaction.",
    techStack: ["Node.js", "Python", "AI/ML", "NLP", "Voice Recognition"],
    status: "in-progress",
    category: "major"
  },
  {
    title: "CodeCraft",
    description: "A gamified task-generator platform for developers with coding challenges across AI, DSA, Web Development, and Cybersecurity. Features live code editor, progress tracking, and hacker-themed UI.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    status: "in-progress",
    category: "major"
  },
  {
    title: "Smart Notes App",
    description: "An intelligent note-taking application with Firebase authentication and real-time sync. Features voice-to-text input, smart categorization, and cloud storage integration.",
    techStack: ["React.js", "Firebase", "Web Speech API", "Real-time Database"],
    status: "coming-soon",
    category: "mini"
  },
  {
    title: "AI Quote Generator",
    description: "A React application that leverages OpenAI's API to generate personalized motivational quotes based on user preferences, mood, and context.",
    techStack: ["React.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    status: "coming-soon",
    category: "mini"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "in-progress":
      return <Badge className="bg-warning/20 text-warning border-warning/50">In Progress</Badge>;
    case "coming-soon":
      return <Badge className="bg-primary/20 text-primary border-primary/50">Coming Soon</Badge>;
    case "completed":
      return <Badge className="bg-success/20 text-success border-success/50">Completed</Badge>;
    default:
      return null;
  }
};

const Projects = () => {
  const majorProjects = projects.filter(p => p.category === "major");
  const miniProjects = projects.filter(p => p.category === "mini");

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in AI-integrated web development and intelligent applications
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Major Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Major Projects</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="p-8 card-hover bg-gradient-card border-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-2xl font-bold text-foreground">{project.title}</h4>
                  {getStatusBadge(project.status)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {project.githubUrl ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      <Clock className="h-4 w-4 mr-2" />
                      GitHub Coming Soon
                    </Button>
                  )}
                  
                  {project.liveUrl ? (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" disabled>
                      <Clock className="h-4 w-4 mr-2" />
                      Demo Coming Soon
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Mini Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {miniProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="p-6 card-hover animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                  {getStatusBadge(project.status)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" disabled>
                    <Clock className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-secondary border-primary/20">
            <h3 className="text-xl font-bold mb-4">More Projects in Development</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring innovative ideas. 
              Follow my GitHub for the latest updates and contributions.
            </p>
            <Button 
              variant="outline" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/Deadshot690" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All Projects
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;