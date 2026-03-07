import { useEffect, useState } from "react";
import { getCategories, createCategory, deleteCategory } from "../services/categoryService";

function Categories() {

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    await createCategory(name);
    setName("");
    fetchCategories();
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    fetchCategories();
  };

  return (
    <div className="p-8">

      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <form onSubmit={handleCreate} className="mb-6 flex gap-2">
        <input
          className="border p-2 rounded w-64"
          placeholder="New category"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex justify-between bg-white p-3 rounded shadow"
          >
            {cat.name}

            <button
              onClick={() => handleDelete(cat.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Categories;