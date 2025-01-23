import { Button } from "antd";

export default function HeaderMenu() {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <h1
          className="text-2xl font-bold md:mr-10 lg:mr-20 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Crave Cafe
        </h1>
        <nav>
          <ul className="flex md:space-x-4 lg:space-x-6 ">
            <li>
              <a
                href="/"
                className="hover:bg-btnPrimaryHover px-3 py-2 rounded-2xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="hover:bg-btnPrimaryHover px-3 py-2 rounded-2xl"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:bg-btnPrimaryHover px-3 py-2 rounded-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:bg-btnPrimaryHover px-3 py-2 rounded-2xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <Button
          className="bg-secondary text-white px-4 py-2 rounded-2xl"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </Button>
        <Button
          onClick={() => (window.location.href = "/signup")}
          className="bg-primary hover:bg-btnPrimaryHover text-secondary px-4 py-2 rounded-2xl ml-4"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
