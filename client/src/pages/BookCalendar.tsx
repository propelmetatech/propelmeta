import { Layout } from "@/components/Layout";
import { useState } from "react";
import "./BookCalendar.css";

const FALLBACK_CALENDLY_URL =
  "https://calendly.com/admin-propelmetatech/30min";

export default function BookCalendar() {
  const [isLoading, setIsLoading] = useState(true);

  const calendlyUrl =
    (import.meta.env.VITE_CALENDLY_URL as string | undefined) ||
    FALLBACK_CALENDLY_URL;

  return (
    <Layout>
      <main className="calendar-page">
        <section className="calendar-section">
          <div className="calendly-widget-container">
            <iframe
              className="calendly-iframe"
              src={calendlyUrl}
              title="Book a Calendar"
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />

            {isLoading && (
              <div className="loading-indicator">
                <p>Loading calendar...</p>
                <div className="spinner" />
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
