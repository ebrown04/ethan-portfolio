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
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-950">
          ← Back to portfolio
        </Link>

        <p className="mt-12 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          {project.description}
        </p>

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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href={project.pdf}
            target="_blank"
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
          >
            <h2 className="text-xl font-semibold">Project PDF</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Add your report, poster, presentation, or writeup here.
            </p>
          </a>

          <a
            href={project.github}
            target="_blank"
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-zinc-400"
          >
            <h2 className="text-xl font-semibold">Code / GitHub</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Link notebooks, scripts, dashboards, or project repositories.
            </p>
          </a>
        </div>

        <section className="mt-16 border-t border-zinc-200 pt-10">
          <h2 className="text-2xl font-semibold">Project structure</h2>

          <div className="mt-6 grid gap-5">
            {[
              ["Research Question", "What question was this project designed to answer?"],
              ["Data", "What dataset did you use, and what made it challenging or interesting?"],
              ["Methods", "What models, tools, or analytical methods did you apply?"],
              ["Results", "What did you find? Include model performance, visuals, or key takeaways."],
              ["Reflection", "What did this project teach you, and how would you improve it?"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}import { Link, useParams } from "react-router-dom";
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

        </div>

        {/* Project Structure */}
        <section className="mt-16 border-t border-zinc-200 pt-10">
          <h2 className="text-2xl font-semibold">Project breakdown</h2>

          <div className="mt-6 grid gap-5">
            {[
              ["Research Question", "What question was this project designed to answer?"],
              ["Data", "What dataset did you use, and what made it challenging?"],
              ["Methods", "What models, tools, or techniques were used?"],
              ["Results", "What did you find? Include metrics or key insights."],
              ["Reflection", "What did you learn and how would you improve it?"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}