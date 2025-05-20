import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../../components/BlogCard';

const POST_API = "http://localhost:8000/api/posts/";
const CATEGORY_API = "http://localhost:8000/api/categories/";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get(POST_API)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Post fetch error:", err));
  }, []);

  useEffect(() => {
    axios.get(CATEGORY_API)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Category fetch error:", err));
  }, []);

  // Postları kategoriye göre filtrele
  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories.some((cat) => cat.id === parseInt(selectedCategory))
      )
    : posts;

  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-600">All Posts</h1>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded shadow-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;
