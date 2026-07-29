const experiences = [
  {
    role: "Founder & Operator",
    company: "Campus Food Delivery Platform",
    location: "Huzhou, China",
    period: "September 2025 – November 2025",
    description:
      "Founded and operated a campus food delivery platform connecting university students, local restaurants, and delivery riders.",
    highlights: [
      "Registered a sole proprietorship to support the operation of the business.",
      "Coordinated with a third-party development company to build a WeChat Mini Program.",
      "Negotiated partnerships with local restaurants and managed merchant onboarding.",
      "Added menus, products, pricing, and operating information to the platform.",
      "Purchased and installed receipt printers for partner merchants.",
      "Recruited riders and coordinated electric bikes and delivery operations.",
      "Managed marketing, fulfillment, customer service, and merchant relationships.",
    ],
  },
  {
    role: "Campus Marketing Team Leader",
    company: "Student SIM Card Program",
    location: "Huzhou, China",
    period: "February 2025 – October 2025",
    description:
      "Led a seven-person team responsible for marketing and selling student mobile plans during the university enrollment season.",
    highlights: [
      "Developed customer acquisition strategies on Xiaohongshu and Douyin.",
      "Converted public social media traffic into private WeChat communities.",
      "Studied how photography, headlines, copywriting, and posting strategies affected performance.",
      "Built a personal brand around Huzhou University and generated organic search traffic.",
      "Assigned responsibilities and helped team members improve sales communication.",
    ],
  },
  {
    role: "Loan Sales Consultant",
    company: "Financial Services Company",
    location: "Shanghai, China",
    period: "November 2025 – May 2026",
    description:
      "Worked with prospective customers seeking personal and business financing solutions.",
    highlights: [
      "Conducted outbound calls using company-provided customer leads.",
      "Identified financing needs and invited qualified prospects to consultations.",
      "Assessed income, liabilities, credit conditions, and funding requirements.",
      "Matched customers with suitable personal or business financing products.",
      "Explained costs, application requirements, structures, and potential risks.",
      "Developed consultative selling, persuasion, and emotional control skills.",
    ],
  },
  {
    role: "Hospitality Operations Team Member",
    company: "ICONA Windrift",
    location: "Avalon, New Jersey, United States",
    period: "June 2026 – Present",
    description:
      "Work as part of a multicultural team in a fast-paced hotel and restaurant environment.",
    highlights: [
      "Support kitchen preparation, cleaning, organization, and closing operations.",
      "Maintain sanitation standards during high-volume service periods.",
      "Coordinate with coworkers from different cultural and language backgrounds.",
      "Balance multiple jobs and independent projects while living abroad.",
      "Develop discipline, adaptability, resilience, and cross-cultural communication.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-gray-200 bg-gray-50 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Building through real-world work
        </h2>

        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="rounded-3xl border border-gray-200 bg-white p-7 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
                <div>
                  <h3 className="text-2xl font-bold">{experience.role}</h3>

                  <p className="mt-2 font-medium text-gray-700">
                    {experience.company}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {experience.location}
                    <br />
                    {experience.period}
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-8 text-gray-700">
                    {experience.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-gray-600">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}