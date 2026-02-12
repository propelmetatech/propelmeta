import { Link, useLocation } from 'wouter';
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Megaphone,
  Code2,
  Search,
  Headphones,
  Facebook,
  Instagram,
  Linkedin,
  AtSign,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assests/logo.jpeg';
import socialMediaImage from '@/assests/Social Media Management.png';
import websiteDesignImage from '@/assests/Website Design & Development Services.png';
import paidAdsImage from '@/assests/Paid Advertising, Marketing Automation & AI Automation.png';
import supportImage from '@/assests/Online Support & Client Support Services.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

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
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];
  const services = [
    {
      name: 'Website Design, Development & SEO',
      href: '/services/web-app-development',
      icon: <Code2 className="h-4 w-4" />,
      iconBg: 'from-blue-500 to-indigo-600',
      description: 'High-performance websites built to rank and convert.',
      image: websiteDesignImage,
      imageAlt: 'Website design and development service preview',
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
      iconBg: 'from-purple-500 to-indigo-600',
      description: 'Build trust, consistency, and engagement across platforms.',
      image: socialMediaImage,
      imageAlt: 'Social media management service preview',
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
      iconBg: 'from-amber-500 to-orange-600',
      description: 'Performance-driven ads and automation that scale.',
      image: paidAdsImage,
      imageAlt: 'Paid advertising and automation service preview',
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
      iconBg: 'from-emerald-500 to-teal-600',
      description: 'Reliable online and client support for operations.',
      image: supportImage,
      imageAlt: 'Online and client support service preview',
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
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px]">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <img
                src={logo}
                alt="PropelMeta"
                className="h-auto w-[148px] object-contain sm:w-[182px] md:w-[200px]"
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
                onOpenChange={(open) => {
                  setServicesOpen(open);
                  if (open) setActiveServiceIndex(0);
                }}
              >
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="relative mt-4 w-[min(97vw,1560px)] overflow-hidden rounded-[24px] border border-slate-200/90 bg-white/95 p-4 md:p-5 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                  sideOffset={14}
                >
                  <div className="pointer-events-none absolute -top-24 right-[-8%] h-52 w-52 rounded-full bg-indigo-200/35 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 left-[-6%] h-52 w-52 rounded-full bg-cyan-200/35 blur-3xl" />

                  <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(380px,1fr)] lg:items-start">
                    <div>
                      <div className="px-1 pb-3.5">
                        <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 font-semibold uppercase tracking-[0.14em] text-indigo-600">
                          <Sparkles className="h-3 w-3" />
                          Explore Services
                        </p>
                        <h3 className="font-semibold text-slate-900">
                          Choose a service
                        </h3>
                        <p className="mt-1.5 text-slate-600">
                          Hover a card to preview the service and jump directly
                          to related sub-services.
                        </p>
                      </div>
                      <div className="grid items-start gap-3 px-1 sm:grid-cols-2">
                        {services.map((service, index) => (
                          <div
                            key={service.name}
                            onMouseEnter={() => setActiveServiceIndex(index)}
                            onFocusCapture={() => setActiveServiceIndex(index)}
                            className={`group/service relative self-start overflow-hidden rounded-xl border bg-white p-3.5 transition-all duration-150 ease-out ${
                              activeServiceIndex === index
                                ? 'border-primary/45 bg-primary/[0.04] ring-1 ring-primary/20 shadow-[0_12px_30px_-18px_rgba(59,130,246,0.8)] -translate-y-0.5'
                                : 'border-slate-200 hover:border-primary/35 hover:bg-slate-50 hover:shadow-[0_12px_30px_-22px_rgba(59,130,246,0.75)] hover:-translate-y-0.5'
                            }`}
                          >
                            <Link
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="block"
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white shadow-sm bg-gradient-to-br ${service.iconBg}`}
                                >
                                  {service.icon}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold leading-tight text-slate-900">
                                    {service.name}
                                  </div>
                                  <div className="mt-1 text-xs leading-relaxed text-slate-600">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2.5 flex items-center justify-end">
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                                  Explore
                                  <ArrowRight className="h-4 w-4 transition-transform duration-150 ease-out group-hover/service:translate-x-0.5" />
                                </span>
                              </div>
                            </Link>

                            <div className="pointer-events-none mt-0.5 grid max-h-0 gap-1.5 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover/service:pointer-events-auto group-hover/service:mt-3 group-hover/service:max-h-56 group-hover/service:opacity-100 group-focus-within/service:pointer-events-auto group-focus-within/service:mt-3 group-focus-within/service:max-h-56 group-focus-within/service:opacity-100">
                              {service.subServices.map((subService) => (
                                <Link
                                  key={subService.title}
                                  href={subService.href}
                                  onClick={(event) =>
                                    handleSubServiceClick(
                                      event,
                                      subService.href,
                                    )
                                  }
                                  className="group/subservice flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[12px] font-medium text-slate-700 shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/[0.04] hover:shadow-[0_10px_26px_-18px_rgba(59,130,246,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                >
                                  <span className="truncate">
                                    {subService.title}
                                  </span>
                                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-primary/70 transition-transform duration-150 ease-out group-hover/subservice:translate-x-0.5" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[18px] bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-3 ring-1 ring-slate-200 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.35)]">
                      <div className="flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 md:h-48">
                        <img
                          src={services[activeServiceIndex].image}
                          alt={services[activeServiceIndex].imageAlt}
                          className="h-full w-full object-contain object-center transition-transform duration-300 ease-out"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3 flex items-start justify-between gap-2">
                        <div>
                          <div className="text-base font-semibold leading-tight text-slate-900">
                            {services[activeServiceIndex].name}
                          </div>
                          <p className="mt-1 text-slate-600">
                            {services[activeServiceIndex].description}
                          </p>
                        </div>
                        <Link
                          href={services[activeServiceIndex].href}
                          onClick={() => setServicesOpen(false)}
                          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-150 ease-out hover:bg-primary/15"
                        >
                          View
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                      <p className="mt-3 px-1 font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Hover a service card on the left to view sub-services
                      </p>
                    </div>
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
              <Link href="/book-calendar">
                <Button className="font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Book a Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[88vw] max-w-[360px] overflow-y-auto px-5">
                  <div className="mt-6 flex flex-col space-y-5">
                    {navLinks.slice(0, 2).map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-base font-medium text-slate-900 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}

                    <div className="h-px bg-border" />

                    {/* Services Section */}
                    <div>
                      <h3 className="mb-3 font-medium text-slate-900">
                        Services
                      </h3>
                      <div className="ml-2 space-y-3">
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
                        className="text-base font-medium text-slate-900 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-4" />

                    <Link href="/book-calendar">
                      <Button className="w-full">Book a Demo</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow overflow-x-hidden pt-16 sm:pt-20">{children}</main>

      <footer className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-10 text-slate-900 sm:py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-[-8%] h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px]">
          <div className="rounded-3xl bg-white p-5 sm:p-8 lg:p-12 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-4 rounded-2xl px-4 py-3">
                  <img
                    src={logo}
                    alt="PropelMeta Tech"
                    className="h-auto w-[150px] object-contain sm:w-[185px] md:w-[200px]"
                    loading="lazy"
                  />
                </div>

                <p className="mt-6 max-w-md text-slate-600">
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

              <div className="p-1 md:pt-2 lg:pl-4">
                <h4 className="mb-4 font-semibold uppercase tracking-[0.14em] text-slate-900">
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

              <div className="p-1 md:pt-2 lg:pl-4">
                <h4 className="mb-4 font-semibold uppercase tracking-[0.14em] text-slate-900">
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

              <div className="p-1 md:pt-2 lg:pl-4">
                <h4 className="mb-4 font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Connect
                </h4>
                <ul className="grid w-fit grid-cols-2 gap-1">
                  <li>
                    <a
                      href="https://www.facebook.com/share/1HJAAhoL3y/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md ring-1 ring-[#1877F2]/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/propelmeta_tech?igsh=eGd0ZXFkb2syenBx"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white shadow-md ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/propelmeta-tech/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-md ring-1 ring-[#0A66C2]/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/propelmeta_tech"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-md ring-1 ring-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="text-base font-semibold leading-none">
                        X
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.threads.com/@propelmeta_tech"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Threads"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white shadow-md ring-1 ring-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <AtSign className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-center text-sm text-slate-600 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 sm:text-left">
              <p>&copy; {currentYear} PropelMeta Tech. All rights reserved.</p>
              <div className="flex items-center gap-4 sm:gap-6">
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

      <WhatsAppFloatingButton />
    </div>
  );
}
