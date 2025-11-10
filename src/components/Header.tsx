import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import logo from "@/assets/logo-fullface.png";

interface HeaderProps {
  onInfoClick: () => void;
}

const Header = ({ onInfoClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Full Face Logo" className="h-10 md:h-12 w-auto" />
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <h1 className="text-sm lg:text-base font-medium text-gray-800">
              Prueba técnica de Felipe Hincapié Murillo
            </h1>
          </div>
          
          <Button
            onClick={onInfoClick}
            variant="outline"
            size="sm"
            className="border-purple text-purple hover:bg-purple hover:text-white transition-all duration-300"
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
