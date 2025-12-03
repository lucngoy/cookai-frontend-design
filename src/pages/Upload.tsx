import { useState, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon, Image, X, Check, Camera } from "lucide-react";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      processFile(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  }, []);

  const processFile = (file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const clearPreview = () => {
    setPreview(null);
    setFileName(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-up"
            >
              <Camera className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Share your creations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Upload <span className="text-gradient-accent">Photo</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Share your culinary masterpieces with our community.
            </p>
          </div>

          {/* Upload Area */}
          <div 
            className="animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {!preview ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative group cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
                  isDragging
                    ? "border-primary bg-primary/5 scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:bg-secondary/30"
                }`}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <div className="space-y-4">
                  <div className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center transition-all duration-300 ${
                    isDragging ? "bg-primary/20" : "bg-secondary"
                  }`}>
                    <UploadIcon className={`w-10 h-10 transition-colors ${
                      isDragging ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>

                  <div>
                    <p className="text-lg font-semibold mb-1">
                      {isDragging ? "Drop your image here" : "Drag & drop your image"}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      or click to browse from your device
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Image className="w-4 h-4" />
                    <span>PNG, JPG, WEBP up to 10MB</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                {/* Preview Image */}
                <div className="relative aspect-video bg-secondary">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={clearPreview}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-soft flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* File Info & Actions */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{fileName}</p>
                      <p className="text-sm text-muted-foreground">Ready to upload</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="accent" size="lg" className="flex-1">
                      <UploadIcon className="w-5 h-5" />
                      Upload Photo
                    </Button>
                    <Button variant="outline" size="lg" onClick={clearPreview}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="mt-12 p-6 rounded-2xl bg-secondary/30 border border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-semibold mb-4">Tips for great photos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Use natural lighting for the best results
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Capture the dish from a 45-degree angle
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Include garnishes and props for context
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Keep the background clean and minimal
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
