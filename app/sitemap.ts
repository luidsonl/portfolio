import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://luidsonl.github.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const repos: any[] = [];

  for (let page = 1; ; page++) {
    const res = await fetch(
      `https://api.github.com/users/luidsonl/repos?per_page=100&page=${page}`
    );
    if (!res.ok) break;
    const data = await res.json();
    if (!Array.isArray(data)) break;
    repos.push(...data);
    if (data.length < 100) break;
  }

  const projects = repos.filter(
    (r: any) => r.has_pages && r.name !== "luidsonl.github.io"
  );

  const pages: MetadataRoute.Sitemap = [];

  for (const repo of projects) {
    const url = `${BASE_URL}/${repo.name}/`;
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) {
        pages.push({
          url,
          lastModified: new Date(repo.updated_at).toISOString(),
        });
      }
    } catch {
      // ignora projetos cujo GitHub Pages não está publicado
    }
  }

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date().toISOString(),
    },
    ...pages,
  ];
}
