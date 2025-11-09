import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { toast } from "sonner";
import { Lightbulb, Sparkles } from "lucide-react";

const tips = [
  "Sempre preaqueça o forno antes de assar",
  "Sal a gosto não significa sal demais - vá adicionando aos poucos",
  "Deixe a carne descansar após o cozimento para manter os sucos",
  "Use ingredientes frescos sempre que possível",
  "Leia a receita completamente antes de começar",
  "Organize todos os ingredientes antes (mise en place)",
  "Não tenha medo de experimentar e adaptar receitas",
  "Invista em boas facas e mantenha-as afiadas",
  "Prove durante o preparo para ajustar temperos",
  "Aprenda as técnicas básicas antes de receitas complexas"
];

const curiosities = [
  "O tomate é na verdade uma fruta, não um vegetal!",
  "O mel é o único alimento que nunca estraga",
  "Os pistaches são tecnicamente frutas",
  "O chocolate era usado como moeda pelos astecas",
  "A baunilha vem de uma orquídea",
  "O açafrão é o tempero mais caro do mundo",
  "As maçãs flutuam porque são 25% ar",
  "O abacate é uma baga, botanicamente falando"
];

export default function Dicas() {
  const showTip = (tip: string) => {
    toast(tip, {
      icon: <Lightbulb className="h-5 w-5 text-accent" />,
      duration: 4000,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dicas Culinárias</h1>
            <p className="text-xl text-muted-foreground">
              Segredos e truques para você cozinhar como um chef
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Lightbulb className="h-8 w-8 text-primary" />
              10 Dicas Essenciais
            </h2>
            <div className="grid gap-4">
              {tips.map((tip, index) => (
                <button
                  key={index}
                  onClick={() => showTip(tip)}
                  className="glass-card p-6 text-left hover:scale-[1.02] transition-all cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-lg flex-1">{tip}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-secondary" />
              Curiosidades Culinárias
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {curiosities.map((curiosity, index) => (
                <div
                  key={index}
                  className="recipe-card p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-lg">{curiosity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
