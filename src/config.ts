import { existsSync } from "node:fs";
import { join } from "node:path";

/* The CV link is wired in two places — the footer and the about page — and both
   are marked "remover até o dia 0" in the Figma file. Rather than a flag to
   remember, the link follows the file: drop the PDF in public/ and it appears
   on both pages at the next build. No switch to flip, and no 404 while the CV
   is still being written. */
export const CV_PATH = "/cv.pdf";
export const SHOW_CV = existsSync(join(process.cwd(), "public", CV_PATH));
