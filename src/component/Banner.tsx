import hero from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div>

            <div className="container mx-auto px-10 py-20">

                <div className="flex items-center justify-between">

                    {/* Left Side */}
                    <div className="w-1/2">

                        <h1 className="text-5xl font-bold text-gray-900">
                            Build Your Ideal
                        </h1>

                        <h2 className="text-5xl font-bold text-pink-500">
                            Development Stack
                        </h2>

                        <p className="mt-5 w-125 text-gray-600">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>

                        <div className="mt-8 flex gap-3">

                            <button className="rounded bg-pink-500 px-4 py-2 text-white">
                                Explore Technologies
                            </button>

                            <button className="rounded border border-gray-300 px-6 py-2">
                                Learn More
                            </button>

                        </div>

                    </div>


                    {/* Right Side */}
                    <div className="w-1/2 flex justify-center">

                        <img
                            src={hero}
                            alt="Development Stack"
                            className="w-80"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;