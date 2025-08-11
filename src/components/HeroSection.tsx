import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-vibrant-coral to-vibrant-purple bg-clip-text text-transparent">
              Vidhathri Rayachuri
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
              Computer Science Undergraduate
            </p>
            
            <p className="text-lg sm:text-xl text-primary mb-6">
              Data Science & Artificial Intelligence
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Turning data into intelligent solutions through innovative technology and passionate problem-solving
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-vibrant-coral to-vibrant-purple text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-vibrant-teal text-primary hover:bg-vibrant-teal/10 px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/RVidhathri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-vibrant-emerald/20 hover:bg-vibrant-emerald/40 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/vidhathri-rayachuri-a1371a295"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-vibrant-teal/20 hover:bg-vibrant-teal/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href="mailto:rayachurividhahri@gmail.com"
                className="p-3 rounded-full bg-vibrant-coral/20 hover:bg-vibrant-coral/40 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-primary" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <button
                onClick={() => scrollToSection('about')}
                className="p-2 rounded-full hover:bg-accent/50 transition-colors"
              >
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;