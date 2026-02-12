import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-panel-${index}`;

        return (
          <div
            key={faq.question}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between text-left"
            >
              <span className="text-lg font-semibold text-slate-900 pr-6">
                {faq.question}
              </span>
              <span className="mt-1 text-slate-500">
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            {isOpen && (
              <p
                id={contentId}
                className="mt-3 text-slate-600"
              >
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
