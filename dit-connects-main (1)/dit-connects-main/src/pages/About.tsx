import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, BookOpen, Users, Heart, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const milestones = [
  {
    year: "2009",
    title: "Born in Cambodia",
    description: "Started life journey in Stung Treng Province, Cambodia",
  },
  {
    year: "2020",
    title: "Digital Discovery",
    description: "Discovered the power of digital platforms and started learning",
  },
  {
    year: "2022",
    title: "Content Creation",
    description: "Began sharing knowledge and empowering youth through digital content",
  },
  {
    year: "2023",
    title: "Community Building",
    description: "Established active presence on Telegram, growing a community of learners",
  },
  {
    year: "2024",
    title: "Continuing the Mission",
    description: "Expanding reach and impact through digital literacy and youth empowerment",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "Believing that knowledge is power when shared freely",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building strong, supportive communities for growth",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Empowering youth to reach their full potential",
  },
  {
    icon: Target,
    title: "Digital Literacy",
    description: "Promoting safe and effective use of digital tools",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>
            <p className="text-xl opacity-90">
              Digital Creator • Youth Volunteer • Knowledge Sharer
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={profilePhoto}
                alt="Chandit Panha"
                className="relative rounded-2xl shadow-large w-full"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Chandit Panha</h2>
                <p className="text-xl text-muted-foreground mb-2">ចាន់ ឌិតបញ្ញា</p>
                <p className="text-lg text-muted-foreground">Also known as Dit Panha</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Stung Treng Province, Cambodia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Born</p>
                    <p className="text-muted-foreground">March 2, 2009</p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                I am a young Cambodian digital creator and youth volunteer with a passion for 
                sharing general knowledge and promoting digital literacy. Based in Stung Treng 
                Province, I dedicate my time to empowering youth through content creation and 
                community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Mission</h2>
            <Card className="shadow-large">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-center">
                  My mission is to bridge the digital divide in Cambodia by making knowledge 
                  accessible to everyone, especially young people. I believe that digital literacy 
                  and general knowledge are fundamental rights that can transform lives and communities. 
                  Through my work as a content creator and volunteer, I aim to inspire, educate, and 
                  empower the next generation of Cambodian youth to become confident digital citizens 
                  and lifelong learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-medium hover:shadow-large transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary mt-2" />
                    )}
                  </div>
                  <Card className="flex-1 shadow-medium">
                    <CardHeader>
                      <div className="text-sm font-semibold text-primary mb-1">
                        {milestone.year}
                      </div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-6 w-6 text-primary" />
                    General Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sharing interesting facts and insights to expand understanding of the world
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-6 w-6 text-primary" />
                    Digital Literacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Teaching safe and effective use of digital tools and platforms
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-6 w-6 text-primary" />
                    Youth Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Inspiring young people to develop confidence and leadership skills
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
