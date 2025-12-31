import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, BarChart2, Globe, Smartphone, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-slate-900">
                PropelMeta<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Contact Sales
              </Link>
              <Link href="/demo">
                <Button className="font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Book a Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-slate-900 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-4" />
                    <Link href="/contact" className="text-lg font-medium text-slate-600">
                      Contact Sales
                    </Link>
                    <Link href="/demo">
                      <Button className="w-full">Book a Demo</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold font-display">
                  PropelMeta<span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Empowering businesses with AI-driven websites, marketing automation, and branded apps. 
                Grow faster with the all-in-one platform built for success.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Products</h4>
              <ul className="space-y-4">
                <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors">Website Builder</Link></li>
                <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors">Marketing Automation</Link></li>
                <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors">Branded Apps</Link></li>
                <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors">Online Ordering</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Connect</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2024 PropelMeta Tech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
