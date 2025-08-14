import { Play, FileText, Search, Book } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ContentSections = () => {
  const sections = [
    {
      id: "videos",
      title: "Видеолар",
      description: "Ежелгі әдеби мұраларға арналған мультимедиа материалдар",
      icon: Play,
      content: "Дәстүрлі қазақ әдебиетінің үздік үлгілері мен олардың заманауи түсініктемелері",
      href: "/videos"
    },
    {
      id: "methodology", 
      title: "Методика",
      description: "Инновациялық оқыту әдістемелері мен тәсілдері",
      icon: FileText,
      content: "Педагогикалық технологиялар мен интерактивті оқыту әдістерінің жинағы",
      href: "/methodology"
    },
    {
      id: "glossary",
      title: "Глоссарий", 
      description: "Әдеби терминдер мен ұғымдардың түсіндірмелі сөздігі",
      icon: Search,
      content: "Қазақ әдебиетіндегі негізгі терминдер мен тарихи тұлғалардың анықтамалары",
      href: "/glossary"
    },
    {
      id: "references",
      title: "Пайдаланылған әдебиеттер",
      description: "Ғылыми дереккөздер мен әдебиеттер тізімі",
      icon: Book,
      content: "Зерттеулерде пайдаланылған дереккөздер мен ғылыми еңбектердің жүйелі тізімі",
      href: "/references"
    },
    {
      id: "tests",
      title: "Тесттер",
      description: "Интерактивті тесттер мен бағалау жүйесі",
      icon: FileText,
      content: "Білімді тексеру үшін көп таңдауды және қысқа жауапты сұрақтар",
      href: "/tests"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="academic-title text-3xl md:text-4xl mb-4">
            Платформа мазмұны
          </h2>
          <div className="w-24 h-1 bg-cultural mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Қазақ халқының ежелгі әдеби мұраларын заманауи технологиялар арқылы 
            тиімді түрде оқытуға арналған толыq ресурстар жинағы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {sections.map((section) => (
            <Link key={section.id} to={section.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-cultural/50 cursor-pointer h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-cultural/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cultural/20 transition-colors">
                    <section.icon className="h-8 w-8 text-cultural" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSections;