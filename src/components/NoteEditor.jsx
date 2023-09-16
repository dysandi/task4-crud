"use client";

import { Input } from "./Input";
import { NoteCard } from "./NoteCard";

export const NoteEditor = ({ menuData }) => {
  // console.log(menuData);
  return (
    <div className="mt-5 mx-8">
      <div className="my-5 text-center">
        <h1 className="text-4xl">Foodee</h1>
        <h3 className="text-2xl font-bold">Food & Eatery</h3>
      </div>
      <div className="space-y-8">
        <Input />
        <div className="space-y-4">
          <div className="text-3xl text-center lg:text-left">Our Menu</div>
          {menuData.map(({ _id, name, age }) => {
            return <NoteCard key={_id} id={_id} name={name} age={age} />;
          })}
        </div>
      </div>
    </div>
  );
};
