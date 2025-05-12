import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

function NewPost() {
  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('📝 New post submitted:', form);

    // Future: send to API, then redirect
    navigate('/');
  };

  return (
    <section className="py-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center">New Blog Post</h2>

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
            placeholder="Write your blog content here..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <Button type="submit" className="w-full">
          Publish
        </Button>
      </form>
    </section>
  );
}

export default NewPost;
