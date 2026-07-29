export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-gray-200 px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            About Me
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-gray-700">
          <p>
            I am Benjamin Jia, a computer science student, entrepreneur, and
            content creator from Hunan, China.
          </p>

          <p>
            I grew up in a small rural village, where I learned to be
            independent, resourceful, and curious about how the world works. I
            have never wanted to limit myself to one job title. I am most
            interested in understanding how people, technology, business, and
            systems work together.
          </p>

          <p>
            My experience has taken me through many different environments. I
            have traded used electric bikes, led a seven-person campus
            marketing team, built a student food delivery platform, worked in
            financial sales in Shanghai, and joined a multicultural hospitality
            team in the United States.
          </p>

          <p>
            These experiences taught me how to acquire customers, build trust,
            manage people, negotiate with partners, solve operational problems,
            and keep moving when plans do not work perfectly.
          </p>

          <p>
            Today, I am developing my technical skills while creating interview
            and documentary-style content. My long-term goal is to combine
            technology, entrepreneurship, and media to build useful products
            and connect people across China and the global market.
          </p>

          <div className="mt-10 rounded-3xl bg-gray-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              My Philosophy
            </p>

            <p className="mt-4 text-2xl font-semibold text-black">
              I learn fastest by building.
            </p>

            <p className="mt-4">
              I believe real growth comes from taking ownership, entering
              unfamiliar environments, solving practical problems, and
              consistently turning ideas into action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}