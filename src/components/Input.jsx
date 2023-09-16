"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
  const router = useRouter();
  const [menu, setMenu] = useState({
    name: "",
    age: "",
    // category: ""
  });

  async function handleCreateMenu() {
    const { name, age } = menu;
    const res = await fetch(
      "https://api.tablebackend.com/v1/rows/LWUqcyucqlVW",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ name: name, age: age }]),
      }
    );
    const data = await res.json();
    // console.log(data);
    router.refresh();
    setMenu("");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  return (
    <div className="space-y-4">
      <input
        className="input"
        placeholder="Menu Name"
        name="name"
        value={menu.name || ""}
        onChange={handleChange}
      />
      <input
        className="input"
        placeholder="Price"
        name="age"
        value={menu.age || ""}
        onChange={handleChange}
      />
      {/* <select>
        <option value="">Category</option>
      </select> */}
      <button
        className="block lg:ml-auto w-full lg:w-fit"
        onClick={handleCreateMenu}
      >
        Create
      </button>
    </div>
  );
};
