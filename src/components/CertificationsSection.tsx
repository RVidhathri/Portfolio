import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Heart, Globe } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Power BI for Beginners',
      provider: 'Coursera',
      icon: Award,
      color: 'from-vibrant-coral to-vibrant-amber'
    },
    {
      title: 'Cricket Analytics Workshop',
      provider: 'MAD about Sports',
      icon: Trophy,
      color: 'from-vibrant-teal to-vibrant-emerald'
    },
    {
      title: 'Data Analytics Training Certificate',
      provider: 'Trainity Exploratory',
      icon: Award,
      color: 'from-vibrant-purple to-vibrant-coral'
    },
    {
      title: 'Exploratory Data Analysis',
      provider: 'Future Skills Prime',
      icon: Award,
      color: 'from-vibrant-amber to-vibrant-teal'
    },
    {
      title: 'Data Processing & Visualization',
      provider: 'Future Skills Prime',
      icon: Award,
      color: 'from-vibrant-emerald to-vibrant-purple'
    },
    {
      title: 'Azure AI Fundamentals',
      provider: 'Microsoft',
      icon: Award,
      color: 'from-vibrant-coral to-vibrant-teal'
    },
    {
      title: 'Build a Free Website with WordPress',
      provider: 'Coursera Project Network',
      icon: Globe,
      color: 'from-vibrant-purple to-vibrant-amber'
    },
    {
      title: 'Acquiring Data',
      provider: 'FutureSkills Prime',
      icon: Award,
      color: 'from-vibrant-teal to-vibrant-coral'
    }
  ];

  const achievements = [
    {
      title: 'AI Fundamentals Badge',
      provider: 'IBM Skill Build',
      description: 'Demonstrated foundational knowledge in AI concepts and applications'
    },
    {
      title: 'GDG Solution Challenge Participant',
      provider: 'Google Developer Groups',
      description: 'Participated in GDG on Campus Solution Challenge powered by Hack2skill'
    }
  ];

  const interests = [
    { name: 'Electronic Keyboard Player', icon: '🎹' },
    { name: 'Volunteering', icon: '🤝' },
    { name: 'Reading Indian Mythology & Epics', icon: '📚' },
    { name: 'Online Courses & Certifications', icon: '🎓' }
  ];

  const languages = [
    { name: 'Telugu', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Kannada', level: 'Fluent' },
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Conversational' }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-vibrant-teal/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Certifications & More
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-vibrant-coral to-vibrant-purple mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through certifications, achievements, and personal interests
            </p>
          </div>

          <div className="space-y-16">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <Card 
                      key={index}
                      className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-to-br from-background to-vibrant-teal/5 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="pb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {cert.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground font-medium">
                          {cert.provider}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-to-br from-background to-vibrant-amber/5"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-vibrant-amber to-vibrant-coral flex items-center justify-center flex-shrink-0">
                          <Trophy className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2 font-medium">
                            {achievement.provider}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Interests & Languages */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Interests */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                  Interests & Hobbies
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <Card 
                      key={index}
                      className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-to-br from-background to-vibrant-emerald/5"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl">{interest.icon}</span>
                          <span className="font-medium text-primary">
                            {interest.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                  Languages
                </h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <Card 
                      key={index}
                      className="shadow-card border-0 bg-gradient-to-r from-background to-vibrant-purple/5"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-primary">
                            {language.name}
                          </span>
                          <span className="text-sm bg-gradient-to-r from-vibrant-purple to-vibrant-coral bg-clip-text text-transparent font-semibold">
                            {language.level}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;