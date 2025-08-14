import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Videos = () => {
  const courses = [
    {
      id: "kultegen",
      title: "Күлтегін",
      description: "Орхон-Енисей ескерткіштері. Күлтегін жазуының тарихи маңызы мен әдеби құндылығы",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1k2mfj7H2ETUcfp4ZqfBdkOwiz-pT6itX/view"
    },
    {
      id: "bilge-kagan",
      title: "Білге қаған",
      description: "Білге қаған жазуының саяси және әдеби мәтіні. Түркі тарихындағы орны",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1k2mfj7H2ETUcfp4ZqfBdkOwiz-pT6itX/view"
    },
    {
      id: "tonykok",
      title: "Тоныкөк",
      description: "Тоныкөк ескерткішінің лингвистикалық және мәдени ерекшеліктері",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1k2mfj7H2ETUcfp4ZqfBdkOwiz-pT6itX/view"
    },
    {
      id: "yusuf-balasagun",
      title: "Жүсіп Баласағұн",
      description: "«Құтты білік» дастанының тәрбиелік маңызы мен поэтикалық ерекшеліктері",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1k2mfj7H2ETUcfp4ZqfBdkOwiz-pT6itX/view"
    },
    {
      id: "mahmud-kashgari",
      title: "Махмұт Қашқари",
      description: "«Диуани лұғат-ит-түрік» еңбегінің лексикографиялық және этнографиялық мәні",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1k2mfj7H2ETUcfp4ZqfBdkOwiz-pT6itX/view"
    },
    {
      id: "saif-sarai",
      title: "Сайф Сарай",
      description: "«Гүлстан бит-түрки» поэмасының көркемдік ерекшеліктері мен тақырыптық мазмұны",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://drive.google.com/file/d/1k2mfj7H2ETUcfp4ZqfBdkOwiz-pT6itX/view"
    }
  ];

  const handleVideoPlay = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="academic-title text-4xl md:text-5xl mb-4">
              Видеолар
            </h1>
            <div className="w-24 h-1 bg-cultural mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ежелгі әдеби мұраларға арналған мультимедиа материалдар. 
              Әр дәрісте тарихи мәтіндердің мазмұны мен олардың заманауи түсініктемелері берілген.
            </p>
          </div>
        </div>
      </section>

      {/* Video Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-cultural/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-video bg-accent/20 rounded-t-lg overflow-hidden">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="lg"
                        className="bg-cultural text-cultural-foreground hover:bg-cultural/90"
                        onClick={() => handleVideoPlay(course.videoUrl)}
                      >
                        <Play className="h-6 w-6 mr-2" />
                        Ойнату
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-serif text-xl text-primary mb-3">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </CardDescription>
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

export default Videos;