interface IngredientCardProps {
  name: string;
  image: string;
  category?: string;
}

export function IngredientCard({ name, image, category }: IngredientCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl p-4 shadow-soft hover-lift cursor-pointer border border-border/50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image Container */}
      <div className="relative aspect-square rounded-xl bg-secondary/50 overflow-hidden mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="font-medium text-sm text-foreground truncate">{name}</h3>
        {category && (
          <p className="text-xs text-muted-foreground mt-0.5">{category}</p>
        )}
      </div>
    </div>
  );
}
