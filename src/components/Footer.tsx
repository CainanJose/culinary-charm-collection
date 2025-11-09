import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            Feito com <Heart className="inline h-4 w-4 text-destructive fill-destructive" /> por Livro de Receitas
          </p>
          <p className="text-sm text-muted-foreground">
            {currentTime.toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            - {currentTime.toLocaleTimeString("pt-BR")}
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
