import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function CTASection({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          {title ?? "Precisa de manutenção de paleteira em Cascavel?"}
        </h2>
        <p className="mt-3 text-secondary-foreground/80 max-w-2xl mx-auto">
          {subtitle ?? "Entre em contato agora mesmo. Orçamento gratuito e sem compromisso."}
        </p>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-[var(--brand-dark)] transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
