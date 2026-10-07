import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const plate = z.object({
  image: z.string().optional(),   // path under src/assets/cases, e.g. "visualcue/1 - cover.jpg"
  alt: z.string().optional(),
  caption: z.string().optional()
});

const source = z.object({
  citation: z.string(),
  url: z.string(),
  href: z.string().optional()
});

const block = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("decision"),
    eyebrow: z.string().optional(),
    title: z.string(),
    // "l" is the section voice — Heading/L under a quiet eyebrow, for a brief or a
    // closing. "m" is a decision inside one — Heading/M under an accent eyebrow.
    size: z.enum(["m", "l"]).default("m"),
    surface: z.enum(["base", "alt", "inverse"]).default("base"),
    // One entry per column. A blank line inside an entry becomes a new paragraph.
    // Two entries read side by side; the first carries the weight, the rest are quiet.
    columns: z.array(z.string()).max(2).default([]),
    // Whether the first column carries full weight. Two columns always do;
    // a lone one only when the block is speaking for a section.
    lede: z.boolean().optional(),
    plates: z.array(plate).default([]),
    // Two plates can share a row when they are a comparison rather than a sequence.
    platesSideBySide: z.boolean().default(false),
    source: source.optional(),
    footnote: z.string().optional()
  }),
  z.object({
    // Interstitial on the alternate grey: the aside between two decisions.
    type: z.literal("note"),
    title: z.string().optional(),
    text: z.string().optional()
  }),
  z.object({
    // Inverse split: the claim on the left, a single figure on the right.
    type: z.literal("split"),
    eyebrow: z.string().optional(),
    title: z.string(),
    text: z.string(),
    image: z.string().optional(),
    alt: z.string().optional()
  }),
  z.object({
    // Full-bleed closing image. No container, no caption.
    type: z.literal("media"),
    image: z.string().optional(),
    alt: z.string().optional()
  }),
  z.object({
    type: z.literal("table"),
    eyebrow: z.string().optional(),
    scroll: z.boolean().default(false),
    columns: z.array(z.string()),
    rows: z.array(z.array(z.string()))
  })
]);

const cases = defineCollection({
  // Without an explicit id the loader collapses en/visualcue and pt/visualcue into
  // the same entry and one language silently overwrites the other.
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/content/cases",
    generateId: ({ entry }) => entry.replace(/\.ya?ml$/, "")
  }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    accent: z.enum(["handy-golf", "cuefit", "pace"]),
    org: z.string(),
    title: z.string(),
    // The card carries its own short title; the long one is the case h1.
    cardTitle: z.string(),
    // Written once. Full in the case hero, clamped to three lines in the card.
    description: z.string(),
    meta: z.object({
      role: z.string(),
      scope: z.string(),
      period: z.string(),
      platforms: z.string()
    }),
    cover: plate.optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    blocks: z.array(block).default([])
  })
});

export const collections = { cases };
