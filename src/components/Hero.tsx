
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Store, Music, Users } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brazil-green/10 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-brazil-yellow/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brazil-blue/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
            <h1 className="gradient-text">
              Conectando Brasileiros, Valorizando Nossa Cultura
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma digital 100% brasileira para comunicação, comércio local, e celebração da nossa cultura com privacidade e autenticidade.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <Button className="bg-brazil-green hover:bg-brazil-forest text-white text-lg py-6" size="lg">
              Comece Agora
            </Button>
            <Button variant="outline" className="border-brazil-yellow hover:border-brazil-yellow/80 hover:bg-brazil-yellow/10 text-lg py-6" size="lg">
              Saiba Mais
            </Button>
          </div>

          <div className="relative w-full max-w-3xl mx-auto mt-8 md:mt-16 animate-float">
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-brazil-green via-brazil-blue to-brazil-yellow p-1">
              <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur flex items-center justify-center">
                <div className="text-center p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Resenha App</h3>
                  <div className="flex justify-center gap-8">
                    <div className="flex flex-col items-center">
                      <MessageCircle className="h-8 w-8 text-brazil-green mb-2" />
                      <span className="text-sm text-gray-600">Mensagens</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Store className="h-8 w-8 text-brazil-yellow mb-2" />
                      <span className="text-sm text-gray-600">Mercado</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Music className="h-8 w-8 text-brazil-blue mb-2" />
                      <span className="text-sm text-gray-600">Cultura</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="h-8 w-8 text-brazil-carnival mb-2" />
                      <span className="text-sm text-gray-600">Comunidade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
