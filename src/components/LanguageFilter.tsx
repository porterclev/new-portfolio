
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string | null;
  onSelectLanguage: (language: string | null) => void;
  className?: string;
}

const LanguageFilter = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
  className,
}: LanguageFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelectLanguage = (language: string | null) => {
    onSelectLanguage(language);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-48 px-4 py-2 rounded-lg border bg-white/70 backdrop-blur-sm text-sm font-medium transition-all duration-200 hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedLanguage || "Filter by Language"}</span>
        <ChevronDown className={cn("h-4 w-4 ml-2 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white/90 backdrop-blur-md shadow-soft rounded-lg border animate-fade-in origin-top transition-all duration-200 ease-apple">
          <ul className="py-1 max-h-60 overflow-auto" role="listbox">
            <li className="px-3 py-2 hover:bg-secondary/50 cursor-pointer transition-colors duration-150 text-sm">
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => handleSelectLanguage(null)}
              >
                <span className={cn(!selectedLanguage && "font-semibold")}>All Languages</span>
                {!selectedLanguage && <span className="w-2 h-2 bg-primary rounded-full"></span>}
              </button>
            </li>
            
            {languages.map((language) => (
              <li 
                key={language}
                className="px-3 py-2 hover:bg-secondary/50 cursor-pointer transition-colors duration-150 text-sm"
              >
                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => handleSelectLanguage(language)}
                >
                  <span className={cn(selectedLanguage === language && "font-semibold")}>{language}</span>
                  {selectedLanguage === language && <span className="w-2 h-2 bg-primary rounded-full"></span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {selectedLanguage && (
        <button
          onClick={() => handleSelectLanguage(null)}
          className="absolute right-12 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150"
          aria-label="Clear filter"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default LanguageFilter;
