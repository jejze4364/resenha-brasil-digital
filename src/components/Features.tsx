
import React from "react";
import FeatureCard from "./FeatureCard";
import { MessageCircle, Store, Music, FileText, Shield, Users } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Mensagens Instantâneas e Videochamadas",
      description: "Se comunique com segurança através de mensagens e chamadas de vídeo com criptografia e emojis da cultura brasileira.",
      icon: <MessageCircle className="h-6 w-6 text-brazil-green" />,
      iconClassName: "bg-brazil-green/10"
    },
    {
      title: "Marketplace Local",
      description: "Compre e venda produtos locais com integração para pagamentos brasileiros como PIX, boletos e cartões nacionais.",
      icon: <Store className="h-6 w-6 text-brazil-yellow" />,
      iconClassName: "bg-brazil-yellow/10"
    },
    {
      title: "Espaço Cultural Brasileiro",
      description: "Acesse conteúdos de entretenimento genuinamente brasileiros – música, filmes, podcasts e literatura nacional.",
      icon: <Music className="h-6 w-6 text-brazil-blue" />,
      iconClassName: "bg-brazil-blue/10"
    },
    {
      title: "Notícias e Debates Locais",
      description: "Fique informado com notícias focadas no Brasil e participe de discussões sobre tópicos nacionais relevantes.",
      icon: <FileText className="h-6 w-6 text-brazil-carnival" />,
      iconClassName: "bg-brazil-carnival/10"
    },
    {
      title: "Privacidade e Controle de Dados",
      description: "Tenha garantia de que seus dados permanecem sob seu controle e não serão vendidos para empresas externas.",
      icon: <Shield className="h-6 w-6 text-brazil-forest" />,
      iconClassName: "bg-brazil-forest/10"
    },
    {
      title: "Acessibilidade e Inclusão",
      description: "Desfrute de uma plataforma com design inclusivo e recursos para todos os brasileiros, independente de suas necessidades.",
      icon: <Users className="h-6 w-6 text-brazil-ipanema" />,
      iconClassName: "bg-brazil-ipanema/10"
    }
  ];

  return (
    <section id="recursos" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-brazil-green/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brazil-yellow/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Recursos da Plataforma</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para se conectar, empreender e celebrar a cultura brasileira em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconClassName={feature.iconClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
