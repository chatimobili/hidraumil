import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE, services, localBusinessSchema } from "@/lib/site";
import logoAsset from "@/assets/logo-hidraumil.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-4">
        <div>
          <img src={logoAsset.url} alt="Hidraumil Hidráulicos" className="h-12 w-auto bg-white/95 rounded-md p-1.5" width={200} height={82} />
          <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
            Especialista em manutenção, conserto, locação e venda de paleteiras hidráulicas em Cascavel e Oeste do Paraná há mais de 15 anos.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/10 hover:bg-primary transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/10 hover:bg-primary transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/10 hover:bg-primary transition"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/sobre-nos" className="hover:text-primary">Sobre Nós</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            {services.map(s => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-primary">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> {SITE.address}</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> <a href={`tel:${SITE.phoneE164}`} className="hover:text-primary">{SITE.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /> {SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-secondary-foreground/70 text-center">
          © 2025 Hidraumil Hidráulicos. Todos os direitos reservados.
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </footer>
  );
}
