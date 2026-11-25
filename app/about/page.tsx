export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-10">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Who We Are
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Independent Ideas, Enduring Publications.
        </h1>
        <p className="text-base leading-relaxed text-neutral-700">
          Frontiers is a publishing house and editorial platform dedicated to
          producing curated magazines, candid interviews, reported articles, and
          thoughtful opinion columns. Founded to bridge modern digital access
          with the permanence of classic print editions, we create work meant to
          be read, saved, and revisited.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Our Mission</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            To inform and inspire readers through rigorous journalism, open
            dialogue, and accessible downloadable publications.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Our Vision</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            To become a trusted home for long-form storytelling, sharp
            commentary, and meaningful conversations across industries and
            communities.
          </p>
        </div>
      </div>
    </section>
  );
}