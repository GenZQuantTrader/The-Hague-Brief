import Link from "next/link";
import { interviews } from "@/data/publications";

export default function InterviewsPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Conversations
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black">
          Interviews
        </h1>
        <p className="mt-2 text-neutral-600">
          Long-form conversations to read online or download as PDF transcripts.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {interviews.map((item) => (
          <article
            key={item.slug}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 bg-white/85 p-7 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:bg-white hover:shadow-xl"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                {item.guest} • {item.guestRole}
              </p>
              <Link href={`/interviews/${item.slug}`}>
                <h2 className="mt-2 font-serif text-2xl font-bold text-black transition-colors hover:text-emerald-700">
                  {item.title}
                </h2>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-4">
              <Link
                href={`/interviews/${item.slug}`}
                className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-emerald-700"
              >
                Read Transcript
              </Link>
              <a
                href={item.fileUrl}
                download={item.fileName}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:border-emerald-700 hover:text-emerald-700"
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