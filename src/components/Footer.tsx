
import React from "react";
import { MessageCircle, Store, Music, Users, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-border/50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-brazil-green via-brazil-yellow to-brazil-blue text-transparent bg-clip-text">Resenha</h4>
            <p className="text-muted-foreground">
              Uma plataforma digital 100% brasileira para comunicação, comércio local, e celebração da nossa cultura.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#mensagens" className="flex items-center hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Mensagens</span>
                </a>
              </li>
              <li>
                <a href="#mercado-local" className="flex items-center hover:text-primary transition-colors">
                  <Store className="w-4 h-4 mr-2" />
                  <span>Mercado Local</span>
                </a>
              </li>
              <li>
                <a href="#cultura" className="flex items-center hover:text-primary transition-colors">
                  <Music className="w-4 h-4 mr-2" />
                  <span>Cultura</span>
                </a>
              </li>
              <li>
                <a href="#comunidade" className="flex items-center hover:text-primary transition-colors">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Comunidade</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Sobre</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nossa Missão
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Resenha. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0 flex items-center">
            Feito com <Heart className="h-3 w-3 mx-1 text-brazil-carnival" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
