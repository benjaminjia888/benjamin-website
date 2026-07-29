const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Benjamin Jia
        </a>

        <div className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Let&apos;s Connect
        </a>
      </div>
    </nav>
  );
}