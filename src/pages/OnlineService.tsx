import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  Video,
  MessageCircle,
  Heart,
  BookOpen,
  Music,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const OnlineService = () => {
  const serviceSchedule = [
    {
      day: "Sunday",
      time: "10:00 AM - 12:00 PM",
      service: "Main Worship Service",
      description: "Join us for powerful worship, inspiring messages, and fellowship"
    },
    {
      day: "Wednesday", 
      time: "6:30 PM - 8:00 PM",
      service: "Midweek Prayer",
      description: "Corporate prayer and Bible study for spiritual growth"
    },
    {
      day: "Friday",
      time: "7:00 PM - 9:00 PM", 
      service: "Youth Service",
      description: "Dynamic service designed for young people"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "HD Live Streaming",
      description: "Crystal clear video and audio quality for the best online worship experience"
    },
    {
      icon: MessageCircle,
      title: "Live Chat", 
      description: "Interact with other viewers and share prayer requests during the service"
    },
    {
      icon: Heart,
      title: "Online Prayer",
      description: "Submit prayer requests and receive prayer from our ministry team"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share the service with friends and family on social media platforms"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Video className="h-16 w-16 mx-auto mb-6 text-church-gold" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Us Online</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Experience the presence of God from wherever you are. Our live streaming services bring 
            the church to you with the same spirit-filled worship and powerful messages.
          </p>
          <div className="flex items-center justify-center space-x-2 text-church-gold">
            <div className="w-3 h-3 bg-church-gold rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">LIVE NOW</span>
          </div>
        </div>
      </section>

      {/* Live Stream Player */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto shadow-strong border-0">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge className="bg-red-500 text-white animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  LIVE
                </Badge>
                <Badge variant="outline">Sunday Worship Service</Badge>
              </div>
              <CardTitle className="text-2xl text-primary">Rivers of Living Water</CardTitle>
              <p className="text-muted-foreground">Pastor Dan Achila • December 15, 2024</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Blessed Church Live Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-b-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Service Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/give">Give Online</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Prayer Request</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-4 w-4 mr-2" />
              Share Service
            </Button>
          </div>
        </div>
      </section>

      {/* Service Schedule */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Service Schedule</h2>
            <p className="text-lg text-muted-foreground">
              Join us online for all our regular services. Set reminders so you never miss a life-changing moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceSchedule.map((schedule, index) => (
              <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{schedule.service}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{schedule.day}</span>
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{schedule.time}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{schedule.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              All times are in East Africa Time (EAT). Services are streamed live on our YouTube channel.
            </p>
            <Button asChild variant="outline">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                Subscribe to Our Channel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Online Experience Features</h2>
            <p className="text-lg text-muted-foreground">
              Our online services offer the same rich experience as being physically present in church.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft border-0 hover:shadow-medium transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Elements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What to Expect</h2>
            <p className="text-lg text-muted-foreground">
              Every service is carefully designed to create an atmosphere for encounter with God.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium border-0">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Worship & Praise</h3>
                <p className="text-muted-foreground">
                  Spirit-led worship that ushers in God's presence and prepares hearts for His Word.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Biblical Teaching</h3>
                <p className="text-muted-foreground">
                  Practical, life-changing messages rooted in Scripture that equip you for daily living.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Prayer & Ministry</h3>
                <p className="text-muted-foreground">
                  Opportunities for personal prayer, healing ministry, and spiritual breakthrough.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connection Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Stay Connected</h2>
            <p className="text-lg text-muted-foreground mb-8">
              While joining us online is wonderful, we'd love to connect with you personally. 
              Here are ways to get more involved with our church family.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-primary">Join a Ministry</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover your gifts and get involved in one of our many ministries.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/ministries">Explore Ministries</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardContent className="p-6">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-primary">Contact Pastor Dan</h3>
                  <p className="text-muted-foreground mb-4">
                    Reach out for prayer, counseling, or to learn more about our church.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience God's Presence Online</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether you're unable to attend in person or you're exploring faith for the first time, 
            our online services provide a meaningful way to connect with God and our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-church-gold hover:bg-church-gold/90 text-primary">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                Watch Live Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/events">See Service Times</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineService;