const whatsappHref =
  'https://wa.me/14698509526?text=Hi%20PropelMeta%20Tech%2C%20I%20want%20to%20know%20more%20about%20your%20services.';

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-5 right-4 z-[80] sm:bottom-6 sm:right-6">
      <div className="whatsapp-bounce">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Propy on WhatsApp"
          className="whatsapp-cta group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-300/70 bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 px-3 py-2 pr-4 text-white shadow-[0_16px_38px_-16px_rgba(37,99,235,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-16px_rgba(37,99,235,1)]"
        >
          <span aria-hidden className="whatsapp-cta-shine" />
          <span aria-hidden className="whatsapp-cta-glow" />

          <span className="relative z-[1] inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_20px_-10px_rgba(37,211,102,0.9)] ring-2 ring-white/85">
            <span aria-hidden className="whatsapp-icon-halo" />
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="h-5 w-5 fill-white"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8c0 1.414.37 2.741 1.017 3.89L0 16l4.228-1.017A7.95 7.95 0 0 0 8 16h.003c4.418 0 7.997-3.582 7.997-8 0-2.136-.832-4.146-2.399-5.674zM8.003 14.5a6.5 6.5 0 0 1-3.313-.908l-.236-.142-2.51.603.67-2.448-.154-.248A6.5 6.5 0 1 1 8.003 14.5z" />
              <path d="M11.13 9.412c-.157-.078-.927-.457-1.07-.51-.143-.053-.247-.078-.35.079-.103.156-.4.51-.49.617-.09.104-.181.117-.338.039-.157-.078-.663-.244-1.263-.777-.467-.417-.782-.93-.873-1.087-.09-.156-.01-.24.068-.318.071-.07.157-.182.236-.273.079-.09.104-.156.157-.26.052-.104.026-.195-.013-.273-.039-.078-.35-.84-.48-1.152-.126-.303-.255-.26-.35-.266-.09-.006-.195-.007-.299-.007a.576.576 0 0 0-.416.195c-.143.156-.546.533-.546 1.3 0 .766.559 1.507.637 1.611.078.104 1.1 1.68 2.666 2.356.372.16.662.255.889.327.373.119.713.102.981.062.299-.045.927-.379 1.057-.745.13-.366.13-.679.091-.745-.039-.065-.143-.104-.3-.182z" />
            </svg>
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold leading-none text-white shadow ring-2 ring-white">
              <span aria-hidden className="whatsapp-badge-ping" />
              1
            </span>
          </span>

          <span className="relative z-[1] inline pr-1 text-[13px] font-semibold leading-none sm:text-[18px]">
            Chat with Propy
          </span>
        </a>
      </div>
    </div>
  );
}
