import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';

import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import PostList from '../features/posts/PostList';
import NewPost from '../features/posts/NewPost';
import ProtectedRoute from './ProtectedRoute';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<PostList />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Auth routes - can be public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/posts/new"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />

        {/* Catch all - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
