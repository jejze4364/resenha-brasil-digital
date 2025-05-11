
import React from "react";
import PersonaCard from "./PersonaCard";

const Personas: React.FC = () => {
  const personas = [
    {
      name: "Jovem Conectado",
      age: "18-35 anos",
      description: "Usuários jovens, dinâmicos e com forte presença digital, sempre em busca de novas formas de se conectar.",
      interests: ["Entretenimento", "Cultura", "Redes Sociais", "Tendências"],
      color: "#009C3B" // green
    },
    {
      name: "Profissional Empreendedor",
      age: "25-45 anos",
      description: "Empreendedores e profissionais buscando novas formas de conectar seus negócios ao público brasileiro.",
      interests: ["Networking", "Marketing", "Negócios", "Tecnologia"],
      color: "#FFDF00" // yellow
    },
    {
      name: "Comerciante Local",
      age: "30-50 anos",
      description: "Pequenos empresários que buscam aumentar suas vendas e visibilidade no ambiente digital.",
      interests: ["Vendas", "E-commerce", "Marketing Local", "Fidelização"],
      color: "#002776" // blue
    },
    {
      name: "Idoso Digital",
      age: "50-70 anos",
      description: "Pessoas que buscam maneiras simples e seguras de se conectar com familiares e amigos.",
      interests: ["Comunicação Familiar", "Segurança", "Simplicidade", "Educação"],
      color: "#CD853F" // terra
    },
    {
      name: "Ativista Cultural",
      age: "20-40 anos",
      description: "Indivíduos engajados em causas sociais e culturais, com foco na preservação da cultura brasileira.",
      interests: ["Cultura", "Eventos", "Ativismo", "Comunidade"],
      color: "#FF3366" // carnival
    }
  ];

  return (
    <section id="comunidade" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-white/50">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brazil-green/5 blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brazil-yellow/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Para Todos os Brasileiros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma pensada para atender as necessidades de todos os perfis de usuários.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {personas.map((persona, index) => (
            <PersonaCard
              key={index}
              name={persona.name}
              age={persona.age}
              description={persona.description}
              interests={persona.interests}
              color={persona.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
