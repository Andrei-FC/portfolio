/* andreicarvalho.pages.dev serves the same build as the custom domain, which
   would leave two identical sites competing with each other. Anything arriving
   on that exact host is sent to the canonical one, path and query intact.

   This is a Pages Function rather than a line in _redirects because there the
   left-hand side is a path, not a URL — a path rule would match the real
   domain too and send it in circles. Preview deployments keep their own
   <hash>.andreicarvalho.pages.dev hostnames and are left alone on purpose. */
const PAGES_HOST = "andreicarvalho.pages.dev";
const CANONICAL_HOST = "andreicarvalho.com";

export const onRequest = (context) => {
  try {
    const url = new URL(context.request.url);
    if (url.hostname === PAGES_HOST) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
  } catch {
    // A redirect that throws must not take the whole site down with it.
  }
  return context.next();
};
