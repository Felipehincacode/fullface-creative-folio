import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Mail, Target, Sparkles } from "lucide-react";

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InfoModal = ({ open, onOpenChange }: InfoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-border shadow-gold">
        <DialogHeader className="space-y-4 pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-semibold text-foreground">
            Sobre el Proyecto
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Información general de la entrega creativa
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-gold/10">
              <Target className="w-5 h-5 text-gold" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-foreground">Objetivo Principal</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Demostrar versatilidad creativa en formatos audiovisuales y gráficos, 
                usando IA, ElevenLabs y edición ágil.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-gold/10">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-foreground">Propósito</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Generar contenido inspiracional y empático que transmita confianza en 
                procedimientos no invasivos. Cada carpeta incluye su propio README con 
                detalles del proceso.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 rounded-lg bg-gold/10">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-foreground">Contacto</h3>
              <div className="text-sm md:text-base text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">Felipe Hincapié Murillo</p>
                <a 
                  href="mailto:fotopipets@gmail.com" 
                  className="text-gold hover:underline inline-block transition-colors"
                >
                  fotopipets@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
