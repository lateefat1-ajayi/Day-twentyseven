import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to IdeaCrate 💡</h1>
      <p className="mb-6 text-gray-600">Your personal vault for project & startup ideas.</p>
      <div className="flex gap-4 justify-center">
        <Link to="/add" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Idea
        </Link>
        <Link to="/saved" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          View Saved Ideas
        </Link>
      </div>
    </div>
  );
}
