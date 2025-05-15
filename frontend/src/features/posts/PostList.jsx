import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../../components/BlogCard'; 

const API_BASE = "http://localhost:8000/api/posts/";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_BASE)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">All Posts</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;
