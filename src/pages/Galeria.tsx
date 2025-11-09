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
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                    src="https://www.youtube.com/embed/UM9EHqljHp4"
                    title="Como fazer Pasta Italiana"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Como fazer Pasta ao Molho de Tomate</h3>
                  <p className="text-sm text-muted-foreground mt-2">Aprenda a fazer uma deliciosa pasta italiana caseira</p>
                </div>
              </div>

              <div className="recipe-card overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                    src="https://www.youtube.com/embed/tspdJ6hxqnc"
                    title="Receita de Bolo de Chocolate"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Bolo de Chocolate Fofinho</h3>
                  <p className="text-sm text-muted-foreground mt-2">O melhor bolo de chocolate que você já experimentou</p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Podcast Culinário</h2>
            <div className="recipe-card p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">O Prazer de Cozinhar</h3>
                <p className="text-muted-foreground">Ouça dicas e histórias inspiradoras sobre culinária</p>
              </div>
              <iframe
                className="w-full rounded-lg"
                height="180"
                src="https://www.youtube.com/embed/Unau2Efldqk"
                title="Podcast sobre culinária"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Uma mensagem especial para inspirar sua jornada culinária
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
