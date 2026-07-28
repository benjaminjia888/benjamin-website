const projects = [
  {
    title: "AI Interview Platform",
    description:
      "An AI-powered platform for recording interviews, organizing questions, and turning conversations into useful content.",
    tags: ["AI", "Next.js", "Content"],
  },
  {
    title: "Translation Extension",
    description:
      "A browser extension designed to help users translate content and improve language-learning efficiency.",
    tags: ["Chrome Extension", "JavaScript", "Language"],
  },
  {
    title: "Campus Service Platform",
    description:
      "A student service and trading platform connecting people who need help with students who can provide services.",
    tags: ["Entrepreneurship", "Platform", "Students"],
  },
  {
    title: "School fo Hustle",
    description: "A business media channle ask people how to get rich for the younger generation.",
    tags: ["media", "influence"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold">Projects</h2>

      <p className="mt-4 text-lg text-gray-600">
        Some ideas and products I have built or am currently exploring.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 leading-relaxed text-gray-600">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}