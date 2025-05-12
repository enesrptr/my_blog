import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { usePosts } from '../../context/PostContext';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = usePosts();

  const postToEdit = posts.find((p) => String(p.id) === String(id));

  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    if (postToEdit) {
      setForm({
        title: postToEdit.title,
        content: postToEdit.content
      });
    } else {
      navigate('/');
    }
  }, [postToEdit, navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...postToEdit,
      title: form.title,
      content: form.content
    };

    updatePost(updatedPost);
    navigate('/');
  };

  return (
    <section className="py-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center">Edit Post</h2>

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
            placeholder="Update your blog content..."
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
