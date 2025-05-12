import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'How to Start with React',
      content: 'React is a powerful library for building UIs.',
      author: 'Enes Rptr',
      date: 'May 11, 2025'
    },
    {
      id: '2',
      title: 'Understanding Tailwind CSS',
      content: 'Tailwind CSS is a utility-first framework for fast styling.',
      author: 'Jane Doe',
      date: 'May 10, 2025'
    }
  ]);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const updatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const deletePost = (id) => {
  setPosts((prev) => prev.filter((post) => post.id !== id));
};

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost  }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
