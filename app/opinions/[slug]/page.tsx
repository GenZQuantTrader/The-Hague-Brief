import Link from "next/link";
import { notFound } from "next/navigation";
import { opinions } from "@/data/publications";

export function generateStaticParams() {
  return opinions.map((item) => ({ slug: item.slug }));
}

export default async function OpinionReaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const opinion = opinions.find((item) => item.slug === slug);

  if (!opinion) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-[0_20px_50px_-12px_rgba(10,10,10,0.08)] backdrop-blur-md md:p-12">
      <Link
        href="/opinions"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 hover:text-black"
      >
        ← Back to Opinions
      </Link>

      <header className="space-y-4 border-b border-neutral-200 pb-6">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900">
          Opinion Column
        </span>

        <h1 className="font-serif text-3xl font-bold leading-tight text-black sm:text-5xl">
          {opinion.title}
        </h1>

        <p className="text-lg leading-relaxed text-neutral-600">
          {opinion.excerpt}
        </p>

        <div className="pt-2 text-sm">
          <p className="font-semibold text-black">{opinion.author}</p>
          <p className="text-xs text-neutral-500">
            {opinion.role} • {opinion.date}
          </p>
        </div>
      </header>

      <div className="space-y-6 text-base leading-8 text-neutral-800">
        {opinion.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}