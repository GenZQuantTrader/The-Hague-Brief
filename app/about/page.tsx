export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-10">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Who We Are
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Global Issues, Expert Analysis and Thoughtful Conversations
        </h1>
        <p className="text-base leading-relaxed text-neutral-700">
          The Hague Brief is a full-grade publishing house and editorial platform dedicated to
           fostering conversations in international law and global issues through well curated magazines, candid interviews, reported articles and
          thoughtful opinion columns. We are powered by the International Law Asociation, Nigeria - Young Members' Committee. We have as main aim the provision of solution to the issues that bother manklind through thoughtful conversations and platforming of roboust expert analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Our Mission</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            To inform and inspire readers through rigorous journalism, open
            dialogue and accessible downloadable publications.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Our Vision</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            To become a trusted home for long-form storytelling, sharp
            commentary and meaningful conversations in International Law and global issues, while providing a platform for young lawyers and students to showcase their ideas and perspectives.
          </p>
        </div>
      </div>
    </section>
  );
}