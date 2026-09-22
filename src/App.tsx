import { useEffect, useState } from "react";

import Banner from "./component/Banner";
import Nav from "./component/Nav";
import TechnologyCard, { type ITechnology, } from "./component/TechnologyCard";
import YourStack from "./component/YourStack";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  // JSON data load
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  // Add to Stack
  const handleAddToStack = (technology: ITechnology) => {
    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Delete
  const handleDelete = (id: string) => {
    const newStack = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );

    setSelectedTechnologies(newStack);

    toast.info("Technology removed!");
  };

  return (
    <>
      <Nav />

      <Banner />

      <div className="container mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h1>
        <p>Pick one technology per category to build your ideal stack.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                selectedTechnologies={selectedTechnologies}
                handleAddToStack={handleAddToStack}
              />
            ))}

          </div>

          {/* Your Stack */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleDelete={handleDelete}
          />

        </div>
      </div>

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;