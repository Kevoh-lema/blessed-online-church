import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Ministries", href: "/ministries" },
    { name: "Events", href: "/events" },
    { name: "Sermons", href: "/sermons" },
    { name: "Give", href: "/give" },
    { name: "Online Service", href: "/online-service" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FL</span>
              </div>
              <span className="font-bold text-xl text-primary">Fountain of Life</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Church Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-church-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">FL</span>
                </div>
                <span className="font-bold text-xl">Fountain of Life</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Fountain of Life Worship Church Kilgoris - A vibrant life-giving church manifesting and impacting the life of Jesus Christ on the nations.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium">Pastor: Rev Dan Achila</p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0799861845 / 0785460432</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="h-4 w-4" />
                  <span>Pst Dan Achila</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {navigation.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="hover:text-church-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
              <p>&copy; {new Date().getFullYear()} Fountain of Life Worship Church Kilgoris. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Built with love for God's kingdom</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;