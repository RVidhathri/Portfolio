import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Globe, Database, Smartphone, Activity, PieChart } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Spam Email Classifier',
      description: 'Advanced machine learning model for email spam detection using NLP techniques and feature engineering.',
      technologies: ['Python', 'Scikit-learn', 'NLP', 'Flask'],
      category: 'Machine Learning',
      icon: Brain,
      color: 'from-vibrant-coral to-vibrant-amber',
      bgColor: 'from-vibrant-coral/10 to-vibrant-amber/5'
    },
    {
      title: 'MediLink - Smart Healthcare System',
      description: 'Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web Development',
      icon: Activity,
      color: 'from-vibrant-teal to-vibrant-emerald',
      bgColor: 'from-vibrant-teal/10 to-vibrant-emerald/5'
    },
    {
      title: 'Handwritten Digit Classifier',
      description: 'Deep learning CNN model for recognizing handwritten digits using TensorFlow and MNIST dataset.',
      technologies: ['TensorFlow', 'Keras', 'Python', 'CNN'],
      category: 'Deep Learning',
      icon: Brain,
      color: 'from-vibrant-purple to-vibrant-coral',
      bgColor: 'from-vibrant-purple/10 to-vibrant-coral/5'
    },
    {
      title: 'Document Management System',
      description: 'Enterprise-level document management solution with version control, access permissions, and search functionality.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      category: 'Web Development',
      icon: Database,
      color: 'from-vibrant-amber to-vibrant-teal',
      bgColor: 'from-vibrant-amber/10 to-vibrant-teal/5'
    },
    {
      title: 'Covid-19 Data Analysis',
      description: 'Comprehensive analysis of COVID-19 data trends with interactive visualizations and predictive insights.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      category: 'Data Analysis',
      icon: PieChart,
      color: 'from-vibrant-emerald to-vibrant-purple',
      bgColor: 'from-vibrant-emerald/10 to-vibrant-purple/5'
    },
    {
      title: 'Cricket Shots Classifier',
      description: 'Computer vision model to classify different cricket shots using CNN with 95%+ accuracy.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
      category: 'Computer Vision',
      icon: Brain,
      color: 'from-vibrant-coral to-vibrant-teal',
      bgColor: 'from-vibrant-coral/10 to-vibrant-teal/5'
    },
    {
      title: 'Home Automation System',
      description: 'IoT-based smart home automation using Raspberry Pi with Node-RED for device control and monitoring.',
      technologies: ['Raspberry Pi', 'Node-RED', 'IoT', 'Python'],
      category: 'IoT',
      icon: Smartphone,
      color: 'from-vibrant-teal to-vibrant-coral',
      bgColor: 'from-vibrant-teal/10 to-vibrant-coral/5'
    },
    {
      title: 'College Website',
      description: 'Modern, responsive college website with dynamic content management and interactive features.',
      technologies: ['React', 'JavaScript', 'CSS', 'Node.js'],
      category: 'Web Development',
      icon: Globe,
      color: 'from-vibrant-emerald to-vibrant-purple',
      bgColor: 'from-vibrant-emerald/10 to-vibrant-purple/5'
    },
    {
      title: 'Pedestrian Gesture Recognition',
      description: 'Real-time gesture recognition system for pedestrian safety with 99% accuracy using advanced CNN architecture.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
      category: 'Computer Vision',
      icon: Brain,
      color: 'from-vibrant-purple to-vibrant-emerald',
      bgColor: 'from-vibrant-purple/10 to-vibrant-emerald/5'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Web Development', 'Data Analysis', 'Computer Vision', 'IoT', 'Deep Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-vibrant-coral/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Portfolio & Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-vibrant-coral to-vibrant-purple mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work spanning machine learning, web development, and data science projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-vibrant-coral to-vibrant-purple text-primary-foreground shadow-glow' 
                    : 'hover:bg-vibrant-teal/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index}
                  className={`shadow-card hover:shadow-glow transition-all duration-500 border-0 bg-gradient-to-br ${project.bgColor} group cursor-pointer animate-scale-in overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-vibrant-teal/30 text-primary hover:bg-vibrant-teal/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href="https://github.com/RVidhathri" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className={`flex-1 bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Portfolio Info */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-vibrant-emerald/20 to-vibrant-purple/20 rounded-2xl p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                More Projects Coming Soon!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and exploring cutting-edge technologies. 
                Follow my GitHub for the latest updates and contributions.
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-vibrant-teal text-primary hover:bg-vibrant-teal/10 px-8"
              >
                <a 
                  href="https://github.com/RVidhathri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;