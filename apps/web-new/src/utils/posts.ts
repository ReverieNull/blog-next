export interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
}

export interface PostData {
  meta: PostMeta;
  content: string;
}

/**
 * 一次性读取所有 md 文件
 * Vite 的 import.meta.glob 会自动把 front-matter 注入到 .frontmatter
 */
export async function listPosts() {
  const modules = import.meta.glob<{ default: string; frontmatter: PostMeta }>(
    '../posts/*.md',
    { eager: true }
  );

  return Object.entries(modules).map(([path, mod]) => ({
    slug: path.replace('../posts/', '').replace('.md', ''),
    meta: mod.frontmatter,
    content: mod.default,
  }));
}

export async function loadPost(slug: string) {
  const posts = await listPosts();
  const found = posts.find((p) => p.slug === slug);
  if (!found) throw new Error(`Post ${slug} not found`);
  return found;
}
