import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Music,
  BookOpen,
  Heart,
  Star
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      type: "Weekly Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for powerful worship, inspiring messages, and fellowship with the church family.",
      icon: Music,
      featured: true,
      recurring: true
    },
    {
      id: 2,
      title: "Midweek Prayer Meeting",
      type: "Prayer Service",
      date: "Every Wednesday", 
      time: "6:30 PM - 8:00 PM",
      location: "Prayer Hall",
      description: "Corporate prayer time for church members to seek God's face and intercede for our community.",
      icon: BookOpen,
      featured: false,
      recurring: true
    },
    {
      id: 3,
      title: "Annual Revival Conference",
      type: "Conference",
      date: "December 15-17, 2024",
      time: "6:00 PM daily",
      location: "Main Sanctuary",
      description: "Three days of powerful ministry, prophetic declarations, and spiritual breakthrough with guest speakers.",
      icon: Star,
      featured: true,
      recurring: false
    },
    {
      id: 4,
      title: "Youth Conference 2024",
      type: "Youth Event",
      date: "November 23-24, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Youth Center",
      description: "An exciting weekend for young people with dynamic worship, relevant teachings, and fun activities.",
      icon: Users,
      featured: true,
      recurring: false
    },
    {
      id: 5,
      title: "Women's Fellowship Meeting",
      type: "Fellowship",
      date: "Every Thursday",
      time: "6:00 PM - 8:00 PM", 
      location: "Fellowship Hall",
      description: "Women gathering for Bible study, prayer, and meaningful fellowship in Christ.",
      icon: Heart,
      featured: false,
      recurring: true
    },
    {
      id: 6,
      title: "Communion Service",
      type: "Special Service",
      date: "First Sunday of Every Month",
      time: "During morning service",
      location: "Main Sanctuary",
      description: "Sacred time of remembrance and communion with our Lord Jesus Christ.",
      icon: BookOpen,
      featured: false,
      recurring: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Weekly Service": "bg-blue-500",
      "Prayer Service": "bg-purple-500", 
      "Conference": "bg-red-500",
      "Youth Event": "bg-green-500",
      "Fellowship": "bg-pink-500",
      "Special Service": "bg-orange-500"
    };
    return colors[type] || "bg-gray-500";
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Church Events</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay connected with all the exciting things happening in our church community. 
            From weekly services to special conferences, there's always something meaningful to be part of.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Events</h2>
            <p className="text-lg text-muted-foreground">
              Don't miss these special upcoming events that will bless and transform your life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="shadow-medium border-0 hover:shadow-strong transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${getEventTypeColor(event.type)} rounded-full flex items-center justify-center`}>
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    {event.featured && (
                      <Badge className="bg-church-gold text-primary">Featured</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">Date:</span>
                      <span className="ml-1">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">Time:</span>
                      <span className="ml-1">{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">Location:</span>
                      <span className="ml-1">{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">All Events</h2>
            <p className="text-lg text-muted-foreground">
              Complete list of our regular services and special events throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-soft border-0 hover:shadow-medium transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${getEventTypeColor(event.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <event.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg text-primary leading-tight">{event.title}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-3 w-3 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {event.recurring && (
                    <Badge variant="secondary" className="text-xs">
                      Recurring Event
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us for an Event</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the presence of God and fellowship with believers. 
            All are welcome to join our church family for these life-changing events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-church-gold hover:bg-church-gold/90 text-primary">
              <Link to="/contact">Get Directions</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/online-service">Watch Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;