import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/" className="mt-6 inline-block underline">
            Back home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto max-w-4xl px-6 py-20">

        {/* Back */}
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-950">
          ← Back to portfolio
        </Link>

        {/* Header */}
        <p className="mt-12 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          {project.description}
        </p>

        {/* Tools */}
        {project.tools && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Links (AUTO CONDITIONAL) */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
            >
              <h2 className="text-xl font-semibold">Project PDF</h2>
              <p className="mt-3 text-sm text-zinc-600">
                View report, paper, or presentation.
              </p>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
            >
              <h2 className="text-xl font-semibold">GitHub Repository</h2>
              <p className="mt-3 text-sm text-zinc-600">
                View code and implementation details.
              </p>
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
            >
              <h2 className="text-xl font-semibold">Code File</h2>
              <p className="mt-3 text-sm text-zinc-600">
                Open notebook or script.
              </p>
            </a>
          )}

          {project.data && (
            <a
              href={project.data}
              target="_blank"
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
            >
              <h2 className="text-xl font-semibold">Data File</h2>
              <p className="mt-3 text-sm text-zinc-600">
                View dataset or sample data.
              </p>
            </a>
          )}
          {project.map && (
            <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 px-6">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-semibold">Interactive Map</h2>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600">
                  This map visualizes Airbnb listings across major U.S. cities,
                  highlighting spatial pricing patterns and clustering behavior.
                </p>

                <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
                  <iframe
                    src={project.map}
                    className="h-[85vh] w-full"
                    title="Airbnb Map"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}