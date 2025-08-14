import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryTerms = [
    {
      term: "Орхон-Енисей ескерткіштері",
      definition: "VIII ғасырға жататын көне түркі руникалық жазуларының ескерткіштері, олар Орхон және Енисей өзендерінің аймағында табылған."
    },
    {
      term: "Рунтану",
      definition: "Көне германдық және түркі жазуларын зерттейтін ғылым саласы, оның ішінде руникалық белгілердің дешифрлеуі мен интерпретациясы."
    },
    {
      term: "Дастан",
      definition: "Ауызша дәстүрде дамыған, халықтың тарихи және мифологиялық дүниетанымын көрсететін көлемді эпикалық туынды."
    },
    {
      term: "Қағанат",
      definition: "Көне түркі мемлекеттік құрылымы, оның басында қаған тұратын саяси және әскери одақ."
    },
    {
      term: "Көркемдік тәсіл",
      definition: "Әдеби шығармада автордың өз ойын жеткізу үшін қолданатын стилистикалық құралдар мен тәсілдер жиынтығы."
    },
    {
      term: "Тәрбиелік мәтін",
      definition: "Адамгершілік құндылықтарды, этикалық нормаларды және дүниетанымдық негіздерді дарытуға бағытталған әдеби туынды."
    },
    {
      term: "Лексикография",
      definition: "Сөздіктер құрастыру теориясы мен практикасы, сөздік қорын жүйелеу және сипаттау ғылымы."
    },
    {
      term: "Этнография",
      definition: "Халықтардың мәдениеті, тұрмыс-салты, дәстүрлері мен әлеуметтік қатынастарын зерттейтін ғылым."
    },
    {
      term: "Поэтика",
      definition: "Әдеби шығарманың құрылымы, формасы, стилі және көркемдік тәсілдерін зерттейтін әдебиеттану саласы."
    },
    {
      term: "Интерпретация",
      definition: "Мәтінді түсіндіру, оның мағынасын ашу және мазмұнын заманауи тұрғыдан түсіну процесі."
    },
    {
      term: "Дәстүрлі мәдениет",
      definition: "Ұрпақтан ұрпаққа беріліп отыратын, халықтың тарихи дүниетанымын көрсететін мәдени құндылықтар жүйесі."
    },
    {
      term: "Филология",
      definition: "Тіл мен әдебиетті, олардың тарихи дамуын және мәдени мұрадағы орнын кешенді зерттейтін ғылым."
    }
  ];

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="academic-title text-4xl md:text-5xl mb-4">
              Глоссарий
            </h1>
            <div className="w-24 h-1 bg-cultural mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Әдеби терминдер мен ұғымдардың түсіндірмелі сөздігі. 
              Қазақ әдебиетіндегі негізгі терминдер мен тарихи тұлғалардың анықтамалары.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Терминдерді іздеу..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredTerms.map((item, index) => (
              <Card key={index} className="border-border/50 hover:border-cultural/50 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-xl text-primary cultural-border">
                    {item.term}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground leading-relaxed">
                    {item.definition}
                  </p>
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

export default Glossary;