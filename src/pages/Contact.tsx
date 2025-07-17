import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  MessageCircle,
  Send,
  User
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Display success message (since no backend)
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Pastor Dan will get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: User,
      title: "Pastor",
      details: "Rev Dan Achila",
      description: "Senior Pastor & Spiritual Leader"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "0799861845 / 0785460432",
      description: "Call or WhatsApp anytime"
    },
    {
      icon: Facebook,
      title: "Facebook",
      details: "Pst Dan Achila",
      description: "Follow for updates and encouragement"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@fountainoflifekilgoris.org",
      description: "Send us an email message"
    }
  ];

  const serviceHours = [
    {
      day: "Sunday",
      time: "10:00 AM - 12:00 PM",
      service: "Main Worship Service"
    },
    {
      day: "Wednesday", 
      time: "6:30 PM - 8:00 PM",
      service: "Midweek Prayer Meeting"
    },
    {
      day: "Thursday",
      time: "6:00 PM - 8:00 PM",
      service: "Women's Fellowship"
    },
    {
      day: "Saturday",
      time: "6:00 AM - 8:00 AM",
      service: "Men's Fellowship"
    },
    {
      day: "Saturday",
      time: "4:00 PM - 6:00 PM", 
      service: "Youth Ministry"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-church-gold" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, need prayer, or want to know more about our church, 
            Pastor Dan and our team are here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contact Information</h2>
            <p className="text-lg text-muted-foreground">
              Reach out to us through any of these channels. We're always ready to connect!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{info.title}</h3>
                  <p className="font-medium mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Service Hours */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
              <Card className="shadow-medium border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0799861845"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share your message, prayer request, or questions..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Response Time:</strong> We typically respond within 24 hours. 
                      For urgent matters, please call Pastor Dan directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Hours & Location */}
            <div className="space-y-8">
              {/* Service Hours */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Service Hours</h2>
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Weekly Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {serviceHours.map((schedule, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <div>
                            <p className="font-medium text-primary">{schedule.service}</p>
                            <p className="text-sm text-muted-foreground">{schedule.day}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{schedule.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-church-light-blue rounded-lg">
                      <p className="text-sm text-center text-muted-foreground">
                        All times are in East Africa Time (EAT). Visitors are always welcome!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Location</h2>
                <Card className="shadow-medium border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Fountain of Life Worship Church</h3>
                        <p className="text-muted-foreground">
                          Kilgoris Town<br />
                          Narok County, Kenya<br />
                          P.O. Box 123-20700 Kilgoris
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-primary mb-2">Getting Here</h4>
                      <p className="text-sm text-muted-foreground">
                        We're easily accessible by public transport. 
                        Free parking is available for those driving. 
                        Look for the blue and gold church sign!
                      </p>
                    </div>

                    <Button variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Quick Contact</h2>
            <p className="text-lg text-muted-foreground">
              Need immediate assistance? Here are the fastest ways to reach Pastor Dan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-medium border-0 hover:shadow-strong transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Call/WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Speak directly with Pastor Dan</p>
                <div className="space-y-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="tel:+254799861845">0799861845</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="tel:+254785460432">0785460432</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-strong transition-shadow">
              <CardContent className="p-6 text-center">
                <Facebook className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Facebook Message</h3>
                <p className="text-muted-foreground mb-4">Send a private message on Facebook</p>
                <Button asChild className="w-full">
                  <a href="https://facebook.com/pstdanachila" target="_blank" rel="noopener noreferrer">
                    Message on Facebook
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 hover:shadow-strong transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Email</h3>
                <p className="text-muted-foreground mb-4">Send us an email message</p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:info@fountainoflifekilgoris.org">
                  Send Email
                </a>
              </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Here for You</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether you're seeking prayer, have questions about faith, or want to get involved in our church community, 
            don't hesitate to reach out. We believe every conversation matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-church-gold hover:bg-church-gold/90 text-primary">
              <a href="tel:+254799861845">Call Pastor Dan</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://facebook.com/pstdanachila" target="_blank" rel="noopener noreferrer">
                Visit Our Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;