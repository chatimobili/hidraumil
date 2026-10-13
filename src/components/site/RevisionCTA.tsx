import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function RevisionCTA() {
  return (
    <aside className="my-6 rounded-lg border border-border bg-accent p-6">
      <Button asChild className="h-auto w-full justify-start whitespace-normal text-left">
        <a href="https://wa.me/5545999130659" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          <span>Prefere que a gente faça a revisão? Fale com a Hidraumil no WhatsApp</span>
        </a>
      </Button>
    </aside>
  );
}