import { Link } from "react-router-dom";
import headshot from "../assets/EthanHeadshot.JPG";
import { projects } from "../data/projects";


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Ethan Brown
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight">
            Economics, data analytics, and policy analysis.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            I am an undergraduate student at Berry College studying Economics and
            Data Analytics. My interests focus on econometrics, policy analysis,
            and using real-world data to answer questions in economics, business,
            and public policy. I plan to pursue a PhD in Economics.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT (HEADSHOT) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={headshot}
            alt="Ethan Brown"
            className="w-64 h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition"
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Selected Projects</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-500 transition"
            >
              <p className="text-sm text-zinc-400">
                {project.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Experience</h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">
              General Manager — The Shipyard
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Managed daily operations for Berry College’s student-run bookstore,
              coordinated student staff, and worked with sales and customer data
              to improve decision-making and planning.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">
              Economics & Data Analytics Student
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Coursework and projects focused on econometrics, machine learning,
              data visualization, and policy analysis using real-world datasets.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Python",
            "R",
            "SQL",
            "Pandas",
            "scikit-learn",
            "Power BI",
            "Excel",
            "Econometrics",
            "Machine Learning",
            "Data Visualization",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="mt-4 text-zinc-300">
          Email: your.email@example.com
        </p>
      </section>

    </main>
  );
}