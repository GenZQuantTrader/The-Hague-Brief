import Link from "next/link";
import { opinions } from "@/data/publications";

export default function OpinionsPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Perspectives
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black">
          Opinions
        </h1>
        <p className="mt-2 text-neutral-600">
          Commentary, columns and distinct perspectives from our contributors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {opinions.map((post) => (
          <Link
            key={post.slug}
            href={`/opinions/${post.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white/85 p-6 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:bg-white hover:shadow-xl"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                {post.author}
              </p>
              <p className="text-xs text-neutral-500">{post.role}</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-black transition-colors group-hover:text-emerald-700">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
              <span className="text-neutral-500">{post.date}</span>
              <span className="font-semibold text-emerald-700 transition-transform group-hover:translate-x-1">
                Read Essay →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}