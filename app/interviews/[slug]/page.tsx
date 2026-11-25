import Link from "next/link";
import { notFound } from "next/navigation";
import { interviews } from "@/data/publications";

export function generateStaticParams() {
  return interviews.map((item) => ({ slug: item.slug }));
}

export default async function InterviewReaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const interview = interviews.find((item) => item.slug === slug);

  if (!interview) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-[0_20px_50px_-12px_rgba(10,10,10,0.08)] backdrop-blur-md md:p-12">
      <Link
        href="/interviews"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 hover:text-black"
      >
        ← Back to Interviews
      </Link>

      <header className="space-y-4 border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Featured Conversation • {interview.date}
        </p>

        <h1 className="font-serif text-3xl font-bold leading-tight text-black sm:text-5xl">
          {interview.title}
        </h1>

        <p className="text-lg leading-relaxed text-neutral-600">
          {interview.summary}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div>
            <p className="text-sm font-semibold text-black">{interview.guest}</p>
            <p className="text-xs text-neutral-500">{interview.guestRole}</p>
          </div>

          <a
            href={interview.fileUrl}
            download={interview.fileName}
            className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-emerald-700"
          >
            Download Full PDF
          </a>
        </div>
      </header>

      <div className="space-y-8">
        {interview.highlights.map((qa, index) => (
          <div key={index} className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-black">
              Frontiers: {qa.question}
            </h2>
            <p className="border-l-2 border-emerald-600 pl-4 text-base leading-8 text-neutral-800">
              <strong className="text-black">{interview.guest}:</strong> {qa.answer}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}