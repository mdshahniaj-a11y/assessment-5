import logo from "../assets/logo-text.png";
const Nav = () => {
    return (
        <div className="border-b border-gray-200 bg-white sticky top-0 z-50">

            <div className="flex items-center justify-between px-10 py-4 container mx-auto">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" />
                </div>


                {/* Menu */}
                <div className="flex gap-6">
                    <a className="text-pink-500" href="#">
                        Home
                    </a>

                    <a href="#">Technologies</a>

                    <a href="#">Projects</a>

                    <a href="#">About</a>

                    <a href="#">Contact</a>
                </div>


                {/* Button */}
                <div className="flex items-center gap-4">
                    <a href="#">Sign In</a>

                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Nav;