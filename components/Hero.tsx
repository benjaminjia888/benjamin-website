export default function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-6 py-24">

      <h1 className="text-6xl font-bold tracking-tight">
        Benjamin Jia
      </h1>

      <h2 className="mt-6 text-3xl text-gray-600">
        Building AI products.
        <br />
        Exploring technology.
        <br />
        Documenting my journey.
      </h2>


      <p className="mt-8 max-w-2xl text-lg text-gray-700 leading-relaxed">
        Computer Science student passionate about
        artificial intelligence, software development,
        entrepreneurship, and creating meaningful products.
      </p>


      <div className="mt-10 flex gap-5">

        <button className="bg-black text-white px-8 py-3 rounded-xl">
          View Projects
        </button>


        <button className="border px-8 py-3 rounded-xl">
          Read Blog
        </button>

      </div>

    </section>
  );
}
