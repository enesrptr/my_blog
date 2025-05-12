import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Dummy post list (aynı PostList'teki gibi)
const dummyPosts = [
  {
    id: '1',
    title: 'How to Start with React',
    content: 'React is a powerful JavaScript library for building UIs. In this post, we explore the basics of JSX, components, and state.',
    author: 'Enes Rptr',
    date: 'May 11, 2025'
  },
  {
    id: '2',
    title: 'Understanding Tailwind CSS',
    content: 'Tailwind CSS is a utility-first framework. This post covers how to build responsive UIs quickly using Tailwind.',
    author: 'Jane Doe',
    date: 'May 10, 2025'
  },
  {
    id: '3',
    title: 'Vite: The Fast Build Tool',
    content: 'Vite offers fast refresh, optimized build times, and great DX. Learn how to create your project with it.',
    author: 'Reis',
    date: 'May 9, 2025'
  }
];

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = dummyPosts.find((p) => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/'); // If post not found, go to home
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <section className="max-w-3xl mx-auto py-10 px-4 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">{post.title}</h1>
      <div className="text-sm text-gray-500">
        {post.author} • {post.date}
      </div>
      <p className="text-gray-700 leading-relaxed mt-4">
        {post.content}
      </p>
    </section>
  );
}

export default PostDetails;
