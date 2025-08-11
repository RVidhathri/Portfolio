import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: 'B.Tech in Data Science and Artificial Intelligence',
      institution: 'ICFAI University',
      period: '2022 – 2026',
      grade: 'CGPA: 90.2',
      color: 'from-vibrant-coral to-vibrant-amber'
    },
    {
      degree: 'Intermediate',
      institution: 'Trividya Junior College',
      period: '2020 – 2022',
      grade: '96.1%',
      color: 'from-vibrant-teal to-vibrant-emerald'
    },
    {
      degree: 'Class X (ICSE)',
      institution: 'Sherwood Public School',
      period: '2020',
      grade: '89.6%',
      color: 'from-vibrant-purple to-vibrant-coral'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-vibrant-emerald/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-vibrant-coral to-vibrant-purple mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Passionate About Technology & Innovation
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am <span className="text-primary font-medium">Vidhathri Rayachuri</span>, 
                  a motivated and detail-oriented Computer Science undergraduate specializing in 
                  Data Science and Artificial Intelligence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I have strong foundations in programming, software development, and data analytics, 
                  with experience in both machine learning and full-stack web development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about solving real-world problems through innovative technology, 
                  I aim to contribute to impactful projects that enhance efficiency, intelligence, 
                  and user experience.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-to-r from-background to-vibrant-teal/5"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary text-lg mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                            <div className="flex items-center text-muted-foreground mb-2 sm:mb-0">
                              <Calendar className="mr-2 h-4 w-4" />
                              {edu.period}
                            </div>
                            <div className="bg-gradient-to-r from-vibrant-coral to-vibrant-purple bg-clip-text text-transparent font-semibold">
                              {edu.grade}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;