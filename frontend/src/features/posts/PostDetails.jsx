import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { usePosts } from '../../context/PostContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts();
  const { deletePost } = usePosts();
  const { user } = useAuth();

  const post = posts.find((p) => String(p.id) === String(id));

  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <section className="text-center py-20">
        <p className="text-gray-500">Loading post...</p>
      </section>
    );
  }

  const isAuthor = user && user.name === post.author;

  const handleDelete = () => {
  const confirmDelete = window.confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    deletePost(post.id);
    navigate('/');
  }
};

  return (
    <section className="max-w-3xl mx-auto py-10 px-4 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">{post.title}</h1>
      <div className="text-sm text-gray-500">
        {post.author} • {post.date}
      </div>

      {isAuthor && (
        <div className="flex justify-end gap-4">
          <Button onClick={() => navigate(`/posts/${post.id}/edit`)}>Edit Post</Button>
          <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
            Delete Post
          </Button>
        </div>
      )}

      <p className="text-gray-700 leading-relaxed mt-4 whitespace-pre-line">
        {post.content}
      </p>
    </section>
  );
}

export default PostDetails;
