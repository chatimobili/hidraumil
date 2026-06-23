import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BadgeCheck, Star } from "lucide-react";

type Review = {
  name: string;
  initials: string;
  when: string;
  text: string;
  avatarBg?: string;
};

const reviews: Review[] = [
  {
    name: "Fernando Motta",
    initials: "F",
    when: "8 meses atrás",
    text: "Empresa conta com excelentes profissionais e trabalha com seriedade. Recomendo.",
    avatarBg: "bg-[#4b5563]",
  },
  {
    name: "Salete Soares da Rocha",
    initials: "S",
    when: "8 meses atrás",
    text: "Eu, como cliente Hidraumil que sou, só tenho a agradecer pelo atendimento. O time é maravilhoso.",
    avatarBg: "bg-[#0F1C2E]",
  },
  {
    name: "Ana Saskia Tavares",
    initials: "A",
    when: "8 meses atrás",
    text: "A Hidraumil consegue reunir valor humano e ferramentas imprescindíveis para o crescimento das empresas e da operação industrial em Cascavel.",
    avatarBg: "bg-primary",
  },
  {
    name: "Raquel Perret",
    initials: "R",
    when: "8 meses atrás",
    text: "Contratação de especialistas em hidráulica que otimiza o processo de manutenção das paleteiras. A equipe encontra a solução certa para cada caso.",
    avatarBg: "bg-[#1f2937]",
  },
  {
    name: "Marcos Andrade",
    initials: "M",
    when: "10 meses atrás",
    text: "Equipe extremamente ágil. Chamei pela manhã e no mesmo dia a paleteira já estava operando. Nunca mais paramos por falta de manutenção.",
    avatarBg: "bg-[#0F1C2E]",
  },
  {
    name: "Patrícia Lemos",
    initials: "P",
    when: "1 ano atrás",
    text: "Atendimento humano, orçamento transparente e prazo cumprido à risca. A Hidraumil virou parceira oficial da nossa rede.",
    avatarBg: "bg-primary",
  },
];

function GoogleG({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Avaliação do Google">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.5-5.9 7.7-11.3 7.7-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34 5.8 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34 6.8 29.3 5 24 5 16.1 5 9.3 9.4 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.8 13.5-4.8l-6.2-5.2c-2 1.4-4.5 2.2-7.3 2.2-5.4 0-9.7-3.2-11.3-7.7l-6.5 5C9.2 39.5 16 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.2 5.2c-.4.4 6.5-4.7 6.5-14.7 0-1.2-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="snap-start shrink-0 w-[300px] sm:w-[320px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-6 flex flex-col">
      <header className="flex items-start gap-3">
        <div
          className={`h-12 w-12 rounded-full ${r.avatarBg ?? "bg-gray-600"} text-white flex items-center justify-center font-semibold text-lg shrink-0`}
          aria-hidden="true"
        >
          {r.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-secondary leading-tight truncate">{r.name}</p>
          <p className="text-sm text-gray-500 mt-0.5">{r.when}</p>
        </div>
        <GoogleG className="h-6 w-6 shrink-0" />
      </header>

      <div className="mt-4 flex items-center gap-1" aria-label="Avaliação 5 de 5 estrelas">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-5 w-5 fill-[#FBBC04] text-[#FBBC04]" />
        ))}
        <BadgeCheck className="ml-1 h-4 w-4 text-[#1A73E8] fill-[#1A73E8] [&>path]:fill-[#1A73E8]" aria-label="Verificado" />
      </div>

      <p className="mt-4 text-secondary/90 text-[15px] leading-[1.6]">{r.text}</p>
    </article>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? (card as HTMLElement).offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Satisfação 97/100
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] text-secondary">
              Milhares de <span className="text-primary">clientes felizes</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Avaliação anterior"
              className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-[var(--brand-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Próxima avaliação"
              className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-[var(--brand-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4"
        >
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
