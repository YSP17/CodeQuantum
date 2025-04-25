
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface SkillCardProps {
  title: string;
  description: string;
}

export function SkillCard({ title, description }: SkillCardProps) {
  return (
    <Card className="h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 border border-zinc-800 bg-zinc-900/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-tech-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
