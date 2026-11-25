import Image from "next/image";

type Issue = {
  title: string;
  volume: string;
  summary: string;
  coverUrl: string;
  fileUrl: string;
  fileName: string;
};

const issues: Issue[] = [
  {
    title: "Issue 01 — The New Architects",
    volume: "Vol. 01 • Inaugural Edition",
    summary:
      "Cover stories, deep-dive features, and essays from our inaugural release.",
    coverUrl: "/images/issue-01.jpg",
    fileUrl: "/downloads/magazine-01.pdf",
    fileName: "Frontiers-Magazine-Issue-01.pdf",
  },
];

export default function MagazinesPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Print-Grade Editions
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black">
          Magazines
        </h1>
        <p className="mt-2 text-neutral-600">
          Browse and download full magazine editions as PDFs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {issues.map((issue) => (
          <article
            key={issue.fileName}
            className="flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white/90 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:shadow-xl"
          >
            <div>
              <div className="relative h-64 w-full bg-gradient-to-br from-black via-neutral-900 to-emerald-950">
                <Image
                  src={issue.coverUrl}
                  alt={issue.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 pb-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  {issue.volume}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-black">
                  {issue.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {issue.summary}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <a
                href={issue.fileUrl}
                download={issue.fileName}
                className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-emerald-700"
              >
                Download PDF
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}