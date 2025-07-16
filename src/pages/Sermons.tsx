import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Play, 
  Download,
  BookOpen,
  User,
  Volume2
} from "lucide-react";

const Sermons = () => {
  const sermons = [
    {
      id: 1,
      title: "Rivers of Living Water",
      preacher: "Rev Dan Achila",
      date: "December 8, 2024",
      duration: "45 min",
      scripture: "John 7:38",
      description: "Discovering the flow of God's spirit in our lives and how to become vessels of His life-giving water.",
      audioUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      series: "Life-Giving Church",
      featured: true
    },
    {
      id: 2,
      title: "Walking in Holiness",
      preacher: "Rev Dan Achila", 
      date: "December 1, 2024",
      duration: "38 min",
      scripture: "1 Peter 1:15-16",
      description: "Understanding what it means to live a holy life that pleases God and impacts our community.",
      audioUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      series: "Core Values",
      featured: false
    },
    {
      id: 3,
      title: "The Power of Corporate Prayer",
      preacher: "Rev Dan Achila",
      date: "November 24, 2024", 
      duration: "42 min",
      scripture: "Acts 4:31",
      description: "Exploring the importance of coming together in prayer and its impact on our spiritual growth.",
      audioUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      series: "Prayer Life",
      featured: false
    },
    {
      id: 4,
      title: "Equipped for Greater Works",
      preacher: "Rev Dan Achila",
      date: "November 17, 2024",
      duration: "41 min", 
      scripture: "Ephesians 4:11-12",
      description: "How God equips His saints with His Word to do greater works and impact the nations.",
      audioUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      series: "Church Mission",
      featured: true
    },
    {
      id: 5,
      title: "Truth and Worship",
      preacher: "Rev Dan Achila",
      date: "November 10, 2024",
      duration: "36 min",
      scripture: "John 4:23-24",
      description: "The relationship between living in God's truth and expressing authentic worship in our daily lives.",
      audioUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      series: "Core Values",
      featured: false
    },
    {
      id: 6,
      title: "Family Fellowship in Christ",
      preacher: "Rev Dan Achila",
      date: "November 3, 2024",
      duration: "39 min",
      scripture: "Acts 2:42-47",
      description: "Building meaningful relationships and supporting one another as the family of God.",
      audioUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      series: "Core Values",
      featured: false
    }
  ];

  const getSeriesColor = (series: string) => {
    const colors: { [key: string]: string } = {
      "Life-Giving Church": "bg-blue-500",
      "Core Values": "bg-purple-500",
      "Prayer Life": "bg-green-500", 
      "Church Mission": "bg-orange-500"
    };
    return colors[series] || "bg-gray-500";
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sermons & Messages</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be encouraged and equipped through the preaching of God's Word. 
            Access our collection of spirit-filled messages that will strengthen your faith and deepen your walk with Christ.
          </p>
        </div>
      </section>

      {/* Featured Sermons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Messages</h2>
            <p className="text-lg text-muted-foreground">
              Recent powerful messages that will inspire and transform your spiritual life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {sermons.filter(sermon => sermon.featured).map((sermon) => (
              <Card key={sermon.id} className="shadow-medium border-0 hover:shadow-strong transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getSeriesColor(sermon.series)} text-white`}>
                      {sermon.series}
                    </Badge>
                    <Badge className="bg-church-gold text-primary">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl text-primary mb-2">{sermon.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {sermon.preacher}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {sermon.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {sermon.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium text-primary">Scripture:</span>
                    </div>
                    <p className="text-muted-foreground italic">{sermon.scripture}</p>
                  </div>
                  
                  <p className="text-muted-foreground">{sermon.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Listen Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Sermons */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Recent Messages</h2>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of recent sermons and find the message that speaks to your heart.
            </p>
          </div>

          <div className="space-y-6">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="shadow-soft border-0 hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Sermon Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`${getSeriesColor(sermon.series)} text-white text-xs`}>
                          {sermon.series}
                        </Badge>
                        {sermon.featured && (
                          <Badge className="bg-church-gold text-primary text-xs">Featured</Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-2">{sermon.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {sermon.preacher}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {sermon.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {sermon.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {sermon.scripture}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{sermon.description}</p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
                      <Button size="sm" className="flex items-center justify-center">
                        <Play className="h-4 w-4 mr-2" />
                        Listen
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Listen Online</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our latest message right here. Click play to listen to the most recent sermon.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-medium border-0">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Latest Sermon"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Volume2 className="h-16 w-16 mx-auto mb-6 text-church-gold" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss a Message</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Stay connected with our sermon archive and get notified when new messages are available. 
            Growing in God's Word has never been easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-church-gold hover:bg-church-gold/90 text-primary">
              <a href="mailto:info@blessedchurch.org">Subscribe to Updates</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://facebook.com/pstdanachila" target="_blank" rel="noopener noreferrer">Follow on Facebook</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;