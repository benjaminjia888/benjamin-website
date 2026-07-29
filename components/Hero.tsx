import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 md:grid-cols-2"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Computer Science · AI · Entrepreneurship
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
          Benjamin Jia
        </h1>

        <h2 className="mt-6 text-2xl leading-relaxed text-gray-600 md:text-3xl">
          Building AI products.
          <br />
          Exploring technology.
          <br />
          Documenting my journey.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-700">
          Computer Science student passionate about artificial intelligence,
          software development, entrepreneurship, and creating meaningful
          products.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="#projects"
            className="rounded-xl bg-black px-8 py-3 text-white transition hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="rounded-xl border border-gray-300 px-8 py-3 transition hover:bg-gray-100"
          >
            About Me
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/profile.jpg"
          alt="Portrait of Benjamin Jia"
          width={420}
          height={520}
          priority
          className="h-auto w-full max-w-sm rounded-3xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
}