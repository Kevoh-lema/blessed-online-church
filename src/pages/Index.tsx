import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Flame } from "lucide-react";
import heroImage from "@/assets/church-hero.jpg";

const Index = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Holiness and Peace",
      description: "Living lives that reflect God's holiness and promoting peace in our community"
    },
    {
      icon: BookOpen,
      title: "Truth and Worship",
      description: "Grounded in God's truth and expressing our love through heartfelt worship"
    },
    {
      icon: Users,
      title: "Family Fellowship",
      description: "Building strong relationships and supporting one another in prayer"
    },
    {
      icon: Flame,
      title: "Excellence and Integrity",
      description: "Committed to excellence in all we do with unwavering integrity"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-church-gold">Blessed Church</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              A vibrant life-giving church where rivers of living water flow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-church-gold hover:bg-church-gold/90 text-primary">
                <Link to="/online-service">Join Live Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Verse */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-4">
              "He that believeth on me, as the scripture hath said, 
              out of his belly shall flow rivers of living water."
            </blockquote>
            <cite className="text-lg text-muted-foreground font-semibold">
              John 7:38 (KJV)
            </cite>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="shadow-medium border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To establish a vibrant life-giving church as described in John 7:38, 
                  where believers experience the flowing rivers of living water.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="shadow-medium border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Reach nations with the gospel</li>
                  <li>• Equip saints with the Word of God</li>
                  <li>• Foster prayer, praise, and worship</li>
                  <li>• Develop and release potential for greater work</li>
                </ul>
              </CardContent>
            </Card>

            {/* Purpose */}
            <Card className="shadow-medium border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Purpose</h3>
                <p className="text-muted-foreground">
                  To manifest and impact the life of Jesus Christ on the nations, 
                  bringing transformation and hope to every community we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do as a church family and define who we are in Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="shadow-soft border-0 hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3 text-primary">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              Additional values: Membership, Ministry, and Commitment to Teamwork
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Church Family</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the love of Christ, grow in faith, and be part of something greater. 
            We welcome you with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-church-gold hover:bg-church-gold/90 text-primary">
              <Link to="/ministries">Explore Ministries</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
