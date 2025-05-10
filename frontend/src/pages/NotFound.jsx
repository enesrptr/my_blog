import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-gray-600">Oops! Sayfa bulunamadı.</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 underline">
        Ana sayfaya dön
      </Link>
    </section>
  );
}

export default NotFound;
