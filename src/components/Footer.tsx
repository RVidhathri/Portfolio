import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pastel-peach/10 to-pastel-blue/10 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">
                Vidhathri Rayachuri
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science undergraduate passionate about Data Science, AI, 
                and creating innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:rayachurividhahri@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  rayachurividhahri@gmail.com
                </a>
                <a
                  href="tel:+919390417572"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 9390417572
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border/50">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a
                href="https://github.com/RVidhathri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pastel-mint/20 hover:bg-pastel-mint/40 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/vidhathri-rayachuri-a1371a295"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pastel-blue/20 hover:bg-pastel-blue/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:rayachurividhahri@gmail.com"
                className="p-2 rounded-full bg-pastel-peach/20 hover:bg-pastel-peach/40 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} Vidhathri Rayachuri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;