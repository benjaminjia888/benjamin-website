const values = [
  {
    title: "Ownership",
    description:
      "I take responsibility for the result instead of waiting for someone else to solve the problem.",
  },
  {
    title: "Curiosity",
    description:
      "I want to understand the underlying systems behind technology, business, people, and society.",
  },
  {
    title: "Execution",
    description:
      "Ideas become valuable only when they are tested and turned into real action.",
  },
  {
    title: "Resilience",
    description:
      "I am willing to enter unfamiliar environments, make mistakes, adjust, and continue moving forward.",
  },
  {
    title: "Consistency",
    description:
      "Long-term progress comes from continuing to learn and build, even when motivation changes.",
  },
];

export default function Values() {
  return (
    <section className="border-b border-gray-200 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Values
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          How I work
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="rounded-3xl bg-gray-100 p-6"
            >
              <p className="text-sm font-semibold text-gray-400">
                0{index + 1}
              </p>

              <h3 className="mt-8 text-xl font-bold">{value.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}