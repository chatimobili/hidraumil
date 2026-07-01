import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { SITE, services } from "@/lib/site";
import logoAsset from "@/assets/logo-hidraumil.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Hidraumil - Início">
            <img src={logoAsset.url} alt="Hidraumil Hidráulicos" className="h-10 w-auto" width={831} height={236} />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-secondary" aria-label="Principal">
            <Link to="/" className="hover:text-primary" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
            <Link to="/sobre-nos" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Sobre Nós</Link>
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 hover:text-primary" aria-haspopup="true" aria-expanded={servicesOpen}>
                Serviços <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-80">
                  <ul className="rounded-lg border border-border bg-white shadow-lg py-2">
                    {services.map(s => (
                      <li key={`${s.slug}-${s.title}`}>
                        <Link to={`/${s.slug}`} className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link to="/blog" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Blog</Link>
            <Link to="/contato" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Contato</Link>
          </nav>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-[var(--brand-dark)] transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Solicitar Orçamento
          </a>

          <button
            className="lg:hidden p-2 -mr-2 text-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden py-4 border-t border-border" aria-label="Mobile">
            <ul className="flex flex-col gap-1 text-sm font-medium text-secondary">
              <li><Link to="/" className="block py-2" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/sobre-nos" className="block py-2" onClick={() => setOpen(false)}>Sobre Nós</Link></li>
              <li className="pt-2 pb-1 text-xs uppercase tracking-wider text-muted-foreground">Serviços</li>
              {services.map(s => (
                <li key={`${s.slug}-${s.title}`}>
                  <Link to={`/${s.slug}`} className="block py-2 pl-3" onClick={() => setOpen(false)}>{s.title}</Link>
                </li>
              ))}
              <li><Link to="/blog" className="block py-2" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link to="/contato" className="block py-2" onClick={() => setOpen(false)}>Contato</Link></li>
              <li className="pt-3">
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                  <WhatsAppIcon className="h-4 w-4" /> Solicitar Orçamento
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
