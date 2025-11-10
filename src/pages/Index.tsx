import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import CarouselPlaceholder from "@/components/CarouselPlaceholder";
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
          title="Reel: Razones"
          description="Un reel dinámico que presenta las razones principales por las que elegir procedimientos no invasivos. Diseñado para inspirar confianza y conectar emocionalmente con la audiencia."
        >
          <VideoPlaceholder title="Reel 'Razones' - Próximamente" />
        </ContentSection>

        <ContentSection
          id="poder-sonrisa"
          title="El Poder de la Sonrisa"
          description="Video emotivo y empático que explora el impacto transformador de una sonrisa. Combina storytelling visual con mensajes positivos sobre el autocuidado y la confianza personal."
        >
          <VideoPlaceholder title="Video 'El Poder de la Sonrisa' - Próximamente" />
        </ContentSection>

        <ContentSection
          id="verdades-mitos"
          title="Verdades y Mitos"
          description="Carrusel informativo que desmitifica conceptos erróneos sobre los procedimientos estéticos no invasivos. Contenido educativo presentado de forma clara y accesible."
        >
          <CarouselPlaceholder />
        </ContentSection>
      </main>

      <Footer />
      
      <InfoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;
