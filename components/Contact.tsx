const topics = [
  "Entrepreneurship",
  "Technology",
  "Content Collaboration",
  "Business Opportunities",
  "Interviews",
  "International Projects",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-black p-8 text-white md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          Contact
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300">
          I enjoy meeting entrepreneurs, developers, creators, investors, and
          people with unusual life experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/benjamin-jia-845169420?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 font-medium text-black"
          >
            Connect on LinkedIn
          </a>

          <a
            href="https://github.com/benjaminjia888"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 font-medium"
          >
            View My GitHub
          </a>

          <a
            href="mailto:jiabenja888@outlook.com"
            className="rounded-full border border-white/30 px-6 py-3 font-medium"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}