// Cases live in content/cases/, one Markdown file per case, and are edited in Pages CMS
// (https://app.pagescms.org, configured by .pages.yml). The file name is the case's URL:
// content/cases/smart-companion.md is shown at /case/smart-companion.

export interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  order: number;
  /** The case story, converted from Markdown to HTML at build time by scripts/cases-plugin.ts */
  html: string;
}

type CaseFile = { data: Record<string, unknown>; html: string };
const files = import.meta.glob('/content/cases/*.md', { import: 'default', eager: true }) as Record<string, CaseFile>;

// Pages CMS writes image paths from the site root (/images/cases/x.png); prefix the base path
// so they also work if the site is ever served from a sub-folder.
export const assetUrl = (src: string) =>
  src.startsWith('/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

function toCase(path: string, { data, html }: CaseFile): (ProjectProps & { draft: boolean }) | null {
  if (!data.title) return null;
  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title: String(data.title),
    description: data.summary ? String(data.summary) : '',
    image: data.cover ? assetUrl(String(data.cover)) : '',
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featured: Boolean(data.featured),
    order: Number(data.order ?? 100),
    draft: Boolean(data.draft),
    // Root-relative image and link paths in the story get the base path too
    html: html.replace(/(src|href)="(\/[^"]*)"/g, (_, attr, url) => `${attr}="${assetUrl(url)}"`),
  };
}

export const projectsData: ProjectProps[] = Object.entries(files)
  .map(([path, file]) => toCase(path, file))
  .filter((c): c is ProjectProps & { draft: boolean } => c !== null && (import.meta.env.DEV || !c.draft))
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
