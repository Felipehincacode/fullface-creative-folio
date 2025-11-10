import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import VideoBlock from "@/components/VideoBlock";
import Carousel from "@/components/Carousel";
import InfoModal from "@/components/InfoModal";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background dark">
      <BackgroundVideo />
      <Header onInfoClick={() => setIsModalOpen(true)} />
      
      <main>
        <Hero />
        
        <ContentSection
          id="razones"
          title="Reel: Academia 30s"
          description="Un reel dinámico que presenta las razones principales por las que elegir procedimientos no invasivos. Diseñado para inspirar confianza y conectar emocionalmente con la audiencia."
        >
          <VideoBlock
            title="Reel 'Academia 30s'"
            src="/media/reel_academia/reel_academia.mp4"
            poster="/media/reel_academia/ree_academia_cover.jpg"
          />
        </ContentSection>

        <ContentSection
          id="poder-sonrisa"
          title="El Poder de la Sonrisa"
          description="Video emotivo y empático que explora el impacto transformador de una sonrisa. Combina storytelling visual con mensajes positivos sobre el autocuidado y la confianza personal."
        >
          <VideoBlock
            title="Video 'El Poder de la Sonrisa'"
            src="/media/Reel%20FULLFACE/el_poder_de_la_sonrisa.mp4"
            poster="/media/Reel%20FULLFACE/El%20poder%20de%20la%20sonrisa.jpg"
          />
        </ContentSection>

        <ContentSection
          id="verdades-mitos"
          title="Verdades y Mitos"
          description="Carrusel informativo que desmitifica conceptos erróneos sobre los procedimientos estéticos no invasivos. Contenido educativo presentado de forma clara y accesible."
        >
          <Carousel
            images={[
              "/media/Carrusel%20-%20%20mitos%20y%20verdades/1.png",
              "/media/Carrusel%20-%20%20mitos%20y%20verdades/2.png",
              "/media/Carrusel%20-%20%20mitos%20y%20verdades/3.png",
              "/media/Carrusel%20-%20%20mitos%20y%20verdades/4.png",
              "/media/Carrusel%20-%20%20mitos%20y%20verdades/5.png",
              "/media/Carrusel%20-%20%20mitos%20y%20verdades/6.png",
            ]}
            alt="Verdades y Mitos"
          />
        </ContentSection>

        <ContentSection
          id="pauta"
          title="Pauta"
          description="Video publicitario estratégico diseñado para maximizar el alcance y engagement en plataformas digitales. Contenido optimizado para campañas de marketing."
        >
          <VideoBlock
            title="Video Pauta"
            src="media\Pauta\Movimiento\video_pauta.mp4"
            poster="media\Pauta\Movimiento\Frame.png"
          />
          <Carousel
            images={[
              "/media/Pauta/Estático/1.png",
              "/media/Pauta/Estático/2.png",
            ]}
            alt="Pauta - Fotos"
          />
        </ContentSection>

        <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="glass-dark border-border/20 rounded-lg p-8 shadow-glow-purple">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                Descargar Proyecto Completo
              </h3>
              <p className="text-muted-foreground mb-6">
                Accede a todos los archivos, videos originales y documentación del proyecto
              </p>
              <a
                href="https://we.tl/t-4VBZEKAzTP"
                className="inline-flex items-center px-6 py-3 bg-purple hover:bg-purple-dark text-primary-foreground rounded-lg transition-all duration-300 shadow-glow-purple font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Descargar Proyecto
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <InfoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;
