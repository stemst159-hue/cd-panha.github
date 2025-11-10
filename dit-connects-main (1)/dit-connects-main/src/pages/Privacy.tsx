import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            
            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  This privacy policy outlines how Chandit Panha ("I", "me") collects, uses, 
                  and protects your personal information when you visit this website.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Information Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  When you use the contact form on this website, I collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>The message content you provide</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>How I Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The information you provide is used solely to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries</li>
                  <li>Provide the services or information you request</li>
                  <li>Improve the website experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I take the security of your personal information seriously. Your data is:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stored securely</li>
                  <li>Never shared with third parties without your consent</li>
                  <li>Only retained for as long as necessary</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  This website uses minimal cookies only for essential functionality, such as 
                  remembering your theme preference (light or dark mode). No tracking cookies 
                  are used.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  This website contains links to external platforms like Telegram. I am not 
                  responsible for the privacy practices of these third-party services. Please 
                  review their privacy policies separately.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-large mb-6">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this privacy policy or your personal data, 
                  please contact me via Telegram at{" "}
                  <a 
                    href="https://t.me/Chandithpanha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @Chandithpanha
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-large">
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I may update this privacy policy from time to time. Any changes will be posted 
                  on this page with an updated revision date.
                </p>
                <p className="text-sm">
                  Last updated: November 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
