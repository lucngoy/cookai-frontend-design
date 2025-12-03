import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IngredientCard } from "@/components/IngredientCard";
import { ingredients } from "@/data/ingredients";
import { Search, Filter } from "lucide-react";

const categories = [
  "All",
  "Vegetables",
  "Fruits",
  "Proteins",
  "Seafood",
  "Dairy",
  "Grains",
  "Herbs & Spices",
  "Nuts & Seeds",
  "Condiments",
];

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ingredient) => {
      const matchesSearch = ingredient.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || ingredient.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-up">
              Ingredient Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Explore our collection of {ingredients.length}+ fresh ingredients 
              for your next culinary creation.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-10 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-card border border-border shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>
              Showing {filteredIngredients.length} ingredient
              {filteredIngredients.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Ingredients Grid */}
          {filteredIngredients.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {filteredIngredients.map((ingredient, index) => (
                <div
                  key={ingredient.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${Math.min(index * 0.02, 0.5)}s` }}
                >
                  <IngredientCard
                    name={ingredient.name}
                    image={ingredient.image}
                    category={ingredient.category}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No ingredients found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recipes;
