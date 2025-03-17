
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-16 relative overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/2 right-1/4 h-40 w-40 rounded-full bg-secondary/10 blur-2xl -z-10" aria-hidden="true" />
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-display font-semibold tracking-tight text-foreground/90">
              Portfolio
            </Link>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Showcasing innovative software solutions across multiple languages and technologies. Building digital experiences that make a difference.
            </p>
            
            <div className="mt-6 flex space-x-5">
              <SocialLink href="#" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Mail className="h-5 w-5" />} label="Email" />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/#projects">Projects</FooterLink>
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 opacity-70" />
                contact@example.com
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 opacity-70">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
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
      className="p-2 rounded-full bg-secondary/50 transition-colors duration-200 hover:bg-secondary hover:text-foreground"
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
        className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
