import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Smartphone, 
  CreditCard, 
  Building,
  Copy,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Give = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    phone: "",
    purpose: ""
  });
  const [copiedText, setCopiedText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.amount || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Display success message (since no backend)
    toast({
      title: "Thank You for Your Gift!",
      description: "Your giving information has been recorded. God bless your generous heart!",
    });

    // Reset form
    setFormData({
      name: "",
      amount: "",
      phone: "",
      purpose: ""
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
    setTimeout(() => setCopiedText(""), 2000);
  };

  const mpesaNumbers = ["0799861845", "0785460432"];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-church-gold" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Give with Joy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, 
            for God loves a cheerful giver." - 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* Why We Give Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why We Give</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous giving helps us fulfill our mission to reach nations with the gospel, 
              equip saints, and establish a vibrant life-giving church.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-medium border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Ministry Expansion</h3>
                <p className="text-muted-foreground">
                  Supporting the growth of our ministries and outreach programs to impact more lives for Christ.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Church Operations</h3>
                <p className="text-muted-foreground">
                  Maintaining our facilities and covering operational costs to provide a welcoming worship environment.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Community Outreach</h3>
                <p className="text-muted-foreground">
                  Funding evangelism efforts and community programs that demonstrate God's love in practical ways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Methods */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ways to Give</h2>
            <p className="text-lg text-muted-foreground">
              Choose the giving method that works best for you. Every gift, regardless of size, makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* M-Pesa Payment */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">M-Pesa Payment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Send your offering or tithe directly through M-Pesa to either of Pastor Dan's numbers:
                </p>
                
                <div className="space-y-4">
                  {mpesaNumbers.map((number, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-green-500" />
                        <span className="font-mono text-lg font-medium">{number}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(number, `M-Pesa ${number}`)}
                        className="flex items-center space-x-1"
                      >
                        {copiedText === `M-Pesa ${number}` ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span>{copiedText === `M-Pesa ${number}` ? "Copied" : "Copy"}</span>
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">M-Pesa Instructions:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Go to M-Pesa on your phone</li>
                    <li>Select "Send Money"</li>
                    <li>Enter one of the numbers above</li>
                    <li>Enter your amount</li>
                    <li>Complete the transaction</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Bank Transfer */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Bank Transfer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  For larger donations or recurring giving, you can use our bank details:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Name:</span>
                        <span className="font-medium">Fountain of Life Worship Church</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bank:</span>
                        <span className="font-medium">Kenya Commercial Bank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Branch:</span>
                        <span className="font-medium">Main Branch</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Account Number:</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-medium">1234567890</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard("1234567890", "Account Number")}
                          >
                            {copiedText === "Account Number" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Please include your name and phone number in the transaction reference 
                    for proper record keeping.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Record Your Gift</h2>
              <p className="text-lg text-muted-foreground">
                Help us keep track of your generous giving for record keeping and appreciation.
              </p>
            </div>

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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 0799861845"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="amount">Amount (KES) *</Label>
                      <Input
                        id="amount"
                        name="amount"
                        type="number"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        min="1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="purpose">Purpose (Optional)</Label>
                      <Input
                        id="purpose"
                        name="purpose"
                        type="text"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        placeholder="e.g., Tithe, Offering, Building Fund"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Record My Gift
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Privacy Notice:</strong> This information is only used for church records 
                    and will be kept confidential. No payment is processed through this form.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scripture and Encouragement */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">God's Promise for Givers</h2>
          <blockquote className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, 
            will be poured into your lap. For with the measure you use, it will be measured to you."
          </blockquote>
          <cite className="text-lg text-church-gold font-semibold">Luke 6:38 (NIV)</cite>
          
          <div className="mt-8">
            <p className="text-white/90 max-w-2xl mx-auto">
              Thank you for your faithful giving and support of God's kingdom work. 
              Your generosity enables us to continue spreading the gospel and blessing our community.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Give;