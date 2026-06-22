import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import warehouseAsset from "@/assets/warehouse-cta.jpg.asset.json";

export function CTASection({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <img
        src={warehouseAsset.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0F1C2E]/85" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Fale com a Hidraumil</p>
        <h2 className="mt-4 font-semibold leading-[1.1]">
          {title ?? "Precisa de manutenção de paleteira em Cascavel?"}
        </h2>
        <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg leading-[1.5]">
          {subtitle ?? "Entre em contato agora mesmo. Orçamento gratuito e sem compromisso."}
        </p>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Falar pelo WhatsApp
        </a>
        <p className="mt-4 text-sm text-white/60">⏱ Resposta em até 2 horas úteis</p>
      </div>
    </section>
  );
}
