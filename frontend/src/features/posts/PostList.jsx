import { usePosts } from '../../context/PostContext';
import BlogCard from '../../components/BlogCard';

function PostList() {
  const { posts } = usePosts();

  return (
    <section className="py-10 max-w-6xl mx-auto px-4 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;
