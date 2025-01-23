export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
