import { useEffect, useState } from "react";
import api from "../api";
import IdeaCard from "../components/IdeaCard";
import { toast } from "react-toastify";

export default function SavedIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const res = await api.get("/");
      setIdeas(res.data);
    } catch (err) {
      toast.error("Failed to load ideas.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      toast.info("Idea deleted");
      setIdeas((prev) => prev.filter((idea) => idea._id !== id));
    } catch (err) {
      toast.error("Delete failed.");
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await api.patch(`/${id}`, updatedData);
      toast.success("Idea updated");
      setIdeas((prev) =>
        prev.map((idea) => (idea._id === id ? res.data : idea))
      );
    } catch (err) {
      toast.error("Update failed.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Saved Ideas</h2>

      {ideas.length === 0 ? (
        <p className="text-gray-600">No ideas saved yet.</p>
      ) : (
        <div className="grid gap-4">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea._id}
              idea={idea}
              onDelete={() => handleDelete(idea._id)}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
