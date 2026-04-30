import { Link } from "react-router-dom";
import headshot from "../assets/EthanHeadshot.JPG";
import berryLogo from "../assets/berry-logo.jpg";
import utkLogo from "../assets/UTK-logo.png";
import gasSouthLogo from "../assets/gassouth-logo.jpg";
import shipyardLogo from "../assets/shipyard-logo.jpg";
import { projects } from "../data/projects";

const LINKEDIN_URL = "https://www.linkedin.com/in/ethanbrown04/";
const GITHUB_URL = "https://github.com/ebrown04";
const RESUME_URL = "/resume.pdf";
const EMAIL = "Ethan.Brown@vikings.berry.edu";

function LogoBox({ src, alt }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Ethan Brown
          </a>

          <div className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#education" className="hover:text-zinc-950">Education</a>
            <a href="#experience" className="hover:text-zinc-950">Experience</a>
            <a href="#projects" className="hover:text-zinc-950">Projects</a>
            <a href="#skills" className="hover:text-zinc-950">Skills</a>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Economics · Data Analytics · Applied Microeconomic Research
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
            <a href="#projects" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
              View Projects
            </a>

            <a href={RESUME_URL} target="_blank" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:border-zinc-950">
              Resume
            </a>

            <a href={LINKEDIN_URL} target="_blank" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:border-zinc-950">
              LinkedIn
            </a>

            <a href={GITHUB_URL} target="_blank" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:border-zinc-950">
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

      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Education
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Academic background
        </h2>

        <div className="mt-8 space-y-5">


          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex gap-5">
              <LogoBox src={utkLogo} alt="University of Tennessee Knoxville logo" />

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      University of Tennessee, Knoxville
                    </h3>
                    <p className="mt-1 text-zinc-600">
                      M.A. Economics
                    </p>
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    Aug. 2026 – May 2027, expected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
                  <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex gap-5">
              <LogoBox src={berryLogo} alt="Berry College logo" />

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">Berry College</h3>
                    <p className="mt-1 text-zinc-600">
                      B.S. Economics and Data Analytics
                    </p>
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    Aug. 2022 - May 2026
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Dean’s List · Barry Griswell Scholar · TRIO SSS Scholar · Zell Miller Recipient
                </p>
              </div>
            </div>
          </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Relevant work experience
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex gap-5">
              <LogoBox src={gasSouthLogo} alt="Gas South logo" />

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Data Engineering Intern
                    </h3>
                    <p className="mt-1 text-zinc-600">Gas South · Atlanta, Georgia</p>
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    May 2025 – August 2025
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
                  <li>
                    Optimized SQL queries to improve runtime efficiency and ensure cleaner data output across multiple reporting pipelines.
                  </li>
                  <li>
                    Automated recurring reports, reducing manual workload for the business intelligence team.
                  </li>
                  <li>
                    Performed data validation in SQL Server Management Studio to improve reporting reliability.
                  </li>
                  <li>
                    Supported version-controlled ETL updates through Azure DevOps in collaboration with senior engineers.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex gap-5">
              <LogoBox src={berryLogo} alt="Berry College logo" />

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Economics Tutor & Research Associate
                    </h3>
                    <p className="mt-1 text-zinc-600">Berry College · Rome, Georgia</p>
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    Jan. 2023 – May 2023; May 2025 – Present
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
                  <li>
                    Tutored principles-level coursework emphasizing economic literacy, market price determination, government regulation, and international trade.
                  </li>
                  <li>
                    Supported students in applied calculus and statistics, including optimization, probability, and introductory regression analysis used in economic and business applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex gap-5">
              <LogoBox src={shipyardLogo} alt="The Shipyard logo" />

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Student General Manager
                    </h3>
                    <p className="mt-1 text-zinc-600">
                      The Shipyard, Berry College
                    </p>
                  </div>

                  <p className="text-sm font-medium text-zinc-500">
                    Jan. 2023 – Present
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
                  <li>
                    Lead operations for a student-run enterprise generating $500K+ in annual revenue.
                  </li>
                  <li>
                    Manage training and day-to-day supervision of 15+ student employees.
                  </li>
                  <li>
                    Implemented new systems, including Thrive POS and Microsoft Teams, to streamline communication and order processing.
                  </li>
                </ul>
              </div>
            </div>
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
            "Stata",
            "Pandas",
            "scikit-learn",
            "Power BI",
            "Excel",
            "SQL Server Management Studio",
            "Azure DevOps",
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
            economics graduate preparation, and projects involving real-world data.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950">
              Email
            </a>

            <a href={LINKEDIN_URL} target="_blank" className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white">
              LinkedIn
            </a>

            <a href={GITHUB_URL} target="_blank" className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white">
              GitHub
            </a>

            <a href={RESUME_URL} target="_blank" className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:border-white">
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}