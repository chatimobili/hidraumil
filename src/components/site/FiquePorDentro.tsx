import { useState, type FormEvent } from "react";
import { z } from "zod";

const emailSchema = z.string().trim().email("E-mail inválido").max(255);

export function FiquePorDentro() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "E-mail inválido");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 md:px-14 py-10 md:py-14">
          {/* Decorative giant X */}
          <svg
            viewBox="0 0 600 600"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full pointer-events-none"
          >
            <g stroke="white" strokeWidth="110" strokeLinecap="round" fill="none" opacity="0.10">
              <line x1="320" y1="40" x2="760" y2="560" />
              <line x1="760" y1="40" x2="320" y2="560" />
            </g>
          </svg>

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 items-center">
            <div>
              <h2 className="text-white font-semibold leading-[1.15] text-3xl md:text-4xl">
                Fique por dentro
              </h2>
              <p className="mt-3 text-white/90 text-base leading-relaxed max-w-md">
                Receba novidades, conteúdos exclusivos e atualizações sobre paleteiras
                hidráulicas diretamente no seu e-mail.
              </p>
            </div>

            <form onSubmit={onSubmit} className="w-full">
              <div className="flex items-center bg-white rounded-full p-2 max-w-xl lg:ml-auto">
                <input
                  type="email"
                  required
                  value={email}
                  maxLength={255}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Insira seu melhor e-mail"
                  aria-label="Seu e-mail"
                  className="flex-1 bg-transparent px-5 py-2.5 text-secondary placeholder:text-muted-foreground focus:outline-none text-base min-w-0"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm md:text-base font-medium text-primary-foreground hover:bg-[var(--brand-dark)] transition"
                >
                  Assine a Newsletter
                </button>
              </div>
              {status === "error" && error && (
                <p className="mt-3 text-sm text-white font-medium">{error}</p>
              )}
              {status === "success" && (
                <p className="mt-3 text-sm text-white font-medium">
                  ✓ Inscrição recebida! Em breve você receberá nossos conteúdos.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
