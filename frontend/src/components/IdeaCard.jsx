import { useState } from "react";
import IdeaForm from "./IdeaForm";

export default function IdeaCard({ idea, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      {isEditing ? (
        <IdeaForm idea={idea} onUpdate={(...args) => {
          onUpdate(...args);
          setIsEditing(false);
        }} />
      ) : (
        <>
          <h3 className="text-xl font-bold">{idea.title}</h3>
          <p className="text-gray-700">{idea.description}</p>
          {idea.tags?.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
              {idea.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
