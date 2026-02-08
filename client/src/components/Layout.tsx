import { Link, useLocation } from 'wouter';
import {
  Menu,
  ChevronRight,
  ChevronDown,
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
import logo from '@/assests/logo.jpeg';
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
    href: string,
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
    { name: 'About', href: '/about-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];
  const services = [
    {
      name: 'Website Design, Development & SEO',
      href: '/services/web-app-development',
      icon: <Code2 className="h-4 w-4" />,
      description: 'High-performance websites built to rank and convert.',
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
      description: 'Build trust, consistency, and engagement across platforms.',
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

  const currentYear = new Date().getFullYear();

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
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
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
                                      subService.href,
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

      <footer className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-900 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-[-8%] h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="rounded-3xl bg-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                  <img
                    src={logo}
                    alt="PropelMeta Tech"
                    className="h-12 w-auto sm:h-14"
                    loading="lazy"
                  />
                </div>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-600">
                  Empowering businesses with AI-driven websites, marketing
                  automation, and branded apps. Grow faster with focused
                  strategy, creative execution, and measurable outcomes.
                </p>

                <div className="mt-6">
                  <Link href="/demo">
                    <Button className="font-semibold shadow-lg shadow-primary/30">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-1 lg:pl-4">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-1 lg:pl-4">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-1 lg:pl-4">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Connect
                </h4>
                <ul className="flex flex-wrap gap-3">
                  <li>
                    <a
                      href="https://www.facebook.com/share/1HJAAhoL3y/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:ring-slate-900"
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
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:ring-slate-900"
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
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:ring-slate-900"
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
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:ring-slate-900"
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
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:ring-slate-900"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center">
              <p>&copy; {currentYear} PropelMeta Tech. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link
                  href="/terms-and-conditions"
                  className="transition-colors hover:text-slate-900"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
