
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PersonaCardProps {
  name: string;
  description: string;
  age: string;
  interests: string[];
  image?: string;
  color: string;
}

const PersonaCard: React.FC<PersonaCardProps> = ({
  name,
  description,
  age,
  interests,
  image,
  color,
}) => {
  return (
    <Card className="overflow-hidden border-b-4 transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm hover:bg-white/80" 
          style={{ borderBottomColor: color }}>
      <div className={cn("h-2", `bg-[${color}]`)}></div>
      <div className="p-6">
        <h4 className="font-bold text-xl mb-1">{name}</h4>
        <p className="text-sm text-muted-foreground mb-4">{age}</p>
        <p className="text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <Badge key={index} variant="outline" className="bg-white/50">
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PersonaCard;
