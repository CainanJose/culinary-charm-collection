import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Instagram, Facebook } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como posso enviar minha própria receita?",
    answer: "Entre em contato conosco através do formulário acima com o título 'Minha Receita' e descreva sua receita. Nossa equipe analisará e entrará em contato."
  },
  {
    question: "Vocês fazem encomendas?",
    answer: "Atualmente não fazemos encomendas, mas compartilhamos receitas para você preparar em casa com todo carinho!"
  },
  {
    question: "Posso usar as receitas comercialmente?",
    answer: "As receitas são para uso pessoal. Para uso comercial, entre em contato conosco para discutir as opções."
  },
  {
    question: "Com que frequência novas receitas são adicionadas?",
    answer: "Adicionamos novas receitas semanalmente! Acompanhe nossas redes sociais para não perder as novidades."
  }
];

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    toast.success("📩 Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve!"
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="text-xl text-muted-foreground">
              Entre em contato conosco. Adoramos ouvir de você!
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 animate-slide-up">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full hero-button">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Redes Sociais</h2>
            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => toast.info("Instagram em breve!")}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 max-w-xs"
                onClick={() => toast.info("Facebook em breve!")}
              >
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
