import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary text-white"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect on Telegram</CardTitle>
                  <CardDescription>
                    The best way to reach me is through Telegram
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full gradient-primary text-white" size="lg">
                    <a href="https://t.me/Chandithpanha" target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-5 w-5" />
                      @Chandithpanha
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Stung Treng Province, Cambodia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Born</p>
                      <p className="text-muted-foreground">March 2, 2009</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Send className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Telegram</p>
                      <a 
                        href="https://t.me/Chandithpanha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @Chandithpanha
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium bg-muted/50">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm always excited to connect with fellow digital enthusiasts, youth advocates, 
                    and anyone interested in learning and growing together. Whether you have a 
                    question, collaboration idea, or just want to say hello, feel free to reach out!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">How can I collaborate with you?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I'm always open to collaboration opportunities! Reach out via Telegram or the 
                    contact form above to discuss your ideas.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer mentorship?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! I'm passionate about helping young people develop digital literacy and 
                    leadership skills. Connect with me to learn more about mentorship opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">How often do you post content?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I share content regularly on my Telegram channel, typically several times a week. 
                    Join @Chandithpanha to stay updated!
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

export default Contact;
