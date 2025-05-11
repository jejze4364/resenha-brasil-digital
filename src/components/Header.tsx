
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Store, Music, Users, Menu } from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Mensagens", icon: <MessageCircle className="w-4 h-4 mr-2" /> },
    { name: "Mercado Local", icon: <Store className="w-4 h-4 mr-2" /> },
    { name: "Cultura", icon: <Music className="w-4 h-4 mr-2" /> },
    { name: "Comunidade", icon: <Users className="w-4 h-4 mr-2" /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brazil-green via-brazil-yellow to-brazil-blue text-transparent bg-clip-text">Resenha</span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <Button className="bg-brazil-green hover:bg-brazil-forest text-white">
            Acessar
          </Button>
        </nav>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <Button className="mt-4 w-full bg-brazil-green hover:bg-brazil-forest text-white">
                Acessar
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
