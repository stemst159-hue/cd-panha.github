import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Smartphone, Users, Lightbulb, Globe, Send } from "lucide-react";

const categories = [
  { name: "All", icon: Globe },
  { name: "Digital Literacy", icon: Smartphone },
  { name: "Youth Tips", icon: Users },
  { name: "General Knowledge", icon: BookOpen },
  { name: "Technology", icon: Lightbulb },
];

const contentItems = [
  {
    title: "Getting Started with Digital Security",
    description: "Learn the basics of protecting your online presence, from strong passwords to two-factor authentication.",
    category: "Digital Literacy",
    date: "2024-11-01",
    readTime: "5 min read",
  },
  {
    title: "Effective Communication Skills for Youth",
    description: "Master the art of clear communication, both online and offline, to build stronger relationships.",
    category: "Youth Tips",
    date: "2024-10-28",
    readTime: "7 min read",
  },
  {
    title: "Understanding Social Media Algorithms",
    description: "Discover how social media platforms work and how to use them effectively and safely.",
    category: "Technology",
    date: "2024-10-25",
    readTime: "6 min read",
  },
  {
    title: "The History of Angkor Wat",
    description: "Explore the fascinating history and cultural significance of Cambodia's most iconic temple.",
    category: "General Knowledge",
    date: "2024-10-20",
    readTime: "8 min read",
  },
  {
    title: "Building Leadership Skills",
    description: "Practical tips for developing leadership qualities and making a positive impact in your community.",
    category: "Youth Tips",
    date: "2024-10-15",
    readTime: "6 min read",
  },
  {
    title: "Introduction to Coding for Beginners",
    description: "Start your coding journey with basic programming concepts and simple projects.",
    category: "Technology",
    date: "2024-10-10",
    readTime: "10 min read",
  },
  {
    title: "Digital Etiquette and Online Behavior",
    description: "Learn how to conduct yourself professionally and respectfully in digital spaces.",
    category: "Digital Literacy",
    date: "2024-10-05",
    readTime: "5 min read",
  },
  {
    title: "Climate Change and Cambodia",
    description: "Understanding the impact of climate change on Cambodia and what we can do to help.",
    category: "General Knowledge",
    date: "2024-09-30",
    readTime: "9 min read",
  },
  {
    title: "Time Management for Students",
    description: "Effective strategies for balancing studies, activities, and personal time.",
    category: "Youth Tips",
    date: "2024-09-25",
    readTime: "7 min read",
  },
];

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = contentItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Knowledge Hub</h1>
            <p className="text-xl opacity-90">
              Explore articles on digital literacy, youth empowerment, and general knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center space-x-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredContent.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent.map((item, index) => (
                    <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{item.category}</Badge>
                          <span className="text-xs text-muted-foreground">{item.readTime}</span>
                        </div>
                        <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">{item.description}</p>
                      </CardContent>
                      <div className="px-6 pb-6">
                        <Button variant="outline" className="w-full">
                          Read More
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="flex justify-center mt-12 space-x-2">
                  <Button variant="outline">Previous</Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-large gradient-primary text-white">
            <CardContent className="py-12 text-center space-y-6">
              <Send className="h-16 w-16 mx-auto opacity-90" />
              <div>
                <h2 className="text-3xl font-bold mb-4">Get Daily Knowledge Updates</h2>
                <p className="text-xl opacity-90">
                  Join my Telegram channel for regular updates, tips, and exclusive content
                </p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <a href="https://t.me/Chandithpanha" target="_blank" rel="noopener noreferrer">
                  Join @Chandithpanha
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Content;
