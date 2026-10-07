/* The CV link, in the footer and on the about page. Both are marked
   "remover até o dia 0" in the Figma file.

   It points at public/cv.pdf. Drop the file there and the link resolves;
   until then it is a dead link on purpose, so the button is visible while
   the CV is still being written. Flip SHOW_CV to false to hide both. */
export const CV_PATH = "/cv.pdf";
export const SHOW_CV = true;
