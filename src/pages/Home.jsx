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

      {/* NAV */}
      <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Ethan Brown
          </a>

          <div className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Economics · Data Analytics · Applied Research
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            I use data to study real-world economic and policy questions.
          </h1>

          <p className="mt-6 text-lg text-zinc-600">
            Undergraduate at Berry College studying Economics and Data Analytics.
            Interested in econometrics, applied research, and policy.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <a href="#projects" className="rounded-full bg-zinc-950 px-5 py-3 text-white text-sm">
              View Projects
            </a>

            <a href={RESUME_URL} target="_blank" className="rounded-full border px-5 py-3 text-sm">
              Resume
            </a>

            <a href={LINKEDIN_URL} target="_blank" className="rounded-full border px-5 py-3 text-sm">
              LinkedIn
            </a>

            <a href={GITHUB_URL} target="_blank" className="rounded-full border px-5 py-3 text-sm">
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={headshot} className="w-72 h-72 rounded-3xl object-cover" />
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-semibold">Education</h2>

        <div className="mt-10 space-y-8"> {/* 🔥 FIXED SPACING */}

          {/* UTK */}
          <div className="rounded-3xl border bg-zinc-50 p-6 flex gap-5">
            <LogoBox src={utkLogo} />

            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">UT Knoxville</h3>
                  <p className="text-zinc-600">M.A. Economics</p>
                </div>
                <p className="text-sm text-zinc-500">2026–2027</p>
              </div>
            </div>
          </div>

          {/* BERRY */}
          <div className="rounded-3xl border bg-zinc-50 p-6 flex gap-5">
            <LogoBox src={berryLogo} />

            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Berry College</h3>
                  <p className="text-zinc-600">B.S. Economics & Data Analytics</p>
                </div>
                <p className="text-sm text-zinc-500">2022–2026</p>
              </div>

              <p className="mt-4 text-sm text-zinc-600">
                Dean’s List · Barry Griswell Scholar · Zell Miller Recipient
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-semibold">Experience</h2>

        <div className="mt-10 space-y-8">

          {/* GAS SOUTH */}
          <div className="rounded-3xl border bg-white p-6 flex gap-5">
            <LogoBox src={gasSouthLogo} />

            <div>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Gas South</h3>
                  <p className="text-zinc-600">Data Engineering Intern</p>
                </div>
                <p className="text-sm text-zinc-500">Summer 2025</p>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm text-zinc-600">
                <li>Optimized SQL queries for reporting pipelines</li>
                <li>Automated recurring reports</li>
                <li>Validated data using SSMS</li>
                <li>Supported ETL updates via Azure DevOps</li>
              </ul>
            </div>
          </div>

          {/* SHIPYARD */}
          <div className="rounded-3xl border bg-white p-6 flex gap-5">
            <LogoBox src={shipyardLogo} />

            <div>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">The Shipyard</h3>
                  <p className="text-zinc-600">General Manager</p>
                </div>
                <p className="text-sm text-zinc-500">2023–Present</p>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm text-zinc-600">
                <li>$500K+ annual revenue operation</li>
                <li>Manage 15+ employees</li>
                <li>Implemented Thrive POS + Teams systems</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}