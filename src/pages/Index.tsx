import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChefHat, Utensils, Upload, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Discover new flavors
                </span>
              </div>

              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Welcome to{" "}
                <span className="text-gradient-primary">Cook</span>
                <span className="text-gradient-accent">AI</span>
              </h1>

              <p 
                className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Your elegant companion for culinary inspiration. Explore ingredients, 
                discover recipes, and elevate your cooking experience.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button asChild variant="hero" size="xl">
                  <Link to="/recipes">
                    <Utensils className="w-5 h-5" />
                    Explore Recipes
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/upload">
                    <Upload className="w-5 h-5" />
                    Upload Photo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Illustration */}
            <div 
              className="relative animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-muted border border-border shadow-soft-lg" />
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 rounded-2xl bg-card shadow-soft flex items-center justify-center animate-float">
                  <span className="text-4xl">🥗</span>
                </div>
                <div className="absolute top-1/4 right-4 w-16 h-16 rounded-xl bg-card shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <span className="text-3xl">🍳</span>
                </div>
                <div className="absolute bottom-1/4 left-4 w-14 h-14 rounded-lg bg-card shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-2xl">🥑</span>
                </div>
                <div className="absolute bottom-8 right-8 w-18 h-18 rounded-xl bg-card shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <span className="text-3xl">🍰</span>
                </div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-primary/80 shadow-glow-primary flex items-center justify-center">
                    <ChefHat className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, elegant tools to inspire your culinary journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍽️",
                title: "Ingredient Gallery",
                description: "Browse through 100+ fresh ingredients with beautiful imagery",
                link: "/recipes",
              },
              {
                icon: "✨",
                title: "Generate Ideas",
                description: "Get inspired with recipe suggestions tailored to your taste",
                link: "/generate",
              },
              {
                icon: "📸",
                title: "Upload & Share",
                description: "Share your culinary creations with the community",
                link: "/upload",
              },
            ].map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group relative p-8 rounded-2xl bg-card border border-border shadow-soft hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to start cooking?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore our ingredient gallery and discover new recipe ideas today.
            </p>
            <Button asChild variant="accent" size="xl">
              <Link to="/recipes">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
