import React, { useEffect, useState } from "react";

const CategoryToysdemo = () => {
  const [categories, setCategories] = useState([]);
  const [toys, setToys] = useState([]);
  const [selectedAgeGroupId, setSelectedAgeGroupId] = useState(null);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data || []);

        
        const map = new Map();
        data.forEach((toy) => {
          if (toy.ageGroupId != null && !map.has(toy.ageGroupId)) {
            map.set(toy.ageGroupId, {
              ageGroupId: toy.ageGroupId,
              ageGroup: toy.ageGroup,
            });
          }
        });

        const uniqueCategories = Array.from(map.values()).sort(
          (a, b) => a.ageGroupId - b.ageGroupId
        );

        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Failed to load toys.json:", err);
      });
  }, []);

  
  const colorForId = (id) => {
    const h = (id * 57) % 360; 
    const s = 65; 
    const l = 50; 
    return `hsl(${h} ${s}% ${l}%)`;
  };

  
  const handleSelect = (ageGroupId) => {
    setSelectedAgeGroupId((prev) => (prev === ageGroupId ? null : ageGroupId));
  };

  
  const filteredToys =
    selectedAgeGroupId == null
      ? toys
      : toys.filter((toy) => toy.ageGroupId === selectedAgeGroupId);

  return (
    <div className="py-6">
      <h1 className="text-blue-500 text-3xl font-semibold py-5 text-center">
        Shop By Kids Age
      </h1>

      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* "All" button */}
          <button
            onClick={() => setSelectedAgeGroupId(null)}
            aria-pressed={selectedAgeGroupId === null}
            className={`btn w-full border-none text-lg font-medium rounded-xl shadow-md transition duration-300 px-4 py-3
              ${selectedAgeGroupId === null ? "ring-2 ring-offset-2" : ""}`}
            style={{
              background:
                selectedAgeGroupId === null ? "linear-gradient(90deg,#7c3aed,#8b5cf6)" : "#efefef",
              color: selectedAgeGroupId === null ? "white" : "#111827",
            }}
            title="Show all toys"
          >
            All Ages
          </button>

          {categories.map((category) => {
            const isSelected = selectedAgeGroupId === category.ageGroupId;
            return (
              <button
                key={category.ageGroupId}
                onClick={() => handleSelect(category.ageGroupId)}
                aria-pressed={isSelected}
                className={`w-full text-lg font-medium rounded-xl shadow-md transition duration-300 px-4 py-3 focus:outline-none ${
                  isSelected ? "ring-2 ring-offset-2" : ""
                }`}
                style={{
                  background: colorForId(category.ageGroupId),
                  color: "white",
                }}
                title={`Filter by ${category.ageGroup}`}
              >
                {category.ageGroup}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-4 text-sm text-gray-600">
          {selectedAgeGroupId == null
            ? `Showing all toys (${toys.length})`
            : `Showing toys for age group ${
                categories.find((c) => c.ageGroupId === selectedAgeGroupId)
                  ?.ageGroup || selectedAgeGroupId
              } (${filteredToys.length})`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredToys.map((toy) => (
            <div
              key={toy.toyId}
              className="bg-white rounded-2xl shadow-md overflow-hidden border p-4 flex flex-col"
            >
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-44 object-cover rounded-md mb-3"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{toy.toyName}</h3>
                <p className="text-sm text-gray-500 mb-2">{toy.subCategory}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {toy.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="font-bold text-lg">${toy.price}</span>
                  <div className="text-sm text-gray-500">Qty: {toy.availableQuantity}</div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-yellow-500">⭐ {toy.rating}</div>
                  <div className="text-xs text-gray-400">{toy.ageGroup}</div>
                </div>
              </div>
            </div>
          ))}

          {filteredToys.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-8">
              No toys found for this age group.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryToysdemo;
