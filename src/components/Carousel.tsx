import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: string[];
  alt?: string;
}

const Carousel = ({ images, alt = "Imagen de carrusel" }: CarouselProps) => {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [errorMap, setErrorMap] = useState<Record<number, boolean>>({});

  const hasImages = validImages.length > 0;
  const current = index % (hasImages ? validImages.length : 1);

  const next = () => {
    if (!hasImages) return;
    setIndex((i) => (i + 1) % validImages.length);
  };

  const prev = () => {
    if (!hasImages) return;
    setIndex((i) => (i - 1 + validImages.length) % validImages.length);
  };

  return (
    <div className="relative w-full">
      <div className="aspect-[16/10] bg-clinical-gray rounded-lg overflow-hidden">
        {!hasImages || errorMap[current] ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-clinical-gray">
            <div className="text-center space-y-3">
              <Image className="w-12 h-12 md:w-16 md:h-16 text-gold/40 mx-auto" />
              <p className="text-sm md:text-base font-medium text-muted-foreground px-4">
                Carrusel de Verdades y Mitos
              </p>
            </div>
          </div>
        ) : (
          <img
            src={validImages[current]}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setErrorMap((m) => ({ ...m, [current]: true }))}
          />
        )}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gold text-gold hover:bg-gold hover:text-primary-foreground shadow-clinical"
          onClick={prev}
          disabled={!hasImages}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {(hasImages ? validImages : [0]).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-8" : "bg-border"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gold text-gold hover:bg-gold hover:text-primary-foreground shadow-clinical"
          onClick={next}
          disabled={!hasImages}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;


