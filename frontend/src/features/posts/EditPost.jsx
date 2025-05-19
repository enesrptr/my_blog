import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { usePosts } from '../../context/PostContext';
import { useAuth } from '../../context/AuthContext';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = usePosts();
  const { user } = useAuth();

  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    const post = posts.find((p) => p.id.toString() === id);
    if (post) {
      setForm({
        title: post.title,
        content: post.content
      });
    }
  }, [id, posts]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      id: parseInt(id),
      title: form.title,
      content: form.content,
      author: user.name 
    };

    await updatePost(updatedPost);
    navigate(`/posts/${id}`);
  };

  return (
    <section className="py-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center">Edit Blog Post</h2>

        <Input
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter post title"
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="6"
            value={form.content}
            onChange={handleChange}
            placeholder="Edit your blog content..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </section>
  );
}

export default EditPost;
