import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Tests = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      type: "multiple-choice",
      question: "Орхон-Енисей ескерткіштері қай ғасырға жатады?",
      options: [
        "VI ғасыр",
        "VII ғасыр", 
        "VIII ғасыр",
        "IX ғасыр"
      ],
      correct: "VIII ғасыр"
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "«Құтты білік» дастанының авторы кім?",
      options: [
        "Махмұт Қашқари",
        "Жүсіп Баласағұн",
        "Сайф Сарай",
        "Ахмет Ясауи"
      ],
      correct: "Жүсіп Баласағұн"
    },
    {
      id: 3,
      type: "short-answer",
      question: "Күлтегін ескерткішінің негізгі тақырыбын қысқаша сипаттаңыз.",
      placeholder: "Жауабыңызды осы жерге жазыңыз..."
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "«Диуани лұғат-ит-түрік» еңбегі қандай ғылыми бағытқа жатады?",
      options: [
        "Тарих",
        "Лексикография",
        "Поэтика",
        "Фольклортану"
      ],
      correct: "Лексикография"
    },
    {
      id: 5,
      type: "short-answer",
      question: "Білге қаған жазуының саяси мәнін түсіндіріңіз.",
      placeholder: "Жауабыңызды осы жерге жазыңыз..."
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "«Гүлстан бит-түрки» поэмасының авторы:",
      options: [
        "Жүсіп Баласағұн",
        "Сайф Сарай",
        "Рабғұзи",
        "Қотб"
      ],
      correct: "Сайф Сарай"
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (q.type === "multiple-choice" && answers[index] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.filter(q => q.type === "multiple-choice").length) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-cultural/20">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-cultural/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-cultural" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary">
                    Тест нәтижесі
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cultural mb-2">{percentage}%</div>
                    <p className="text-muted-foreground">
                      {score} дұрыс жауап {questions.filter(q => q.type === "multiple-choice").length} сұрақтан
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Дұрыс жауаптар:</span>
                      <span className="font-medium">{score}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Қысқа жауапты сұрақтар:</span>
                      <span className="font-medium">{questions.filter(q => q.type === "short-answer").length}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => {
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                    className="w-full bg-cultural text-cultural-foreground hover:bg-cultural/90"
                  >
                    Қайта тапсыру
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="academic-title text-4xl md:text-5xl mb-4">
              Тесттер
            </h1>
            <div className="w-24 h-1 bg-cultural mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Интерактивті тесттер мен бағалау жүйесі. 
              Білімді тексеру үшін көп таңдауды және қысқа жауапты сұрақтар.
            </p>
          </div>
        </div>
      </section>

      {/* Test Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Сұрақ {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% аяқталды
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cultural/10 rounded-full flex items-center justify-center">
                    <span className="text-cultural font-medium text-sm">{currentQuestion + 1}</span>
                  </div>
                  <CardDescription>
                    {currentQ.type === "multiple-choice" ? "Көп таңдауды сұрақ" : "Қысқа жауапты сұрақ"}
                  </CardDescription>
                </div>
                <CardTitle className="font-serif text-xl text-primary leading-relaxed">
                  {currentQ.question}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {currentQ.type === "multiple-choice" ? (
                  <RadioGroup
                    value={answers[currentQuestion] || ""}
                    onValueChange={handleAnswerChange}
                  >
                    {currentQ.options?.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Textarea
                    placeholder={currentQ.placeholder}
                    value={answers[currentQuestion] || ""}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    className="min-h-32"
                  />
                )}
                
                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                  >
                    Алдыңғы
                  </Button>
                  
                  {currentQuestion === questions.length - 1 ? (
                    <Button
                      onClick={handleSubmit}
                      className="bg-cultural text-cultural-foreground hover:bg-cultural/90"
                      disabled={!answers[currentQuestion]}
                    >
                      Тапсыру
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion]}
                    >
                      Келесі
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tests;