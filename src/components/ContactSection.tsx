import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390417572',
      href: 'tel:+919390417572',
      color: 'from-vibrant-coral to-vibrant-amber'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rayachurividhahri@gmail.com',
      href: 'mailto:rayachurividhahri@gmail.com',
      color: 'from-vibrant-teal to-vibrant-emerald'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'vidhathri-rayachuri',
      href: 'https://www.linkedin.com/in/vidhathri-rayachuri-a1371a295',
      color: 'from-vibrant-purple to-vibrant-coral'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'RVidhathri',
      href: 'https://github.com/RVidhathri',
      color: 'from-vibrant-amber to-vibrant-teal'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_8exw0ui',
        'template_1etoztx',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '5jcDtj5Ljrh2h9xv3'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-vibrant-coral/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-vibrant-coral to-vibrant-purple mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate? I'd love to hear about your project and discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and innovation. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={index}
                      className="shadow-card hover:shadow-glow transition-all duration-300 border-0 bg-gradient-to-br from-background to-vibrant-emerald/5 group cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start space-x-4"
                        >
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-1">
                              {info.label}
                            </h4>
                            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Location */}
              <Card className="shadow-card border-0 bg-gradient-to-br from-background to-vibrant-purple/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-vibrant-coral to-vibrant-emerald flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground">Hyderabad, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card border-0 bg-gradient-to-br from-background to-vibrant-teal/5 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-vibrant-teal/30 focus:border-vibrant-teal"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-vibrant-teal/30 focus:border-vibrant-teal"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-vibrant-teal/30 focus:border-vibrant-teal resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-vibrant-coral to-vibrant-purple text-primary-foreground hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;