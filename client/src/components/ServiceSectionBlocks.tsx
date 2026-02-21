import type { ReactNode } from 'react';
import { CheckCircle, Shield, Sparkles, Target, Users } from 'lucide-react';

type ServiceInfoCardProps = {
  title: string;
  items?: string[];
  description?: string;
  icon?: ReactNode;
  className?: string;
  twoColumnItems?: boolean;
};

function getDefaultTitleIcon(title: string, type: 'info' | 'steps') {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('why choose')) {
    return <Shield className="h-6 w-6" />;
  }

  if (
    normalizedTitle.includes('who this service') ||
    normalizedTitle.startsWith('who ')
  ) {
    return <Users className="h-6 w-6" />;
  }

  if (normalizedTitle.includes('how ') && normalizedTitle.includes('work')) {
    return <Target className="h-6 w-6" />;
  }

  if (
    normalizedTitle.includes('benefit') ||
    normalizedTitle.includes('what you get')
  ) {
    return <Sparkles className="h-6 w-6" />;
  }

  if (type === 'steps') {
    return <Target className="h-6 w-6" />;
  }

  return <Sparkles className="h-6 w-6" />;
}

export function ServiceInfoCard({
  title,
  items,
  description,
  icon,
  className = '',
  twoColumnItems = false,
}: ServiceInfoCardProps) {
  const resolvedIcon = icon ?? getDefaultTitleIcon(title, 'info');

  return (
    <div
      className={`w-full max-w-[600px] mx-auto rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="mb-6 flex items-center gap-3">
        {resolvedIcon ? (
          <span className="text-indigo-600">{resolvedIcon}</span>
        ) : null}
        <h5 className="font-semibold text-slate-900">{title}</h5>
      </div>

      {description ? <p className="text-slate-600">{description}</p> : null}

      {items && items.length > 0 ? (
        <ul
          className={`${twoColumnItems ? 'grid grid-cols-1 gap-4 md:grid-cols-2' : 'space-y-3'} text-slate-600`}
        >
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

type ServiceStepsCardProps = {
  title: string;
  steps: string[];
  footerText?: string;
  stepBadgeClassName?: string;
  className?: string;
  icon?: ReactNode;
};

export function ServiceStepsCard({
  title,
  steps,
  footerText,
  stepBadgeClassName = 'bg-indigo-600',
  className = '',
  icon,
}: ServiceStepsCardProps) {
  const resolvedIcon = icon ?? getDefaultTitleIcon(title, 'steps');

  return (
    <div
      className={`w-full max-w-[600px] mx-auto rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="mb-6 flex items-center gap-3">
        {resolvedIcon ? (
          <span className="text-indigo-600">{resolvedIcon}</span>
        ) : null}
        <h5 className="font-semibold text-slate-900">{title}</h5>
      </div>
      <ol className="space-y-4 text-slate-600">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white ${stepBadgeClassName}`}
            >
              {index + 1}
            </span>
            <span className="leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
      {footerText ? <p className="mt-6 text-slate-600">{footerText}</p> : null}
    </div>
  );
}

type ServiceImagePanelProps = {
  src: string;
  alt: string;
  overlayClassName?: string;
  className?: string;
  imageClassName?: string;
};

export function ServiceImagePanel({
  src,
  alt,
  overlayClassName = 'from-indigo-500/10 to-blue-500/10',
  className = '',
  imageClassName = 'w-full h-auto',
}: ServiceImagePanelProps) {
  return (
    <div className={`relative w-full max-w-[650px] mx-auto ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 ring-1 ring-white/60 shadow-2xl shadow-slate-200/50">
        <img src={src} alt={alt} className={imageClassName} />
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${overlayClassName}`}
        />
      </div>
    </div>
  );
}
