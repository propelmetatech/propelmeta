import { AtSign, Facebook, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1HJAAhoL3y/',
    icon: <Facebook className="h-3.5 w-3.5 text-white" />,
    className: 'bg-[#1877F2]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/propelmeta_tech?igsh=eGd0ZXFkb2syenBx',
    icon: <Instagram className="h-3.5 w-3.5 text-white" />,
    className: 'bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/propelmeta-tech/',
    icon: <Linkedin className="h-3.5 w-3.5 text-white" />,
    className: 'bg-[#0A66C2]',
  },
  {
    label: 'X',
    href: 'https://x.com/propelmeta_tech',
    icon: (
      <span className="text-[13px] font-semibold leading-none text-white">
        X
      </span>
    ),
    className: 'bg-black',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@propelmeta_tech',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5 fill-white"
      >
        <path d="M14.5 3h3.2c.3 1.4 1.2 2.7 2.5 3.4v3.3a8 8 0 0 1-2.4-.8v6.9a6.3 6.3 0 1 1-6.3-6.3c.3 0 .6 0 .9.1v3.3a2.9 2.9 0 1 0 1.9 2.7V3Z" />
      </svg>
    ),
    className: 'bg-[#010101]',
  },
  {
    label: 'Threads',
    href: 'https://www.threads.com/@propelmeta_tech',
    icon: <AtSign className="h-3.5 w-3.5 text-white" />,
    className: 'bg-[#111111]',
  },
];

export function SocialFloatingBar() {
  return (
    <div className="fixed right-0 top-1/2 z-[74] -translate-y-1/2">
      <div className="rounded-l-2xl border border-blue-300/30 bg-gradient-to-b from-[#1E5FD3] to-[#0E3E90] px-2 py-3 shadow-[0_14px_28px_-16px_rgba(2,6,23,0.75)] backdrop-blur-sm">
        <ul className="flex flex-col items-center gap-2">
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 ${item.className}`}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
