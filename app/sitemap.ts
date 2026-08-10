import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch("https://api.github.com/users/luidsonl/repos");
  const repos = await res.json();

  const projects = repos.filter((r: any) => r.has_pages && r.name !== "luidsonl.github.io");

  const pages = projects.map((repo: any) => ({
    url: `https://luidsonl.github.io/${repo.name}`,
    lastModified: new Date(repo.updated_at).toISOString(),
  }));

  return [
    {
      url: "https://luidsonl.github.io/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://luidsonl.github.io/en",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://luidsonl.github.io/blog/sitemap.xml",
      lastModified: new Date().toISOString(),
    },
    ...pages,
  ];
}