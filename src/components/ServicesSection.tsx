import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Code, BarChart3, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Model Development',
      description: 'Building advanced classification, prediction, and analytics models using cutting-edge ML algorithms and frameworks like TensorFlow and Keras.',
      features: [
        'Custom ML model development',
        'Data preprocessing & feature engineering',
        'Model optimization & validation',
        'Deployment & monitoring solutions'
      ],
      color: 'from-vibrant-coral to-vibrant-amber',
      bgColor: 'from-vibrant-coral/10 to-vibrant-amber/5'
    },
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'Creating responsive, scalable, and modern web applications using MERN stack, PHP Laravel, and other cutting-edge technologies.',
      features: [
        'React & Node.js applications',
        'Database design & optimization',
        'RESTful API development',
        'Responsive UI/UX implementation'
      ],
      color: 'from-vibrant-teal to-vibrant-emerald',
      bgColor: 'from-vibrant-teal/10 to-vibrant-emerald/5'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description: 'Transforming raw data into actionable insights through comprehensive analysis and compelling visualizations using Power BI, SQL, and Python.',
      features: [
        'Interactive dashboard creation',
        'Statistical analysis & reporting',
        'Data mining & pattern recognition',
        'Business intelligence solutions'
      ],
      color: 'from-vibrant-purple to-vibrant-coral',
      bgColor: 'from-vibrant-purple/10 to-vibrant-coral/5'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-vibrant-purple/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Services & Solutions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-vibrant-coral to-vibrant-purple mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to transform your ideas into reality
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className={`shadow-card hover:shadow-glow transition-all duration-500 border-0 bg-gradient-to-br ${service.bgColor} group cursor-pointer animate-scale-in overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        onClick={() => scrollToSection('contact')}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-vibrant-coral/20 to-vibrant-teal/20 rounded-2xl p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with innovative technology solutions. 
                I'm here to help you achieve your goals.
              </p>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-vibrant-coral to-vibrant-purple text-primary-foreground hover:shadow-glow transition-all duration-300 px-8"
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;