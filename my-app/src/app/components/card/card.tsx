// components/Card.tsx
import { FC, ReactNode } from 'react';
import { Card as ShadCard, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CardProps {
  title: string;
  image?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, image, children }) => {
  return (
    <ShadCard className="w-full max-w-sm rounded-lg border border-gray-200 shadow-lg">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-sm text-gray-600">{children}</CardContent>
    </ShadCard>
  );
};

export default Card;
