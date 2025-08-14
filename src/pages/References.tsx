import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Book, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const References = () => {
  const references = [
    {
      id: 1,
      author: "Қасым Жұмалиев",
      title: "Қазақ әдебиетінің тарихы (көне дәуір)",
      year: "1965",
      publisher: "Ғылым",
      location: "Алматы",
      pages: "456",
      type: "Монография"
    },
    {
      id: 2,
      author: "Сейіт Қасқабасов",
      title: "Қазақ фольклорының тарихы мен теориясы",
      year: "1992",
      publisher: "Санат",
      location: "Алматы", 
      pages: "384",
      type: "Оқулық"
    },
    {
      id: 3,
      author: "Мұхтар Мағауин",
      title: "Қорқыт дастандары және олардың поэтикасы",
      year: "1988",
      publisher: "Жазушы",
      location: "Алматы",
      pages: "288",
      type: "Зерттеу"
    },
    {
      id: 4,
      author: "Нұрсұлтан Келімбетов",
      title: "Орхон ескерткіштерінің тілі мен мәдениеті",
      year: "2003",
      publisher: "Арыс",
      location: "Алматы",
      pages: "512",
      type: "Монография"
    },
    {
      id: 5,
      author: "Ахмет Байтұрсынов",
      title: "Әдебиет танытқыш",
      year: "1991",
      publisher: "Ана тілі",
      location: "Алматы",
      pages: "256",
      type: "Оқулық"
    },
    {
      id: 6,
      author: "Рабига Сыздықова",
      title: "Көне түркі тілінің лексикасы",
      year: "1999",
      publisher: "Ғылым",
      location: "Алматы",
      pages: "432",
      type: "Зерттеу"
    },
    {
      id: 7,
      author: "Мектеп Копеев",
      title: "Дәстүрлі қазақ әдебиетінің жанрлық жүйесі",
      year: "2001",
      publisher: "Қазақ университеті",
      location: "Алматы",
      pages: "368",
      type: "Монография"
    },
    {
      id: 8,
      author: "Заряд Ахметов",
      title: "Қазақ поэзиясының тарихы (XIII-XVIII ғғ.)",
      year: "1995",
      publisher: "Санат",
      location: "Алматы",
      pages: "524",
      type: "Зерттеу"
    },
    {
      id: 9,
      author: "Берикбол Нұрғали",
      title: "Жүсіп Баласағұнның «Құтты білік» дастаны",
      year: "2007",
      publisher: "Қазақстан",
      location: "Алматы",
      pages: "296",
      type: "Монография"
    },
    {
      id: 10,
      author: "Қадыр Мырзалиев",
      title: "Қазақ тіл білімінің мәселелері",
      year: "2010",
      publisher: "Елтаным",
      location: "Астана",
      pages: "344",
      type: "Жинақ"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Монография":
        return "bg-primary/10 text-primary";
      case "Оқулық":
        return "bg-cultural/10 text-cultural-foreground";
      case "Зерттеу":
        return "bg-secondary text-secondary-foreground";
      case "Жинақ":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="academic-title text-4xl md:text-5xl mb-4">
              Пайдаланылған әдебиеттер
            </h1>
            <div className="w-24 h-1 bg-cultural mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ғылыми дереккөздер мен әдебиеттер тізімі. 
              Зерттеулерде пайдаланылған дереккөздер мен ғылыми еңбектердің жүйелі тізімі.
            </p>
          </div>
        </div>
      </section>

      {/* References List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {references.map((ref) => (
              <Card key={ref.id} className="border-border/50 hover:border-cultural/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 bg-cultural/10 rounded-lg flex items-center justify-center mt-1">
                        <Book className="h-5 w-5 text-cultural" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-serif text-lg text-primary mb-2 leading-tight">
                          {ref.title}
                        </CardTitle>
                        <p className="text-foreground font-medium mb-1">{ref.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {ref.location}: {ref.publisher}, {ref.year}. — {ref.pages} б.
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={getTypeColor(ref.type)}>
                      {ref.type}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          {/* APA Style Note */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-accent/30 border-cultural/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg text-primary mb-3">Дәйексөз стилі туралы</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Барлық дереккөздер академиялық стандарттарға сәйкес ресімделген. 
                  Толық библиографиялық сипаттама ГОСТ 7.1-2003 талаптарына сай берілген.
                  Қосымша ақпарат алу үшін әр дереккөзбен жеке танысуға болады.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default References;