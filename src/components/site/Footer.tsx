import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { SITE, services, localBusinessSchema } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import logoAsset from "@/assets/logo-hidraumil.png.asset.json";

const socialClass =
  "h-11 w-11 rounded-full border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition";

export function Footer() {
  const scrollTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14">
        {/* Top row: logo + social */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" aria-label="Hidraumil Hidráulicos">
            <img src={logoAsset.url} alt="Hidraumil Hidráulicos" className="h-12 w-auto" width={200} height={82} />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary/80">Siga nossas redes</span>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/hidraumil/" target="_blank" rel="noopener noreferrer" aria-label="Hidraumil no Instagram" className={socialClass}><Instagram className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/hidraumilhidraulicos" target="_blank" rel="noopener noreferrer" aria-label="Hidraumil no Facebook" className={socialClass}><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200" />

        {/* Link columns */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
            <h3 className="text-base font-semibold text-secondary">Cidades atendidas</h3>
            <Link to="/cidades-atendidas" className="text-xs font-semibold text-primary hover:underline">Ver todas →</Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ["Cascavel","/manutencao-paleteiras-hidraulicas-cascavel"],
              ["Toledo","/manutencao-paleteira-hidraulica-toledo"],
              ["Foz do Iguaçu","/manutencao-paleteira-hidraulica-foz-do-iguacu"],
              ["Marechal C. Rondon","/manutencao-paleteira-hidraulica-marechal-candido-rondon"],
              ["Medianeira","/manutencao-paleteira-hidraulica-medianeira"],
              ["Assis Chateaubriand","/manutencao-paleteira-hidraulica-assis-chateaubriand"],
              ["Palotina","/manutencao-paleteira-hidraulica-palotina"],
              ["Santa Helena","/manutencao-paleteira-hidraulica-santa-helena"],
              ["Corbélia","/manutencao-paleteira-hidraulica-corbelia"],
            ].map(([name, href]) => (
              <Link key={href} to={href} className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:border-primary hover:text-primary transition">
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-semibold text-secondary mb-5">Empresa</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-primary">Sobre Nós</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-secondary mb-5">Serviços</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.map(s => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:text-primary">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-base font-semibold text-secondary mb-5">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <span>{SITE.address}</span></li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href={`tel:${SITE.phoneE164}`} className="hover:text-primary">{SITE.phoneDisplay}</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">{SITE.email}</a></li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <span>{SITE.hours}</span></li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between gap-6">
            <div className="lg:text-right">
              <h3 className="text-base font-semibold text-secondary mb-3">Precisa de ajuda?</h3>
              <p className="text-sm text-gray-600 mb-4 max-w-xs">Fale com um especialista e receba um orçamento sem compromisso.</p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition"
              >
                <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-2 text-sm text-secondary/80 hover:text-primary transition"
            >
              Voltar ao topo <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>Hidraumil Hidráulicos. Todos os direitos reservados. Copyright © {new Date().getFullYear()}</p>
          <p>Cascavel · Oeste do Paraná</p>
        </div>
      </div>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </footer>
  );
}
