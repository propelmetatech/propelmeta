import { Link, useLocation } from 'wouter';
import {
  Menu,
  ChevronRight,
  ChevronDown,
  BarChart2,
  ArrowRight,
  Megaphone,
  Code2,
  Search,
  Headphones,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assests/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToHash = (hash: string) => {
    const id = hash.replace('#', '');
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleSubServiceClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const [path, hash] = href.split('#');
    if (!hash) return;
    if (location === path) {
      event.preventDefault();
      const newHash = `#${hash}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', `${path}${newHash}`);
      }
      scrollToHash(newHash);
    }
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }
      scrollToHash(hash);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [location]);

  useEffect(() => {
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Book a Calendar', href: '/book-calendar' },
  ];
  const services = [
    {
      name: 'Website Design, Development & SEO',
      href: '/services/web-app-development',
      icon: <Code2 className="h-4 w-4" />,
      description:
        'High-performance websites built to rank and convert.',
      subServices: [
        {
          title: 'Website Design & Development',
          href: '/services/web-app-development#website-design-development',
        },
        {
          title: 'SEO & Website Optimization',
          href: '/services/web-app-development#seo-website-optimization',
        },
        {
          title: 'How Our Website & SEO Service Works',
          href: '/services/web-app-development#how-our-website-seo-works',
        },
        {
          title: 'Frequently Asked Questions',
          href: '/services/web-app-development#faqs',
        },
      ],
    },
    {
      name: 'Social Media Management',
      href: '/services/social-media-management',
      icon: <Megaphone className="h-4 w-4" />,
      description:
        'Build trust, consistency, and engagement across platforms.',
      subServices: [
        {
          title: 'Social Media Management Services',
          href: '/services/social-media-management#social-media-management-services',
        },
        {
          title: 'Content Creation Services',
          href: '/services/social-media-management#content-creation-services',
        },
        {
          title: 'Brand Management Services',
          href: '/services/social-media-management#brand-management-services',
        },
        {
          title: 'How Our Service Works',
          href: '/services/social-media-management#how-our-service-works',
        },
        {
          title: 'Frequently Asked Questions',
          href: '/services/social-media-management#faqs',
        },
      ],
    },
    {
      name: 'Paid Ads, Marketing & AI Automation',
      href: '/services/seo-paid-advertising',
      icon: <Search className="h-4 w-4" />,
      description: 'Performance-driven ads and automation that scale.',
      subServices: [
        {
          title: 'Paid Advertising Services',
          href: '/services/seo-paid-advertising#paid-advertising-services',
        },
        {
          title: 'Marketing Automation Services',
          href: '/services/seo-paid-advertising#marketing-automation-services',
        },
        {
          title: 'AI Automation Services',
          href: '/services/seo-paid-advertising#ai-automation-services',
        },
        {
          title: 'How Our Ads & Automation Works',
          href: '/services/seo-paid-advertising#how-our-ads-automation-works',
        },
        {
          title: 'Frequently Asked Questions',
          href: '/services/seo-paid-advertising#faqs',
        },
      ],
    },
    {
      name: 'Online Support & Client Support',
      href: '/services/online-support',
      icon: <Headphones className="h-4 w-4" />,
      description: 'Reliable online and client support for operations.',
      subServices: [
        {
          title: 'Online Support Services',
          href: '/services/online-support#online-support-services',
        },
        {
          title: 'Client Support Services',
          href: '/services/online-support#client-support-services',
        },
        {
          title: 'How Our Support Services Work',
          href: '/services/online-support#how-our-support-works',
        },
        {
          title: 'Frequently Asked Questions',
          href: '/services/online-support#faqs',
        },
      ],
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
              <DropdownMenu
                open={servicesOpen}
                onOpenChange={setServicesOpen}
              >
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-[calc(100vw-6rem)] max-w-[1100px] p-4 md:p-5 mt-3 bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 rounded-2xl"
                  sideOffset={12}
                >
                  <div className="px-1 pb-3">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Services
                    </h3>
                    <p className="text-xs text-slate-500">
                      Hover a service to explore sub-services
                    </p>
                  </div>
                  <div className="grid gap-1.5 px-1 pb-2 md:grid-cols-2">
                    {services.map((service) => (
                      <DropdownMenuSub key={service.name}>
                        <DropdownMenuSubTrigger className="cursor-pointer rounded-xl px-3 py-3 hover:bg-slate-50 data-[state=open]:bg-slate-50">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5 p-2.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                              {service.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-slate-900">
                                {service.name}
                              </div>
                              <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent
                          sideOffset={16}
                          className="w-[360px] p-4 bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 rounded-2xl"
                        >
                          <div className="mb-3">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              {service.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                              {service.description}
                            </p>
                          </div>
                          <div className="space-y-2">
                            {service.subServices.map((subService) => (
                              <DropdownMenuItem
                                key={subService.title}
                                asChild
                                className="p-0"
                              >
                                <Link
                                  href={subService.href}
                                  onClick={(event) =>
                                    handleSubServiceClick(
                                      event,
                                      subService.href
                                    )
                                  }
                                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                                >
                                  <span className="font-medium">
                                    {subService.title}
                                  </span>
                                  <ChevronRight className="h-4 w-4 text-slate-400" />
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-slate-100">
                            <Link
                              href={service.href}
                              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              View {service.name}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ))}
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
              <ul className="flex flex-wrap gap-3">
                <li>
                  <a
                    href="https://www.facebook.com/share/1HJAAhoL3y/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/propelmeta_tech?igsh=eGd0ZXFkb2syenBx"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.com/@propelmeta_tech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Threads"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 transition-colors hover:bg-primary hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@propelmetatech?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Music2 className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/propelmeta-tech/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
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

