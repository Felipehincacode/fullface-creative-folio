import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface HeaderProps {
  onInfoClick: () => void;
}

const Header = ({ onInfoClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg md:text-xl font-semibold text-foreground">
              Entrega <span className="text-gold">Full Face</span>
            </h1>
          </div>
          
          <Button
            onClick={onInfoClick}
            variant="outline"
            size="sm"
            className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 shadow-clinical"
          >
            <Info className="w-4 h-4 mr-2" />
            Obtener información
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
