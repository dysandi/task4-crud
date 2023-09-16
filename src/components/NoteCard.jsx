"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ id, name, age }) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newAge, setNewAge] = useState(age);
  const [editMode, setEditMode] = useState(false);

  async function handleUpdateMenu() {
    const res = await fetch(
      "https://api.tablebackend.com/v1/rows/LWUqcyucqlVW",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id, name: newName, age: newAge }),
      }
    );

    const data = await res.json();
    // console.log(data);
    setEditMode(false);
    router.refresh();
  }

  async function handleDeleteMenu() {
    // console.log(id);
    const res = await fetch(
      "https://api.tablebackend.com/v1/rows/LWUqcyucqlVW",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([id]),
      }
    );
    const data = await res.json();
    // console.log(data);
    router.refresh();
  }

  return (
    <div className="border-2 p-4 rounded-lg shadow">
      {editMode ? (
        <div className="space-y-4">
          <input
            value={newName || name}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            value={newAge || age}
            onChange={(e) => setNewAge(e.target.value)}
          />
        </div>
      ) : (
        <div className="space-y-1 mb-3 p-2">
          <div className="text-3xl">{name}</div>
          <div className="text-1xl font-bold">Rp {age}</div>
        </div>
      )}

      <div className="lg:flex lg:flex-row flex flex-col gap-4 mt-3">
        {editMode ? (
          <button onClick={handleUpdateMenu}>Update</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
        <button onClick={handleDeleteMenu}>Delete</button>
      </div>
    </div>
  );
};
