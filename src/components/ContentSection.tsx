import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
  id?: string;
}

const ContentSection = ({ title, description, children, id }: ContentSectionProps) => {
  return (
    <section id={id} className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <Card className="glass-dark border-border/20 hover:shadow-glow-purple transition-all duration-500">
          <CardHeader className="space-y-3 pb-6">
            <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>
          
          {children && (
            <CardContent className="pt-0">
              {children}
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  );
};

export default ContentSection;
