import BlogCard from '../../components/BlogCard';

const dummyPosts = [
  {
    id: '1',
    title: 'How to Start with React',
    excerpt: 'React is a powerful JavaScript library for building UIs. In this post, we explore the basics...',
    author: 'Enes Rptr',
    date: 'May 11, 2025'
  },
  {
    id: '2',
    title: 'Understanding Tailwind CSS',
    excerpt: 'Tailwind CSS is a utility-first framework that speeds up frontend development...',
    author: 'Jane Doe',
    date: 'May 10, 2025'
  },
  {
    id: '3',
    title: 'Vite: The Fast Build Tool',
    excerpt: 'Vite is a super fast frontend tool that improves DX dramatically. Let\'s dive into why it matters...',
    author: 'Reis',
    date: 'May 9, 2025'
  }
];

function PostList() {
  return (
    <section className="py-10 max-w-6xl mx-auto px-4 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {dummyPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;
