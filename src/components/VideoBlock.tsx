import { Play } from "lucide-react";
import { useState } from "react";

interface VideoBlockProps {
  title: string;
  src?: string;
  poster?: string;
}

const VideoBlock = ({ title, src, poster }: VideoBlockProps) => {
  const [failed, setFailed] = useState(false);
  const shouldShowPlaceholder = !src || failed;

  return (
    <div className="relative w-full aspect-video bg-clinical-gray rounded-lg overflow-hidden group">
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
        <video
          controls
          playsInline
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoBlock;


