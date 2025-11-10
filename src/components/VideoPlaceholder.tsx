import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
}

const VideoPlaceholder = ({ title }: VideoPlaceholderProps) => {
  return (
    <div className="relative w-full aspect-video bg-clinical-gray rounded-lg overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-background/90 to-clinical-gray/90 group-hover:from-background/80 group-hover:to-clinical-gray/80 transition-all duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-gold fill-gold" />
        </div>
        <p className="text-sm md:text-base font-medium text-muted-foreground px-4 text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
