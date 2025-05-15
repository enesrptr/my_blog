import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const PostContext = createContext();
const API_BASE = 'http://localhost:8000/api/posts/';

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  // Verileri API'den çek
  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_BASE);
      setPosts(res.data);
    } catch (err) {
      console.error('❌ Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Yeni post ekle
  const addPost = async (newPost) => {
    try {
      const res = await axios.post(API_BASE, newPost);
      setPosts((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error('❌ Error adding post:', err);
    }
  };

  // Post güncelle
  const updatePost = async (updatedPost) => {
    try {
      const res = await axios.put(`${API_BASE}${updatedPost.id}/`, updatedPost);
      setPosts((prev) =>
        prev.map((post) => (post.id === updatedPost.id ? res.data : post))
      );
    } catch (err) {
      console.error('❌ Error updating post:', err);
    }
  };

  // Post sil
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_BASE}${id}/`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      console.error('❌ Error deleting post:', err);
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost, updatePost, deletePost, fetchPosts }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
