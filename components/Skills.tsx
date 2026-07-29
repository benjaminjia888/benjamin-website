const skillGroups = [
  {
    title: "Business and Growth",
    skills: [
      "Customer Acquisition",
      "Digital Marketing",
      "Social Media Strategy",
      "Personal Branding",
      "Lead Generation",
      "Consultative Sales",
      "Business Development",
      "Negotiation",
      "Customer Relationship Management",
    ],
  },
  {
    title: "Operations and Leadership",
    skills: [
      "Startup Operations",
      "Marketplace Operations",
      "Team Leadership",
      "Merchant Onboarding",
      "Logistics Coordination",
      "Project Management",
      "Customer Support",
      "Problem Solving",
    ],
  },
  {
    title: "Technology",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Git and GitHub",
      "Vercel",
      "Web Development Fundamentals",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Content and Communication",
    skills: [
      "Interviewing",
      "Short-Form Video",
      "Storytelling",
      "Copywriting",
      "Public Communication",
      "Cross-Cultural Communication",
      "English",
      "Mandarin Chinese",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-gray-200 bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          What I bring
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/15 p-7"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}