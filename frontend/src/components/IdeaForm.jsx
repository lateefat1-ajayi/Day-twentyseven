import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function IdeaForm({ idea = null, onUpdate = null }) {
  const [form, setForm] = useState({
    title: idea?.title || "",
    description: idea?.description || "",
    tags: idea?.tags?.join(", ") || "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    };

    if (!payload.title) {
      toast.error("Title is required");
      return;
    }

    try {
      if (idea && onUpdate) {
        await onUpdate(idea._id, payload);
        toast.success("Idea updated!");
      } else {
        await api.post("/", payload);
        toast.success("Idea added!");
        navigate("/saved");
      }

      setForm({ title: "", description: "", tags: "" });
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow-md p-6 rounded-lg"
    >
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter your idea title"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Tell us more about it"
          rows="4"
          className="w-full px-4 py-2 border rounded-md"
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium">Tags</label>
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="e.g. mern, app, ai"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        {idea ? "Update Idea" : "Submit Idea"}
      </button>
    </form>
  );
}
