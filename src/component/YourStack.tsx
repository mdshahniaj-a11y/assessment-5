import { FaTrash } from "react-icons/fa";
import type { ITechnology } from "./TechnologyCard";

interface YourStackProps {
    selectedTechnologies: ITechnology[];
    handleDelete: (id: string) => void;
    handleDeleteAll: () => void;
}

const YourStack = ({
    selectedTechnologies,
    handleDelete,
    handleDeleteAll,
}: YourStackProps) => {
    return (
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

            {/* Title */}
            <div className="flex items-center justify-between">

                <h2 className="font-bold text-gray-900">
                    Your Stack
                </h2>

                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-500">
                    {selectedTechnologies.length}
                </span>

            </div>

            <p className="mt-1 text-xs text-gray-400">
                {selectedTechnologies.length === 0
                    ? "No technologies selected yet."
                    : `${selectedTechnologies.length} technologies selected.`}
            </p>

            {/* Remove All */}
            {selectedTechnologies.length > 0 && (
                <button
                    onClick={handleDeleteAll}
                    className="mt-2 text-xs font-semibold text-red-500 hover:underline"
                >
                    Remove All
                </button>
            )}

            {/* Empty Stack */}
            {selectedTechnologies.length === 0 && (
                <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-8 text-center">
                    <p className="text-sm text-gray-400">
                        Your stack is empty.
                    </p>
                </div>
            )}

            {/* Selected Technologies */}
            <div className="mt-4 space-y-3">

                {selectedTechnologies.map((technology) => (
                    <div
                        key={technology.id}
                        className="flex items-center justify-between rounded-lg border border-gray-100 p-2"
                    >

                        <div className="flex items-center gap-3">

                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-8 w-8 object-contain"
                            />

                            <div>
                                <h3 className="text-sm font-semibold">
                                    {technology.name}
                                </h3>

                                <p className="text-xs text-gray-400">
                                    {technology.category}
                                </p>
                            </div>

                        </div>

                        {/* Delete */}
                        <button
                            onClick={() => handleDelete(technology.id)}
                            className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                        >
                            <FaTrash size={13} />
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default YourStack;