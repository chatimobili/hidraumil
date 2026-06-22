import { useState } from "react";
import { SITE, services } from "@/lib/site";
import { Send } from "lucide-react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", servico: "", mensagem: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome}${form.empresa ? ` da ${form.empresa}` : ""}.%0ATelefone: ${form.telefone}%0AServiço: ${form.servico}%0A%0A${form.mensagem}`;
    window.open(`${SITE.whatsappUrl}?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-border bg-white p-6 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-secondary">Nome completo</span>
          <input required value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-secondary">Empresa</span>
          <input value={form.empresa} onChange={e => setForm({...form, empresa: e.target.value})} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-secondary">Telefone / WhatsApp</span>
          <input required value={form.telefone} onChange={e => setForm({...form, telefone: e.target.value})} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
        {!compact && (
          <label className="block">
            <span className="text-sm font-medium text-secondary">Tipo de serviço</span>
            <select required value={form.servico} onChange={e => setForm({...form, servico: e.target.value})} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">Selecione...</option>
              {services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
              <option>Outro</option>
            </select>
          </label>
        )}
      </div>
      <label className="block">
        <span className="text-sm font-medium text-secondary">Mensagem</span>
        <textarea required rows={4} value={form.mensagem} onChange={e => setForm({...form, mensagem: e.target.value})} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </label>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-dark)] transition">
        <Send className="h-4 w-4" /> Enviar mensagem
      </button>
      {sent && <p className="text-sm text-emerald-600">Abrimos o WhatsApp com sua mensagem. Aguardamos seu contato!</p>}
    </form>
  );
}
