import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Music, 
  BookOpen, 
  Baby, 
  Hand,
  UserCheck,
  Coffee,
  Mic,
  Calendar
} from "lucide-react";

const Ministries = () => {
  const ministries = [
    {
      icon: Users,
      name: "Youth Ministry",
      description: "Empowering young people to discover their purpose in Christ through discipleship, fellowship, and service. Building the next generation of leaders.",
      schedule: "Saturdays 4:00 PM",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      name: "Women's Fellowship",
      description: "A supportive community where women grow in faith, build meaningful relationships, and encourage one another in their walk with God.",
      schedule: "Thursdays 6:00 PM",
      color: "bg-pink-500"
    },
    {
      icon: UserCheck,
      name: "Men's Fellowship",
      description: "Men gathering to study God's Word, support each other, and grow as godly fathers, husbands, and leaders in their communities.",
      schedule: "Saturdays 6:00 AM",
      color: "bg-green-500"
    },
    {
      icon: Music,
      name: "Worship Team",
      description: "Leading the congregation in heartfelt worship through music, creating an atmosphere where God's presence is felt and honored.",
      schedule: "Rehearsals: Thursdays 7:00 PM",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      name: "Sunday School",
      description: "Interactive Bible study for all ages, helping believers grow in knowledge and understanding of God's Word through engaging lessons.",
      schedule: "Sundays 9:00 AM",
      color: "bg-orange-500"
    },
    {
      icon: Hand,
      name: "Intercessory Ministry",
      description: "Dedicated prayer warriors standing in the gap for our church, community, and nation through powerful intercessory prayer.",
      schedule: "Daily 6:00 AM",
      color: "bg-indigo-500"
    },
    {
      icon: Baby,
      name: "Children's Ministry",
      description: "Nurturing young hearts with age-appropriate lessons, activities, and love, helping children develop a strong foundation in Christ.",
      schedule: "Sundays during service",
      color: "bg-yellow-500"
    },
    {
      icon: Coffee,
      name: "Hospitality Team",
      description: "Creating a welcoming environment for all visitors and members, ensuring everyone feels loved and valued in our church family.",
      schedule: "Sundays and Events",
      color: "bg-teal-500"
    },
    {
      icon: Mic,
      name: "Media Ministry",
      description: "Managing sound, lighting, and recording to enhance worship experiences and share God's message through various media platforms.",
      schedule: "Sundays and Events",
      color: "bg-red-500"
    },
    {
      icon: Calendar,
      name: "Evangelism Team",
      description: "Reaching out to the community with the gospel message, organizing outreach programs, and training members in effective evangelism.",
      schedule: "Monthly outreach events",
      color: "bg-emerald-500"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover ways to serve, grow, and connect in our vibrant church community. 
            Every ministry is designed to help you develop your gifts and make a difference.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-shadow group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${ministry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <ministry.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{ministry.name}</CardTitle>
                  <p className="text-sm text-church-gold font-medium">{ministry.schedule}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {ministry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join a Ministry Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to Get Involved?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We believe everyone has gifts and talents that can be used to serve God and bless others. 
            Join a ministry today and discover the joy of serving together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Pastor Dan</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/online-service">Attend a Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ministry Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Our ministries are led by dedicated servants who are passionate about discipleship and spiritual growth.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-medium border-0">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary">Rev Dan Achila</h3>
              <p className="text-church-gold font-medium mb-4">Senior Pastor & Ministry Overseer</p>
              <p className="text-muted-foreground mb-6">
                Pastor Dan provides spiritual oversight and guidance to all ministries, 
                ensuring they align with our church's vision and mission of establishing 
                a vibrant life-giving church.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-muted-foreground">
                <span>📞 0799861845 / 0785460432</span>
                <span className="hidden sm:inline">•</span>
                <span>📘 Pst Dan Achila</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Ministries;