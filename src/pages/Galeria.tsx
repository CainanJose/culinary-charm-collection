import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import pastaImg from "@/assets/pasta-italiana.jpg";
import feijoadaImg from "@/assets/feijoada-brasileira.jpg";
import saladaImg from "@/assets/salada-fresca.jpg";
import boloImg from "@/assets/bolo-chocolate.jpg";
import frangoImg from "@/assets/frango-grelhado.jpg";
import heroImg from "@/assets/hero-cooking.jpg";

const images = [
  { src: heroImg, alt: "Mesa de ingredientes frescos" },
  { src: pastaImg, alt: "Pasta Italiana" },
  { src: feijoadaImg, alt: "Feijoada Brasileira" },
  { src: saladaImg, alt: "Salada Fresca" },
  { src: boloImg, alt: "Bolo de Chocolate" },
  { src: frangoImg, alt: "Frango Grelhado" },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h1>
            <p className="text-xl text-muted-foreground">
              Uma coleção visual de nossos pratos deliciosos
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Fotos das Receitas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="recipe-card cursor-pointer overflow-hidden h-64 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Vídeos de Receitas</h2>
            <div className="space-y-8">
              <div className="recipe-card overflow-hidden">
                <video
                  controls
                  className="w-full"
                  poster={pastaImg}
                >
                  <source src="/videos/receita-1.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Como fazer Pasta Italiana</h3>
                </div>
              </div>

              <div className="recipe-card overflow-hidden">
                <video
                  controls
                  className="w-full"
                  poster={boloImg}
                >
                  <source src="/videos/receita-2.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Receita de Bolo de Chocolate</h3>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Mensagem Motivacional</h2>
            <div className="recipe-card p-8">
              <audio
                controls
                className="w-full"
              >
                <source src="/audio/motivacao.mp3" type="audio/mpeg" />
                Seu navegador não suporta áudio HTML5.
              </audio>
              <p className="text-center mt-4 text-muted-foreground">
                Ouça uma mensagem especial para inspirar sua jornada culinária
              </p>
            </div>
          </section>
        </div>
      </main>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <img
            src={selectedImage || ""}
            alt="Imagem ampliada"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      <Footer />
      <BackToTop />
    </>
  );
}
