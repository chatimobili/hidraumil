import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Hidraumil Hidráulicos — Cascavel, PR" },
      { name: "description", content: "Entre em contato com a Hidraumil em Cascavel, PR. Solicite orçamento para manutenção, conserto ou locação de paleteiras hidráulicas. Atendimento rápido pelo WhatsApp." },
      { property: "og:title", content: "Contato | Hidraumil Hidráulicos" },
      { property: "og:description", content: "Fale conosco em Cascavel, PR. Orçamento rápido pelo WhatsApp." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Fale com a Hidraumil em Cascavel"
        subtitle="Responda em poucos minutos pelo WhatsApp ou envie o formulário abaixo. Atendemos toda a região Oeste do Paraná."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm space-y-5">
              <Info icon={<MapPin className="h-5 w-5 text-primary" />} title="Endereço" value={SITE.address} />
              <Info icon={<Phone className="h-5 w-5 text-primary" />} title="Telefone" value={<a href={`tel:${SITE.phoneE164}`} className="hover:text-primary">{SITE.phoneDisplay}</a>} />
              <Info icon={<WhatsAppIcon className="h-5 w-5 text-primary" />} title="WhatsApp" value={<a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{SITE.phoneDisplay}</a>} />
              <Info icon={<Mail className="h-5 w-5 text-primary" />} title="E-mail" value={<a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>} />
              <Info icon={<Clock className="h-5 w-5 text-primary" />} title="Horário" value={SITE.hours} />
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Mapa Cascavel PR"
                src="https://www.google.com/maps?q=Cascavel,+PR&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </aside>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, title, value }: { icon: React.ReactNode; title: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-sm text-secondary font-medium">{value}</div>
      </div>
    </div>
  );
}
