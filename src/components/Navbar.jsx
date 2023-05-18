import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="shadow-lg fixed w-full">
      <div className="flex items-center justify-between overflow-hidden h-20">
        <div className="w-32">
          <img
            className="object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c9oP9iogWvQicnx5nLxB3xpQv1pMskWnXA&usqp=CAU"
            alt="logo"
          />
        </div>

        <div>
          <ul className="sm:flex gap-20 mx-10 hidden">
            <li className="hover:text-blue-500">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="">Account</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>

        <button
          className="sm:hidden mx-10"
          onClick={() => (toggle ? setToggle(false) : setToggle(true))}
        >
          Show
        </button>
      </div>

      {toggle && (
        <div className="flex justify-center h-screen items-center">
          <ul className="leading-10 text-center">
            <li className="hover:text-blue-500">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="">Account</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
