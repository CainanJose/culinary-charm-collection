import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChefHat, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-cooking.jpg";

const tips = [
  "Sempre prove sua comida durante o preparo!",
  "Ingredientes frescos fazem toda a diferença!",
  "Organize tudo antes de começar a cozinhar!",
  "Não tenha medo de experimentar novos sabores!",
  "O amor é o ingrediente secreto de toda receita!",
];

export default function Index() {
  const [, setInactivityTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show welcome message based on time of day
    const hour = new Date().getHours();
    let greeting = "Olá!";
    
    if (hour < 12) {
      greeting = "Bom dia!";
    } else if (hour < 18) {
      greeting = "Boa tarde!";
    } else {
      greeting = "Boa noite!";
    }

    toast(greeting + " Bem-vindo ao Livro de Receitas! 👋", {
      icon: <ChefHat className="h-5 w-5 text-primary" />,
      duration: 4000,
    });

    // Show random tip
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTimeout(() => {
      toast(randomTip, {
        icon: <Sparkles className="h-5 w-5 text-accent" />,
        duration: 5000,
      });
    }, 3000);

    // Inactivity detection
    let timer: NodeJS.Timeout;
    
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        toast("Ainda está aí? Continue explorando nossas deliciosas receitas! 🍽️", {
          duration: 5000,
        });
      }, 60000); // 60 seconds
      setInactivityTimer(timer);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              filter: "brightness(0.4)",
            }}
          />
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Livro de Receitas
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Descubra o prazer de cozinhar com receitas deliciosas e fáceis de fazer
            </p>
            <Link to="/receitas">
              <Button className="hero-button text-lg px-8 py-6">
                Explorar Receitas 🍰
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-slide-up">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Heart className="h-8 w-8 text-destructive" />
                <h2 className="text-4xl font-bold">História do Livro de Receitas</h2>
              </div>
              <div className="glass-card p-8 space-y-4 text-lg leading-relaxed">
                <p>
                  Bem-vindo ao nosso Livro de Receitas digital, onde a paixão pela culinária encontra
                  a praticidade moderna. Nossa jornada começou com um simples desejo: compartilhar o
                  amor pela boa comida e tornar a cozinha acessível para todos.
                </p>
                <p>
                  Aqui você encontrará receitas tradicionais que atravessam gerações, além de criações
                  modernas que exploram novos sabores e técnicas. Cada receita é cuidadosamente testada
                  e apresentada com instruções claras para que você possa recriar momentos especiais na
                  sua cozinha.
                </p>
                <p>
                  Mais do que um simples repositório de receitas, somos uma comunidade de entusiastas
                  da culinária que acreditam que cozinhar é um ato de amor. Junte-se a nós nessa
                  deliciosa aventura!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Por que escolher nosso livro?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="recipe-card p-8 text-center">
                <div className="text-5xl mb-4">👨‍🍳</div>
                <h3 className="text-2xl font-bold mb-4">Receitas Testadas</h3>
                <p className="text-muted-foreground">
                  Todas as receitas são testadas e aprovadas para garantir resultados perfeitos
                </p>
              </div>

              <div className="recipe-card p-8 text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-4">Fácil Acesso</h3>
                <p className="text-muted-foreground">
                  Acesse suas receitas favoritas a qualquer momento, em qualquer dispositivo
                </p>
              </div>

              <div className="recipe-card p-8 text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-4">Feito com Amor</h3>
                <p className="text-muted-foreground">
                  Cada receita é criada com paixão e dedicação para trazer alegria à sua mesa
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
