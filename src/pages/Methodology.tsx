import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, FileText, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Methodology = () => {
  const materials = [
    {
      id: "case-study",
      title: "Кейс-стади әдісі",
      description: "Ежелгі мәтіндерді талдауға арналған практикалық кейстер жинағы",
      icon: FileText,
      fileType: "PDF",
      fileSize: "2.5 MB",
      preview: "/placeholder.svg"
    },
    {
      id: "mind-mapping",
      title: "Ақыл-ой картасы",
      description: "Әдеби мұралардың құрылымын визуализациялау әдістемесі",
      icon: Brain,
      fileType: "PDF",
      fileSize: "1.8 MB",
      preview: "/placeholder.svg"
    },
    {
      id: "foresight",
      title: "Болашақты болжау әдісі",
      description: "Дәстүрлі мәтіндердің заманауи интерпретациясы үшін инновациялық тәсіл",
      icon: Lightbulb,
      fileType: "PDF",
      fileSize: "3.2 MB",
      preview: "/placeholder.svg"
    }
  ];

  const handleDownload = (materialId: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading material: ${materialId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="academic-title text-4xl md:text-5xl mb-4">
              Методика
            </h1>
            <div className="w-24 h-1 bg-cultural mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Инновациялық оқыту әдістемелері мен тәсілдері. Педагогикалық технологиялар мен 
              интерактивті оқыту әдістерінің жинағы.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Materials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material) => (
              <Card key={material.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-cultural/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] bg-accent/20 rounded-t-lg overflow-hidden">
                    <img 
                      src={material.preview} 
                      alt={material.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {material.fileType}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-cultural/10 rounded-lg flex items-center justify-center">
                      <material.icon className="h-6 w-6 text-cultural" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg text-primary mb-1">
                        {material.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{material.fileSize}</p>
                    </div>
                  </div>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {material.description}
                  </CardDescription>
                  
                  <Button 
                    className="w-full bg-cultural text-cultural-foreground hover:bg-cultural/90"
                    onClick={() => handleDownload(material.id)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Жүктеп алу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodology;