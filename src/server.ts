import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

const REDIRECT_MAP: Record<string, string> = {
  "/paleteiras-hidraulicas-cascavel": "/venda-paleteiras-hidraulicas-cascavel",
  "/paleteiras-hidraulicas-venda": "/venda-paleteiras-hidraulicas-cascavel",
  "/manutencao-e-reparo-de-paleteiras-hidraulicas": "/manutencao-paleteiras-hidraulicas-cascavel",
  "/manutencao-preventiva-paleteiras-hidraulicas": "/blog/manutencao-preventiva-paleteira-hidraulica",
  "/locacao-paleteiras-hidraulicas": "/locacao-paleteiras-hidraulicas-cascavel",
  "/conserto-paleteira-cascavel": "/conserto-paleteira-hidraulica-cascavel",
  "/assistencia-tecnica-em-equipamentos-hidraulicos": "/assistencia-tecnica-equipamentos-hidraulicos-cascavel",
  "/pecas-para-paleteiras": "/venda-pecas-paleteiras",
  "/manutencao-de-paleteiras-hidraulicas-em-toledo": "/manutencao-paleteira-hidraulica-toledo",
  "/manutencao-de-paleteiras-hidraulicas-em-corbelia": "/manutencao-paleteira-hidraulica-corbelia",
  "/manutencao-de-paleteiras-hidraulicas-em-marechal-candido-rondon": "/manutencao-paleteira-hidraulica-marechal-candido-rondon",
  "/manutencao-de-paleteiras-hidraulicas-em-santa-tereza": "/cidades-atendidas",
};

function checkLegacyRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  // Normalize: strip trailing slash (except root)
  let pathname = url.pathname;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.replace(/\/+$/, "");
  }
  const target = REDIRECT_MAP[pathname];
  if (!target) return null;
  const dest = new URL(target, url);
  dest.search = url.search;
  return Response.redirect(dest.toString(), 301);
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const redirect = checkLegacyRedirect(request);
      if (redirect) return redirect;
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
