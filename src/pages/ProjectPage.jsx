import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-zinc-300 underline">
          Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link to="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back to portfolio
        </Link>

        <p className="mt-10 text-sm uppercase tracking-[0.3em] text-zinc-400">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href={project.pdf}
            target="_blank"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-500 transition"
          >
            <h2 className="text-xl font-semibold">Project PDF</h2>
            <p className="mt-3 text-sm text-zinc-300">
              View report, writeup, poster, or presentation.
            </p>
          </a>

          <a
            href={project.github}
            target="_blank"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-500 transition"
          >
            <h2 className="text-xl font-semibold">Code / GitHub</h2>
            <p className="mt-3 text-sm text-zinc-300">
              View notebooks, scripts, or project files.
            </p>
          </a>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">What I would add here</h2>

          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• Research question</li>
            <li>• Dataset description</li>
            <li>• Methods used</li>
            <li>• Model results</li>
            <li>• Charts and screenshots</li>
            <li>• What I learned</li>
          </ul>
        </section>
      </section>
    </main>
  );
}