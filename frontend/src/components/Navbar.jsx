import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 mb-6 shadow">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tight">
          IdeaCrate 💡
        </Link>
        <div className="flex gap-4 text-sm">
          <Link
            to="/add"
            className={`hover:underline ${
              pathname === "/add" ? "text-yellow-400" : ""
            }`}
          >
            Add Idea
          </Link>
          <Link
            to="/saved"
            className={`hover:underline ${
              pathname === "/saved" ? "text-yellow-400" : ""
            }`}
          >
            Saved Ideas
          </Link>
        </div>
      </div>
    </nav>
  );
}
