import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { usePosts } from '../../context/PostContext';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

function NewPost() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category_ids: []  // ✅ kategori id'leri burada tutulacak
  });

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const { addPost } = usePosts();
  const { user } = useAuth();

  // Kategorileri backend'den çek
  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Kategori verisi alınamadı:', err));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(opt => parseInt(opt.value));
    setForm({
      ...form,
      category_ids: selected
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: form.title,
      content: form.content,
      author: user.name,
      category_ids: form.category_ids  // ✅ kategori id'lerini gönder
    };

    await addPost(newPost);
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

        {/* ✅ Kategori seçimi */}
        <div className="flex flex-col gap-1">
          <label htmlFor="categories" className="text-sm font-medium text-gray-700">
            Categories
          </label>
          <select
            multiple
            id="categories"
            value={form.category_ids}
            onChange={handleCategoryChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            You can select more than once with CTRL.
          </p>
        </div>

        <Button type="submit" className="w-full">
          Publish
        </Button>
      </form>
    </section>
  );
}

export default NewPost;
