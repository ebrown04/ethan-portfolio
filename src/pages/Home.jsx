import { Link } from "react-router-dom";
import headshot from "../assets/EthanHeadshot.JPG";
import { projects } from "../data/projects";

const LINKEDIN_URL = "https://www.linkedin.com/in/ethanbrown04";
const GITHUB_URL = "https://github.com/ebrown04";
const RESUME_URL = "/resume.pdf";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Ethan Brown
          </a>

          <div className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#projects" className="hover:text-zinc-950">Projects</a>
            <a href="#experience" className="hover:text-zinc-950">Experience</a>
            <a href="#skills" className="hover:text-zinc-950">Skills</a>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Economics · Data Analytics · Applied Research
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            I use data to study real-world economic and policy questions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            I am an undergraduate student at Berry College studying Economics and
            Data Analytics. My interests include econometrics, applied research,
            machine learning, policy analysis, and data-driven decision-making.
            My long-term goal is to pursue a PhD in Economics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              View Projects
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:border-zinc-950"
            >
              Resume
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:border-zinc-950"
            >
              LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:border-zinc-950"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
            <img
              src={headshot}
              alt="Ethan Brown"
              className="h-72 w-72 rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-medium text-zinc-500">Academic Direction</p>
            <h3 className="mt-2 text-xl font-semibold">PhD preparation</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Building a foundation in economics, mathematics, econometrics, and
              applied research.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-medium text-zinc-500">Technical Focus</p>
            <h3 className="mt-2 text-xl font-semibold">Data-driven analysis</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Using Python, R, SQL, visualization, and machine learning to work
              with real datasets.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-medium text-zinc-500">Applied Experience</p>
            <h3 className="mt-2 text-xl font-semibold">Operations + analytics</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Connecting business operations, student leadership, and analytical
              decision-making.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            A collection of applied projects in economics, analytics, data
            engineering, machine learning, and visualization.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg"
            >
              <p className="text-sm font-medium text-zinc-500">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {project.summary}
              </p>

              <p className="mt-5 text-sm font-medium text-zinc-950">
                View project →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Leadership and applied work
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-xl font-semibold">General Manager — The Shipyard</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Managed daily operations for Berry College’s student-run bookstore,
              coordinated student staff, and worked with sales and customer data
              to support planning and decision-making.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-xl font-semibold">Economics & Data Analytics Student</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Coursework and projects focused on econometrics, machine learning,
              visualization, business analytics, and applied research using
              real-world datasets.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Toolkit
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Skills
        </h2>

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
            "Data Engineering",
            "Data Visualization",
            "Policy Analysis",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] bg-zinc-950 p-8 text-white md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Let’s connect.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-300">
            I am interested in research opportunities, applied analytics work,
            economics graduate preparation, and projects involving real-world
            data.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:your.email@example.com"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950"
            >
              Email
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white"
            >
              LinkedIn
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white"
            >
              GitHub
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}