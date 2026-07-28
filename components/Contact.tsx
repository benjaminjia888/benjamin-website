export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="rounded-3xl bg-black px-8 py-12 text-white">
        <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          I&apos;m always interested in meeting builders, creators,
          entrepreneurs, and people working on meaningful ideas.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:your-email@example.com"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            className="rounded-xl border border-white/30 px-6 py-3 font-medium text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            className="rounded-xl border border-white/30 px-6 py-3 font-medium text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}