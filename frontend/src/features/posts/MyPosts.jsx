import { usePosts } from '../../context/PostContext';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../../components/BlogCard';

function MyPosts() {
  const { posts } = usePosts();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const myPosts = posts.filter((post) => post.author === user?.name);

  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">My Posts</h1>

      {myPosts.length === 0 ? (
        <p className="text-gray-500">You haven't written any posts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {myPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MyPosts;
