import { BookOpen, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cultural ornament */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-cultural rounded-full"></div>
          </div>
          
          {/* Main Title */}
          <h1 className="academic-title text-4xl md:text-6xl mb-6 leading-tight">
            Ежелгі әдеби мұраларды инновациялық технологиялар арқылы ЖОО-да оқыту
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Қазақ халқының бай әдеби дәстүрлерін заманауи технологиялармен үйлестіре отырып, 
            жоғары оқу орындарында тиімді оқыту әдістемесін дамыту платформасы
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="cultural-border bg-card/50 rounded-lg p-6">
              <BookOpen className="h-8 w-8 text-cultural mb-4 mx-auto" />
              <h3 className="font-serif font-semibold mb-2">Мультимедиа контент</h3>
              <p className="text-sm text-muted-foreground">
                Интерактивті видеолар мен дыбыстық материалдар
              </p>
            </div>
            
            <div className="cultural-border bg-card/50 rounded-lg p-6">
              <Sparkles className="h-8 w-8 text-cultural mb-4 mx-auto" />
              <h3 className="font-serif font-semibold mb-2">Инновациялық әдістер</h3>
              <p className="text-sm text-muted-foreground">
                Заманауи педагогикалық технологиялар
              </p>
            </div>
            
            <div className="cultural-border bg-card/50 rounded-lg p-6">
              <Users className="h-8 w-8 text-cultural mb-4 mx-auto" />
              <h3 className="font-serif font-semibold mb-2">Ынтымақтастық</h3>
              <p className="text-sm text-muted-foreground">
                Студенттер мен оқытушылар арасындағы байланыс
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Платформаны зерттеу
            </Button>
            <Button size="lg" variant="outline" className="border-cultural text-cultural hover:bg-cultural/10">
              Көбірек білу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;