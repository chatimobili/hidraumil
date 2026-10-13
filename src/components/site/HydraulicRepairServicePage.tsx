import { ServicePageShell, H2, H3, P } from "@/components/site/ServicePageShell";
import { ServiceFAQ } from "@/components/site/ServiceFAQ";
import type { RepairService } from "@/lib/hydraulic-repair-services";

export function HydraulicRepairServicePage({ service }: { service: RepairService }) {
  return (
    <ServicePageShell title={service.h1} subtitle={service.subtitle} serviceName={service.h1} factualCopy>
      <section aria-label="Sobre o serviço">
        {service.intro.map(text => <P key={text}>{text}</P>)}
      </section>
      {service.sections.map(section => (
        <section key={section.title}>
          <H2>{section.title}</H2>
          {section.paragraphs?.map(text => <P key={text}>{text}</P>)}
          {section.items?.map(item => (
            <div key={item.title}>
              <H3>{item.title}</H3>
              <P>{item.text}</P>
            </div>
          ))}
        </section>
      ))}
      <section>
        <H2>{service.path === "/conserto-macaco-hidraulico-cascavel" ? "Como funciona o conserto" : "Como funciona"}</H2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2">
          {service.steps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-secondary">{index + 1}. {step.title}</h3>
              <P>{step.text}</P>
            </li>
          ))}
        </ol>
      </section>
      <ServiceFAQ questions={service.questions} />
    </ServicePageShell>
  );
}
