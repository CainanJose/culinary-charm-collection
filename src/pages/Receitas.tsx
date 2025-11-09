import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import pastaImg from "@/assets/pasta-italiana.jpg";
import feijoadaImg from "@/assets/feijoada-brasileira.jpg";
import saladaImg from "@/assets/salada-fresca.jpg";
import boloImg from "@/assets/bolo-chocolate.jpg";
import frangoImg from "@/assets/frango-grelhado.jpg";

interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string;
  tips: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Pasta Italiana",
    category: "massas",
    image: pastaImg,
    ingredients: ["500g de espaguete", "400g de tomate pelado", "3 dentes de alho", "Manjericão fresco", "Queijo parmesão", "Azeite extra virgem"],
    instructions: "Cozinhe o espaguete al dente. Em uma panela, refogue o alho no azeite, adicione os tomates e cozinhe por 15 minutos. Finalize com manjericão fresco e sirva com parmesão ralado.",
    tips: "Use massa de boa qualidade e não cozinhe demais!"
  },
  {
    id: 2,
    title: "Feijoada Brasileira",
    category: "pratos-principais",
    image: feijoadaImg,
    ingredients: ["500g de feijão preto", "300g de carne seca", "200g de linguiça calabresa", "150g de bacon", "Temperos diversos"],
    instructions: "Deixe o feijão de molho na véspera. Cozinhe as carnes separadamente, depois junte ao feijão e cozinhe por 2 horas em fogo baixo. Sirva com arroz, couve e laranja.",
    tips: "Quanto mais demorado o cozimento, melhor fica!"
  },
  {
    id: 3,
    title: "Salada Fresca",
    category: "saladas",
    image: saladaImg,
    ingredients: ["Mix de folhas verdes", "Tomate cereja", "Pepino", "Cenoura", "Molho vinagrete"],
    instructions: "Lave bem todos os vegetais. Corte em pedaços médios, misture tudo em uma tigela grande. Tempere com o vinagrete na hora de servir.",
    tips: "Adicione sementes e castanhas para mais crocância!"
  },
  {
    id: 4,
    title: "Bolo de Chocolate",
    category: "sobremesas",
    image: boloImg,
    ingredients: ["2 xícaras de farinha de trigo", "2 xícaras de açúcar", "3/4 xícara de cacau em pó", "2 colheres de chá de fermento", "3 ovos", "1 xícara de leite"],
    instructions: "Misture os ingredientes secos. Adicione os ovos e o leite, bata bem. Asse em forno pré-aquecido a 180°C por 35-40 minutos. Cubra com ganache de chocolate.",
    tips: "Não abra o forno antes de 30 minutos!"
  },
  {
    id: 5,
    title: "Frango Grelhado",
    category: "pratos-principais",
    image: frangoImg,
    ingredients: ["2 peitos de frango", "Sal e pimenta", "Suco de limão", "Alho", "Legumes variados"],
    instructions: "Tempere o frango com sal, pimenta, limão e alho. Deixe marinar por 30 minutos. Grelhe por 6-7 minutos de cada lado. Sirva com legumes grelhados.",
    tips: "Use um termômetro para garantir que está bem cozido!"
  }
];

export default function Receitas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("todas");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    let filtered = recipes;

    if (category !== "todas") {
      filtered = filtered.filter((recipe) => recipe.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [searchTerm, category]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossas Receitas</h1>
            <p className="text-xl text-muted-foreground">
              Descubra sabores incríveis para todas as ocasiões
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12 space-y-4 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar receitas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as Categorias</SelectItem>
                <SelectItem value="massas">Massas</SelectItem>
                <SelectItem value="pratos-principais">Pratos Principais</SelectItem>
                <SelectItem value="saladas">Saladas</SelectItem>
                <SelectItem value="sobremesas">Sobremesas</SelectItem>
              </SelectContent>
            </Select>

            <p className="text-center text-muted-foreground">
              Mostrando {filteredRecipes.length} {filteredRecipes.length === 1 ? "receita" : "receitas"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe, index) => (
              <article
                key={recipe.id}
                className="recipe-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{recipe.title}</h3>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ingredientes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Modo de Preparo:</h4>
                    <p className="text-sm text-muted-foreground">{recipe.instructions}</p>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-accent">💡 Dica: {recipe.tips}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-foreground">Nenhuma receita encontrada</p>
              <p className="text-muted-foreground mt-2">Tente buscar por outro termo ou categoria</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
