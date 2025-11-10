import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-clinical-gray">
      <div className="container mx-auto max-w-4xl">
        <Separator className="mb-6 bg-border" />
        
        <div className="text-center space-y-3">
          <p className="text-base md:text-lg font-semibold text-foreground">
            Felipe Hincapié Murillo
          </p>
          
          <a
            href="mailto:fotopipets@gmail.com"
            className="inline-flex items-center gap-2 text-sm md:text-base text-gold hover:text-gold/80 transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            fotopipets@gmail.com
          </a>
          
          <p className="text-xs md:text-sm text-muted-foreground pt-4">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
