import serviceHeroBannerImage from '@/assests/digital-marketing-social-media-concept.jpg';

export function ServiceHeroBanner() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <img
        src={serviceHeroBannerImage}
        alt=""
        className="h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/84 to-slate-50/88" />
    </div>
  );
}
