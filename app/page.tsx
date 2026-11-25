import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Editorial Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-y border-neutral-300 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-600">
        <span className="flex items-center gap-2 text-emerald-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
          ILA, Nigeria • Young Members Committee
        </span>
        <span>Global Issues • Expert Analysis</span>
        <span>Lagos • Hague • Global</span>
      </div>

      {/* Hero Split: Cover Story + Styled Magazine Mockup */}
      <section className="grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900">
            Cover Story • Quarterly Icon
          </span>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-black sm:text-6xl">
            Ituah Imhanze MCIArb UK, FCArb: Managing Partner, KENNA
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-600">
            "When I reflect on the moments that have shaped my career, I find that they have less to do with titles or landmark victories than with a lesson about what it truly means to serve a client well..."
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/magazines"
              className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Download The Hague Quarterly 01 (PDF)
            </Link>
            <Link
              href="/articles"
              className="rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
            >
              Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Stylized Print Magazine Cover Card */}
        <div className="lg:col-span-5">
          <Link
            href="/magazines"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-black via-neutral-900 to-emerald-950 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-1.5"
          >
            <div className="flex items-center justify-between border-b border-white/20 pb-4 text-xs uppercase tracking-widest text-emerald-400">
              <span>The Hague Quarterly</span>
              <span>Vol. 01</span>
            </div>

            <div className="my-12 space-y-3">
              <img 
              src="/Ituah-Imhanze-FCArb.avif"
              alt="Ituah Imhanze FCArb magazine feature"
               className="h-full w-full object-cover"
               />
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                The Inaugural Edition
              </p>
              <h2 className="font-serif text-4xl font-extrabold leading-tight">
                Ituah Imahnze
              </h2>
              <p className="text-sm text-neutral-300">
                Inside the minds of Nigeria's leading legal experts, thought leaders and policy makers.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/20 pt-4 text-xs text-neutral-300">
              <span>68 Pages • Free PDF Edition</span>
              <span className="font-semibold text-emerald-400 transition-transform group-hover:translate-x-1">
                Explore Issue →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Pull Quote */}
      <blockquote className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 md:p-10">
        <p className="font-serif text-2xl italic leading-relaxed text-black md:text-3xl">
          “We intend to continue to facilitate intellectual conversations within the community,
          in order to ensure a sweeping coverage of all the issues that bother mankind.”
        </p>
        <footer className="mt-4 text-xs font-semibold uppercase tracking-widest text-emerald-800">
          — From the Editors’ Note, Issue 01
        </footer>
      </blockquote>

      {/* Interactive Section Cards */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-200 pb-4">
          <h2 className="font-serif text-3xl font-bold text-black">
            Explore Sections
          </h2>
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            Updated Weekly
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/interviews"
            className="group rounded-2xl border border-neutral-200 bg-white/85 p-7 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:bg-white hover:shadow-xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              01 • Conversations
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-black transition-colors group-hover:text-emerald-700">
              Interviews →
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Candid, unhurried dialogues with lawyers, policymakers and
              industry leaders to read or download.
            </p>
          </Link>

          <Link
            href="/articles"
            className="group rounded-2xl border border-neutral-200 bg-white/85 p-7 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:bg-white hover:shadow-xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              02 • Features
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-black transition-colors group-hover:text-emerald-700">
              Articles & Opinions →
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Interesting features alongside expert analysis from our regular
              columnists.
            </p>
          </Link>

          <Link
            href="/team"
            className="group rounded-2xl border border-neutral-200 bg-white/85 p-7 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:bg-white hover:shadow-xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              03 • People & Culture
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-black transition-colors group-hover:text-emerald-700">
             Who we are →
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Meet the editors, writers and designers building The Hague Brief.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}