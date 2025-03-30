import React, { useState } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-65 from-purple-500 to-pink-500">
      <h1 className="text-2xl font-bold">Notes</h1>
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="text"
        placeholder="Search Notes"
        onChange={handleSearch}
      />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 mt-2"
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 mt-2"
          placeholder="Description"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-2 cursor-pointer"
        >
          Add Note
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 items-center">
        {notes
          .filter((note) => note.title.includes(search))
          .map((note, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-white">{note.title}</h3>
              <p className="text-sm text-white">{note.description}</p>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded-md mt-2 cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      {notes.filter((note) => note.title.includes(search)).length === 0 && (
        <p className="text-white">No notes found</p>
      )}
      {notes.length > 0 && (
        <p className="text-sm mt-2 text-white">Total notes: {notes.length}</p>
      )}
      <p className="text-sm mt-2 text-white">
        Currently showing{" "}
        {notes.filter((note) => note.title.includes(search)).length}
        {notes.filter((note) => note.title.includes(search)).length > 1
          ? " notes"
          : " note"}
      </p>
    </div>
  );
};

export default Notes;
