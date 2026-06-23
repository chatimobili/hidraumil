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
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground px-8 md:px-14 py-10 md:py-12">
          {/* Decorative X shape */}
          <svg
            viewBox="0 0 400 400"
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-[120%] w-auto opacity-15 pointer-events-none"
          >
            <path
              d="M50 50 L350 350 M350 50 L50 350"
              stroke="white"
              strokeWidth="80"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-semibold leading-[1.15]">Fique por dentro</h2>
              <p className="mt-3 text-white/90 text-base md:text-lg max-w-md leading-relaxed">
                Receba novidades, conteúdos exclusivos e atualizações sobre paleteiras
                hidráulicas diretamente no seu e-mail.
              </p>
            </div>

            <form onSubmit={onSubmit} className="w-full">
              <div className="flex items-center bg-white rounded-full p-1.5 shadow-lg max-w-xl lg:ml-auto">
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
                  className="flex-1 bg-transparent px-5 py-3 text-secondary placeholder:text-muted-foreground focus:outline-none text-base"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm md:text-base font-semibold text-primary-foreground hover:bg-[var(--brand-dark)] transition"
                >
                  Assine a Newsletter
                </button>
              </div>
              {status === "error" && error && (
                <p className="mt-3 text-sm text-white font-medium lg:text-right">{error}</p>
              )}
              {status === "success" && (
                <p className="mt-3 text-sm text-white font-medium lg:text-right">
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
