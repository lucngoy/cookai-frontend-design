import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, ChefHat, Lightbulb } from "lucide-react";

const Generate = () => {
  const [ingredients, setIngredients] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!ingredients.trim()) return;
    
    setIsGenerating(true);
    // Simulate loading
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-up"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Inspiration
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Generate <span className="text-gradient-primary">Ideas</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Enter your available ingredients and let us inspire you with 
              creative recipe suggestions.
            </p>
          </div>

          {/* Input Card */}
          <div 
            className="bg-card rounded-3xl border border-border shadow-soft-lg p-8 mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <label className="block text-sm font-medium mb-3">
              What ingredients do you have?
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., chicken, tomatoes, garlic, olive oil, basil..."
              className="w-full h-32 p-4 rounded-xl bg-secondary/50 border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={handleGenerate}
                disabled={!ingredients.trim() || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    Generate Ideas
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIngredients("")}
                disabled={!ingredients.trim()}
              >
                Clear
              </Button>
            </div>
          </div>

          {/* Placeholder Results */}
          <div 
            className="bg-secondary/30 rounded-3xl border border-border p-8 text-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-20 h-20 rounded-2xl bg-card shadow-soft mx-auto mb-6 flex items-center justify-center">
              <ChefHat className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Ready to inspire you
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Enter your ingredients above and click "Generate Ideas" to receive 
              personalized recipe suggestions.
            </p>
          </div>

          {/* Tips Section */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Lightbulb,
                title: "Be Specific",
                description: "Include quantities and preferences for better results",
              },
              {
                icon: Sparkles,
                title: "Mix & Match",
                description: "Combine different cuisines for unique flavor profiles",
              },
            ].map((tip, index) => (
              <div
                key={tip.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft animate-fade-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <tip.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold mb-1">{tip.title}</h4>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Generate;
