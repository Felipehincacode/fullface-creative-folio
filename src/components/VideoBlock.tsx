import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoBlockProps {
  title: string;
  src?: string;
  poster?: string;
}

const VideoBlock = ({ title, src, poster }: VideoBlockProps) => {
  const [failed, setFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const shouldShowPlaceholder = !src || failed;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className="relative w-full aspect-[9/16] bg-clinical-gray rounded-lg overflow-hidden group p-2">
      {shouldShowPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-background/90 to-clinical-gray/90 group-hover:from-background/80 group-hover:to-clinical-gray/80 transition-all duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-gold fill-gold" />
          </div>
          <p className="text-sm md:text-base font-medium text-muted-foreground px-4 text-center">
            {title}
          </p>
        </div>
      ) : (
        <>
          {!isLoaded && poster && (
            <img
              src={poster}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
              loading="lazy"
            />
          )}
          {isInView && (
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster={poster}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={handleVideoLoad}
              onError={() => setFailed(true)}
            >
              <source src={src} type="video/mp4" />
            </video>
          )}
        </>
      )}
    </div>
  );
};

export default VideoBlock;


