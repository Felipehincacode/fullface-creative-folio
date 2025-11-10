import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import logo from "@/assets/logo-fullface.png";

interface HeaderProps {
  onInfoClick: () => void;
}

const Header = ({ onInfoClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Full Face Logo" className="h-10 md:h-12 w-auto" />
          </div>
          
          <Button
            onClick={onInfoClick}
            variant="outline"
            size="sm"
            className="glass border-purple/50 text-purple-light hover:bg-purple hover:text-primary-foreground transition-all duration-300 shadow-glow-purple"
          >
            <Info className="w-4 h-4 mr-2" />
            Información
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
