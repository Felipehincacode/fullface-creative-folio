import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useMemo, useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: string[];
  alt?: string;
}

const Carousel = ({ images, alt = "Imagen de carrusel" }: CarouselProps) => {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [errorMap, setErrorMap] = useState<Record<number, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasImages = validImages.length > 0;
  const current = index % (hasImages ? validImages.length : 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const next = () => {
    if (!hasImages) return;
    setIndex((i) => (i + 1) % validImages.length);
  };

  const prev = () => {
    if (!hasImages) return;
    setIndex((i) => (i - 1 + validImages.length) % validImages.length);
  };

  const handleImageLoad = (imgIndex: number) => {
    setLoadedImages((prev) => ({ ...prev, [imgIndex]: true }));
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="aspect-[4/5] bg-clinical-gray rounded-lg overflow-hidden p-2">
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
          <>
            {!loadedImages[current] && (
              <div className="absolute inset-0 bg-gradient-to-br from-background to-clinical-gray animate-pulse" />
            )}
            {isInView && (
              <img
                src={validImages[current]}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  loadedImages[current] ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(current)}
                onError={() => setErrorMap((m) => ({ ...m, [current]: true }))}
              />
            )}
          </>
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


