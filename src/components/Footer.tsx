import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative py-8 border-t border-border/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Ashutosh Mohapatra. All rights reserved.
      </p>
      <div className="flex gap-4 mr-12">
        <a href="https://www.linkedin.com/in/mohapatra-ashutosh/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="https://github.com/ashutosh-mohapatra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={16} />
        </a>
        <a href="mailto:ashutoshmohapatra215@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
