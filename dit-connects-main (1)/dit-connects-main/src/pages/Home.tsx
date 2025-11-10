import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, BookOpen, Users, Lightbulb, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import knowledgeBg from "@/assets/knowledge-bg.jpg";

const featuredContent = [
  {
    title: "Digital Literacy Basics",
    description: "Essential skills for navigating the digital world safely and effectively.",
    icon: BookOpen,
    category: "Education",
  },
  {
    title: "Youth Empowerment",
    description: "Tips and strategies for young people to develop leadership and confidence.",
    icon: Users,
    category: "Community",
  },
  {
    title: "General Knowledge",
    description: "Interesting facts and insights to expand your understanding of the world.",
    icon: Lightbulb,
    category: "Knowledge",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Chandit Panha
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                  ចាន់ ឌិតបញ្ញា
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Empowering Youth Through Knowledge and Digital Innovation
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="gradient-primary text-white">
                  <a href="https://t.me/Chandithpanha" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-5 w-5" />
                    Join on Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Stung Treng, Cambodia</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>Born March 2, 2009</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -inset-4 gradient-hero opacity-30 blur-3xl rounded-full" />
                <img
                  src={profilePhoto}
                  alt="Chandit Panha"
                  className="relative rounded-2xl shadow-large w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate digital creator and youth volunteer from Stung Treng Province, Cambodia. 
              My mission is to share general knowledge, promote digital literacy, and empower young people 
              to reach their full potential. Through content creation and community engagement, I strive to 
              make a positive impact in the lives of others.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Read Full Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${knowledgeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
            <p className="text-lg text-muted-foreground">
              Explore knowledge areas I'm passionate about
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((item, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-2">
                    {item.category}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="default">
              <Link to="/content">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Knowledge Hub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Community</h2>
            <p className="text-xl opacity-90">
              Connect with me on Telegram for daily knowledge shares, digital literacy tips, 
              and youth empowerment content.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="https://t.me/Chandithpanha" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Join @Chandithpanha
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
