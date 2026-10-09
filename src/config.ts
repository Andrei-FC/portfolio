/* The CV link, in the footer and on the about page. Both are marked
   "remover até o dia 0" in the Figma file.

   The filename lives in the URL, not only in the anchor's download
   attribute. That attribute governs the click; anything that reaches the
   file another way — the browser handing it to a PDF reader, the URL opened
   directly, right-click Save As — takes the name from the path. With both
   agreeing there is one name. Flip SHOW_CV to false to hide both links. */
export const CV_PATH = "/Andrei-Carvalho-CV.pdf";
export const SHOW_CV = true;
