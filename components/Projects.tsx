const projects = [
  {
    title: "Campus Food Delivery Platform",
    subtitle: "Building a local marketplace from zero to one",
    description:
      "Created a WeChat-based ordering and delivery system connecting students, restaurants, and campus riders.",
    role: "Founder, Business Development, Product Operations and Logistics",
    lessons:
      "Marketplace operations, merchant management, logistics coordination, customer service, and entrepreneurial execution.",
  },
  {
    title: "Campus Growth and Personal Brand",
    subtitle: "Turning social media attention into customers",
    description:
      "Built a student-focused content and customer acquisition system using Douyin, Xiaohongshu, and WeChat.",
    role: "Team Leader, Content Strategist and Sales Operator",
    lessons:
      "Digital marketing, personal branding, lead generation, community growth, sales conversion, and team leadership.",
  },
  {
    title: "Interview and Storytelling Project",
    subtitle: "Learning from people through conversation",
    description:
      "Create interview-based content featuring students, workers, professionals, business owners, and ambitious people from different backgrounds.",
    role: "Interviewer, Content Creator and Video Editor",
    lessons:
      "Building a bilingual media brand focused on entrepreneurship, careers, personal growth, and real-life stories.",
  },
  {
    title: "Used Electric Bike Resale",
    subtitle: "Learning business through hands-on trading",
    description:
      "Sourced, evaluated, repaired, marketed, and resold approximately 40 used electric bikes, generating approximately ¥7,000 in profit.",
    role: "Independent Operator",
    lessons:
      "Sourcing, negotiation, pricing, resale operations, risk assessment, inventory management, and customer acquisition.",
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Learning web development by shipping a real product",
    description:
      "Designed, built, and deployed this portfolio to document my projects, experiences, and ideas.",
    role: "Designer and Developer",
    lessons:
      "Next.js, React, TypeScript, Git, GitHub, Vercel, debugging, deployment, and AI-assisted development.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-gray-200 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Selected Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Ideas turned into action
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold text-gray-400">
                0{index + 1}
              </p>

              <h3 className="mt-6 text-2xl font-bold">{project.title}</h3>

              <p className="mt-2 font-medium text-gray-500">
                {project.subtitle}
              </p>

              <p className="mt-6 leading-7 text-gray-700">
                {project.description}
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  My Role
                </p>

                <p className="mt-2 leading-7 text-gray-700">{project.role}</p>

                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  What I Learned
                </p>

                <p className="mt-2 leading-7 text-gray-700">
                  {project.lessons}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}