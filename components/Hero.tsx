import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-gray-200 px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Builder · Operator · Storyteller
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            I build businesses, communities, and stories from the ground up.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            I am a computer science student, hands-on operator, and aspiring
            entrepreneur with experience in digital marketing, sales,
            marketplace operations, team leadership, and content creation.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            From leading a campus sales team to launching a food delivery
            platform, I learn by turning ideas into real-world projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              View My Work
            </a>

            <a
              href="https://www.linkedin.com/in/benjamin-jia-845169420?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-300 px-7 py-3 font-medium transition hover:bg-gray-100"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-12 border-l-2 border-black pl-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Current Focus
            </p>

            <p className="mt-2 max-w-2xl leading-7 text-gray-700">
              Learning technology, interviewing interesting people, and
              building projects that connect business, media, and the global
              market.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-100">
            <Image
              src="/profile.jpg"
              alt="Portrait of Benjamin Jia"
              width={520}
              height={650}
              priority
              className="h-[500px] w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}