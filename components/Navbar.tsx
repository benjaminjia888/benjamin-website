export default function Navbar() {
  return (
    <nav className="w-full px-6 py-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Benjamin Jia
        </h1>

        <div className="flex gap-6 text-gray-600">
          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}