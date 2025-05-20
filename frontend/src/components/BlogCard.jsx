import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 space-y-2">
      <h2 className="text-xl font-bold text-blue-600">{post.title}</h2>

      <p className="text-gray-600 text-sm">
        {post.excerpt}
      </p>

      <div className="text-xs text-gray-400">
        {post.author} • {new Date(post.date).toLocaleDateString()}
      </div>

      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {post.categories.map((cat) => (
            <span
              key={cat.id}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}

      <Link
        to={`/posts/${post.id}`}
        className="inline-block text-sm text-blue-600 hover:underline mt-2"
      >
        Read more →
      </Link>
    </div>
  );
}

export default BlogCard;
