// src/pages/Post.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadPost } from '../utils/posts';

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Awaited<ReturnType<typeof loadPost>>>();

  useEffect(() => {
    if (!slug) return;
    loadPost(slug).then(setPost);
  }, [slug]);

  if (!post) return <p className="container">Loading…</p>;

  return (
    <article className="container">
      <h1>{post.meta.title}</h1>
      <p className="post-meta">{post.meta.date}</p>


    </article>
  );
}
