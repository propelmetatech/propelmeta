import { Link, useLocation } from 'wouter';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  BarChart2,
  Globe,
  Smartphone,
  ShoppingBag,
  MessageSquare,
  ShoppingCart,
  Zap,
  ArrowRight,
  Megaphone,
  PenTool,
  Code2,
  Search,
  Bot,
  Headphones,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assests/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];
  const services = [
    {
      name: 'Social Media Management',
      href: '/services/social-media-management',
      icon: <Megaphone className="h-4 w-4" />,
      description: 'Build trust, consistency, and engagement',
    },
    {
      name: 'Content Creation',
      href: '/services/content-creation',
      icon: <PenTool className="h-4 w-4" />,
      description: 'Scroll-stopping visuals and videos',
    },
    {
      name: 'Website & App Development',
      href: '/services/web-app-development',
      icon: <Code2 className="h-4 w-4" />,
      description: 'High-performance sites and apps',
    },
    {
      name: 'SEO & Paid Advertising',
      href: '/services/seo-paid-advertising',
      icon: <Search className="h-4 w-4" />,
      description: 'Performance-driven growth',
    },
    {
      name: 'Automation & AI',
      href: '/services/automation-ai',
      icon: <Bot className="h-4 w-4" />,
      description: 'Smarter systems that boost ROI',
    },
    {
      name: 'Online & Client Support',
      href: '/services/online-support',
      icon: <Headphones className="h-4 w-4" />,
      description: 'Reliable support for daily operations',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <img
                src={logo}
                alt="PropelMeta"
                className="h-16 w-auto"
                loading="lazy"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-96 p-4 mt-2 bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 rounded-2xl"
                  sideOffset={8}
                >
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">
                      Our Services
                    </h3>
                    <p className="text-xs text-slate-500">
                      Choose the perfect solution for your business
                    </p>
                  </div>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <DropdownMenuItem
                        key={service.name}
                        asChild
                        className="p-0"
                      >
                        <Link
                          href={service.href}
                          className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 w-full group border border-transparent hover:border-blue-100/50"
                        >
                          <div className="flex-shrink-0 mt-0.5 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                            {service.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-1 leading-relaxed group-hover:text-slate-600 transition-colors">
                              {service.description}
                            </div>
                          </div>
                          <div className="flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="h-4 w-4 text-blue-500" />
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 text-xs text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      <span>Need help choosing?</span>
                      <span className="font-medium">Contact our experts →</span>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Other Nav Links */}
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
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
                    {navLinks.slice(0, 2).map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-slate-900 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}

                    <div className="h-px bg-border" />

                    {/* Services Section */}
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">
                        Services
                      </h3>
                      <div className="space-y-3 ml-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-3 text-slate-600 hover:text-primary transition-colors"
                          >
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {service.icon}
                            </div>
                            <span className="text-sm font-medium">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Other Nav Links */}
                    {navLinks.slice(2).map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-slate-900 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-4" />
                    <Link
                      href="/contact"
                      className="text-lg font-medium text-slate-600"
                    >
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

      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-slate-900 text-white py-16 lg:py-18 xl:py-20">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-20 xl:gap-24">
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
                Empowering businesses with AI-driven websites, marketing
                automation, and branded apps. Grow faster with the all-in-one
                platform built for success.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 lg:mt-18 xl:mt-20 pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2024 PropelMeta Tech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
