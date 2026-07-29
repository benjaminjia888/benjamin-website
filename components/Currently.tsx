const priorities = [
  "Improving my frontend and full-stack development skills.",
  "Building and refining my personal website.",
  "Interviewing people with interesting careers and life experiences.",
  "Publishing bilingual content across social media platforms.",
  "Learning how technology can support real businesses.",
  "Developing the discipline to build consistently over the long term.",
];

export default function Currently() {
  return (
    <section className="border-b border-gray-200 bg-gray-50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.4fr_0.6fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Currently
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What I&apos;m working on
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-700">
            I am currently living and working in the United States while
            continuing to develop my skills in technology, entrepreneurship,
            communication, and content creation.
          </p>

          <div className="mt-8 space-y-4">
            {priorities.map((priority) => (
              <div
                key={priority}
                className="flex gap-4 rounded-2xl bg-white p-5"
              >
                <span className="font-bold">→</span>
                <p className="leading-7 text-gray-700">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}