import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Lightbulb, Users, Cog } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      color: 'from-vibrant-coral to-vibrant-amber',
      skills: ['Python', 'Java', 'JavaScript', 'C']
    },
    {
      title: 'Web & App Development',
      icon: Globe,
      color: 'from-vibrant-teal to-vibrant-emerald',
      skills: ['MERN Stack', 'HTML/CSS', 'React', 'Node.js', 'PHP Laravel']
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'from-vibrant-purple to-vibrant-coral',
      skills: ['SQL', 'Power BI', 'Machine Learning', 'Data Visualization', 'Python Analytics']
    },
    {
      title: 'Tools & Technologies',
      icon: Cog,
      color: 'from-vibrant-amber to-vibrant-teal',
      skills: ['Git', 'Linux/Unix', 'VS Code', 'TensorFlow', 'Raspberry Pi']
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      color: 'from-vibrant-emerald to-vibrant-purple',
      skills: ['Algorithm Design', 'System Design', 'Debugging', 'Optimization']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-vibrant-coral to-vibrant-teal',
      skills: ['Communication', 'Teamwork', 'Adaptability', 'Leadership']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-vibrant-teal/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-vibrant-coral to-vibrant-purple mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in <span className="text-vibrant-coral font-semibold">Data Analytics</span> and <span className="text-vibrant-teal font-semibold">Web Development</span>
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-to-br from-background to-vibrant-emerald/5 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;