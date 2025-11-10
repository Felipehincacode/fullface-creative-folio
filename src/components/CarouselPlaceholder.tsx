import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarouselPlaceholder = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-[16/10] bg-clinical-gray rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-clinical-gray">
          <div className="text-center space-y-3">
            <Image className="w-12 h-12 md:w-16 md:h-16 text-gold/40 mx-auto" />
            <p className="text-sm md:text-base font-medium text-muted-foreground px-4">
              Carrusel de Verdades y Mitos
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gold text-gold hover:bg-gold hover:text-primary-foreground shadow-clinical"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === 0 ? "bg-gold w-8" : "bg-border"
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gold text-gold hover:bg-gold hover:text-primary-foreground shadow-clinical"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default CarouselPlaceholder;
