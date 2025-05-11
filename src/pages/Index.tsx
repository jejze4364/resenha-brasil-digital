
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Personas from "@/components/Personas";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Store, Music, FileText, Users } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        
        {/* Mensagens Section */}
        <section id="mensagens" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white/10 to-white/50">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-brazil-green/5 blur-3xl" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-brazil-green/10 px-3 py-1 text-sm text-brazil-green">
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      <span>Comunicação</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mensagens Instantâneas e Videochamadas</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Conecte-se com amigos, familiares e colegas através de mensagens instantâneas e videochamadas de alta qualidade.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-green-200 p-1">
                        <svg
                          className=" h-3 w-3 text-green-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Criptografia de ponta a ponta para total privacidade
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-green-200 p-1">
                        <svg
                          className=" h-3 w-3 text-green-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Emojis e stickers da cultura brasileira
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-green-200 p-1">
                        <svg
                          className=" h-3 w-3 text-green-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Chamadas de vídeo otimizadas para a internet brasileira
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-brazil-green hover:bg-brazil-forest text-white">
                      Experimentar agora
                    </Button>
                    <Button variant="outline" className="border-brazil-green hover:border-brazil-green/50 hover:bg-brazil-green/5">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-brazil-green to-brazil-forest p-1">
                    <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur flex items-center justify-center">
                      <div className="text-center p-8">
                        <MessageCircle className="h-16 w-16 text-brazil-green mx-auto mb-4" />
                        <h3 className="text-xl font-medium">Mensagens Seguras</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Comunique-se com segurança e privacidade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mercado Local Section */}
        <section id="mercado-local" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-brazil-yellow/5 blur-3xl" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-brazil-yellow to-brazil-beach p-1">
                    <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur flex items-center justify-center">
                      <div className="text-center p-8">
                        <Store className="h-16 w-16 text-brazil-yellow mx-auto mb-4" />
                        <h3 className="text-xl font-medium">Marketplace Brasileiro</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Compre e venda produtos locais com facilidade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-brazil-yellow/10 px-3 py-1 text-sm text-brazil-yellow">
                    <div className="flex items-center">
                      <Store className="h-4 w-4 mr-2" />
                      <span>Comércio Local</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Marketplace Local</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Valorize os negócios brasileiros comprando e vendendo produtos e serviços em um ambiente seguro e confiável.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-amber-200 p-1">
                        <svg
                          className=" h-3 w-3 text-amber-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Integração com PIX e métodos de pagamento brasileiros
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-amber-200 p-1">
                        <svg
                          className=" h-3 w-3 text-amber-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Geolocalização para encontrar produtos locais
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-amber-200 p-1">
                        <svg
                          className=" h-3 w-3 text-amber-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Sistema de avaliação e feedback para vendedores
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-brazil-yellow text-black hover:bg-brazil-yellow/80">
                      Explorar Mercado
                    </Button>
                    <Button variant="outline" className="border-brazil-yellow hover:border-brazil-yellow/50 hover:bg-brazil-yellow/5">
                      Para Comerciantes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultura Section */}
        <section id="cultura" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white/10 to-white/50">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-brazil-blue/5 blur-3xl" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-brazil-blue/10 px-3 py-1 text-sm text-brazil-blue">
                    <div className="flex items-center">
                      <Music className="h-4 w-4 mr-2" />
                      <span>Cultura Brasileira</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Espaço Cultural Brasileiro</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Um ambiente dedicado à celebração e promoção da música, arte e literatura brasileiras.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-blue-200 p-1">
                        <svg
                          className=" h-3 w-3 text-blue-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Divulgação de eventos culturais locais
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-blue-200 p-1">
                        <svg
                          className=" h-3 w-3 text-blue-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Plataforma para artistas independentes
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-blue-200 p-1">
                        <svg
                          className=" h-3 w-3 text-blue-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Acesso a conteúdo cultural nacional
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-brazil-blue hover:bg-brazil-blue/80 text-white">
                      Explorar Cultura
                    </Button>
                    <Button variant="outline" className="border-brazil-blue hover:border-brazil-blue/50 hover:bg-brazil-blue/5">
                      Para Artistas
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-brazil-blue to-brazil-ipanema p-1">
                    <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur flex items-center justify-center">
                      <div className="text-center p-8">
                        <Music className="h-16 w-16 text-brazil-blue mx-auto mb-4" />
                        <h3 className="text-xl font-medium">Cultura e Arte</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Celebre e promova a cultura brasileira
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notícias Section */}
        <section id="noticias" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-brazil-carnival/5 blur-3xl" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-brazil-carnival to-brazil-yellow p-1">
                    <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur flex items-center justify-center">
                      <div className="text-center p-8">
                        <FileText className="h-16 w-16 text-brazil-carnival mx-auto mb-4" />
                        <h3 className="text-xl font-medium">Notícias Locais</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Informação com foco nas questões brasileiras
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-brazil-carnival/10 px-3 py-1 text-sm text-brazil-carnival">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Notícias e Informação</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notícias e Debates Locais</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Fique por dentro dos acontecimentos mais importantes do Brasil e participe de discussões relevantes.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-pink-200 p-1">
                        <svg
                          className=" h-3 w-3 text-pink-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Notícias e conteúdos produzidos no Brasil
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-pink-200 p-1">
                        <svg
                          className=" h-3 w-3 text-pink-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Debates sobre temas relevantes para o país
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 rounded-full bg-pink-200 p-1">
                        <svg
                          className=" h-3 w-3 text-pink-600"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Ferramentas para expressão e votação em tópicos nacionais
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-brazil-carnival hover:bg-brazil-carnival/80 text-white">
                      Ver Notícias
                    </Button>
                    <Button variant="outline" className="border-brazil-carnival hover:border-brazil-carnival/50 hover:bg-brazil-carnival/5">
                      Participar de Debates
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Personas />

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brazil-green/20 via-brazil-yellow/20 to-brazil-blue/20 blur-3xl opacity-50" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
                Uma Plataforma para Todos os Brasileiros
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Junte-se à Resenha e faça parte da primeira plataforma digital 100% brasileira, que valoriza nossa cultura e nosso mercado interno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brazil-green hover:bg-brazil-forest text-white text-lg py-6">
                  Criar Conta
                </Button>
                <Button size="lg" variant="outline" className="border-brazil-yellow hover:border-brazil-yellow/80 hover:bg-brazil-yellow/10 text-lg py-6">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
