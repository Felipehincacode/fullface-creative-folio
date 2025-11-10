const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-4 py-2 glass rounded-full">
            <span className="text-sm font-medium text-purple-light">Portafolio Creativo Audiovisual</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Entrega <span className="text-purple-light">Full Face</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una experiencia visual que combina creatividad, tecnología y empatía. 
            Diseñado para transmitir confianza en procedimientos no invasivos a través 
            de contenido inspiracional de alta calidad.
          </p>
          
          <div className="pt-4">
            <p className="text-sm font-medium text-foreground">
              Felipe Hincapié Murillo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
