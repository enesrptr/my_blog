import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', form);
    // İleride buraya API çağrısı gelecek
  };

  return (
    <section className="py-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center">Login</h2>

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@mail.com"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />

        <Button type="submit" className="w-full">
          Giriş Yap
        </Button>

        <p className="text-sm text-center text-gray-600">
          Don't you have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
