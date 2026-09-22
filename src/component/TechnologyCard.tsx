// import { FaStar } from "react-icons/fa";

// export interface ITechnology {
//     id: string;
//     name: string;
//     category: string;
//     description: string;
//     icon: string;
//     rating: number;
//     difficulty: string;
//     badge: string;
// }

// interface TechnologyCardProps {
//     technology: ITechnology;
//     selectedTechnologies: ITechnology[];
//     handleAddToStack: (technology: ITechnology) => void;
// }

// const TechnologyCard = ({
//     technology,
//     selectedTechnologies,
//     handleAddToStack,
// }: TechnologyCardProps) => {

//     const isSelected = selectedTechnologies.some(
//         (item) => item.id === technology.id
//     );

//     return (
//         <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <div className="flex items-center justify-between">

//                 <img
//                     src={technology.icon}
//                     alt={technology.name}
//                     className="h-8 w-8 object-contain"
//                 />

//                 <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-500">
//                     {technology.badge}
//                 </span>

//             </div>

//             {/* Name */}
//             <h2 className="mt-4 text-lg font-bold text-gray-900">
//                 {technology.name}
//             </h2>

//             {/* Description */}
//             <p className="mt-2 min-h-15 text-xs leading-5 text-gray-500">
//                 {technology.description}
//             </p>

//             {/* Information */}
//             <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

//                 <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
//                     {technology.category}
//                 </span>

//                 <span className="text-xs text-gray-500">
//                     {technology.difficulty}
//                 </span>

//                 <span className="flex items-center gap-1 text-xs">
//                     <FaStar className="text-yellow-400" />
//                     {technology.rating}
//                 </span>

//             </div>

//             {/* Add Button */}
//             <button
//                 onClick={() => handleAddToStack(technology)}
//                 disabled={isSelected}
//                 className={`mt-4 w-full rounded-lg py-2 text-sm font-medium text-white ${isSelected
//                     ? "cursor-not-allowed bg-gray-400"
//                     : "bg-gray-900 hover:bg-pink-500"
//                     }`}
//             >
//                 {isSelected ? "Added to Stack" : "Add to Stack"}
//             </button>

//         </div>
//     );
// };

// export default TechnologyCard;