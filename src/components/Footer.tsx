
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            {/* <Link to="/" className="text-xl font-display font-semibold tracking-tight">
              Portfolio
            </Link> */}
            {/* <p className="mt-2 text-muted-foreground">
              Showcasing innovative software solutions across multiple languages and technologies.
            </p> */}
            
            <div className="mt-4 flex space-x-4">
              <SocialLink href="https://github.com/porterclev" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/porterclev/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="mailto:porter.clevidence@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#about">About</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>porter.clevidence@gmail.com</li>
              <li>Fountain Valley, CA</li>
            </ul>
          </div>
        </div>
        
        {/* <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full transition-colors duration-200 hover:bg-secondary"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
