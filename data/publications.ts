export type ArticleItem = {
  slug: string;
  title: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
};

export type OpinionItem = {
  slug: string;
  title: string;
  author: string;
  role: string;
  date: string;
  excerpt: string;
  content: string[];
};

export type InterviewItem = {
  slug: string;
  title: string;
  guest: string;
  guestRole: string;
  date: string;
  summary: string;
  fileUrl: string;
  fileName: string;
  highlights: { question: string; answer: string }[];
};

export const articles: ArticleItem[] = [
  {
    slug: "future-of-independent-publishing",
    title: "The Future of Independent Publishing",
    author: "Editorial Desk",
    role: "Frontiers Newsroom",
    date: "November 2026",
    readTime: "5 min read",
    category: "Media & Culture",
    excerpt:
      "How small, focused editorial teams are building lasting reader trust through deep reporting and thoughtful design.",
    content: [
      "Across the media landscape, readers are growing fatigued by endless algorithmic feeds and shallow, fast-twitch commentary. In their place, a new generation of independent publications is proving that depth, clarity, and deliberate design still command genuine loyalty.",
      "Rather than chasing millions of fleeting clicks, modern editorial houses focus on high-signal storytelling—pairing rigorous reporting with downloadable editions that readers can annotate, archive, and revisit.",
      "At Frontiers, we believe the medium shapes the message. When an article is presented with breathing room, clear typography, and zero visual clutter, readers engage with ideas rather than just headlines.",
    ],
  },
  {
    slug: "designing-for-long-form-reading",
    title: "Designing Digital Spaces for Long-Form Reading",
    author: "Chidi Okafor",
    role: "Design & Editorial Systems",
    date: "November 2026",
    readTime: "4 min read",
    category: "Design",
    excerpt:
      "Why typography, whitespace, and downloadable editions still matter in an era of endless feeds.",
    content: [
      "Print magazines perfected the art of pacing centuries ago: a bold cover sets the tone, margins give the eye rest, and pull quotes anchor key arguments.",
      "Bringing that tactile discipline to the web requires restraint. High-contrast serif headlines, generous line spacing, and calm surfaces allow complex arguments to unfold naturally on both desktop and mobile screens.",
      "When combined with offline PDF editions, digital publishing gains permanence—turning passing web pages into a personal library.",
    ],
  },
  {
    slug: "inside-the-modern-newsroom",
    title: "Inside the Modern Newsroom",
    author: "Amaka Eze",
    role: "Editor-in-Chief",
    date: "November 2026",
    readTime: "6 min read",
    category: "Journalism",
    excerpt:
      "A closer look at how writers, researchers, and editors collaborate from pitch to publication.",
    content: [
      "Every issue of Frontiers begins months before publication with a simple question: which ideas will still matter five years from now?",
      "Our commissioning process pairs subject-matter thinkers with seasoned editors to refine every thesis, verify sources, and shape narratives that respect the reader's intelligence.",
      "The result is a publication built not around breaking noise, but around enduring understanding.",
    ],
  },
];

export const opinions: OpinionItem[] = [
  {
    slug: "why-print-aesthetics-belong-on-the-web",
    title: "Why Print Aesthetics Still Belong on the Modern Web",
    author: "Zainab Bello",
    role: "Senior Columnist",
    date: "November 2026",
    excerpt:
      "Digital speed should never come at the expense of thoughtful layout, curation, and permanence.",
    content: [
      "We often treat speed and quality as opposites online. Yet the publications we remember—and share with colleagues—are almost always the ones that took time to curate, edit, and present their work with authority.",
      "A clear editorial hierarchy tells the reader: someone stood behind this piece, fact-checked its claims, and decided it was worth your quiet attention.",
      "Bringing print sensibility to the web isn't nostalgia; it is a commitment to standards.",
    ],
  },
  {
    slug: "building-institutions-that-outlast-trends",
    title: "Building Institutions That Outlast Trends",
    author: "Tunde Adeyemi",
    role: "Contributing Editor",
    date: "November 2026",
    excerpt:
      "What enduring publications teach us about patience, editorial standards, and reader community.",
    content: [
      "Every technology cycle produces a wave of outlets optimized for whatever distribution channel happens to be hot that year. Very few survive the next shift.",
      "Institutions that endure build a direct relationship with their audience—anchored by recognizable voice, consistent cadence, and intellectual honesty.",
      "When readers trust your judgment, they follow you across formats, from web essays to full quarterly issues.",
    ],
  },
  {
    slug: "the-value-of-slow-journalism",
    title: "The Value of Slow Journalism",
    author: "Ngozi Balogun",
    role: "Creative & Publications Director",
    date: "November 2026",
    excerpt:
      "Stepping back from breaking noise to ask deeper questions that stay relevant months later.",
    content: [
      "Being first to publish a rumor rarely helps a decision-maker. Being first to explain what a shift actually means changes how people think and build.",
      "Slow journalism gives writers permission to follow evidence where it leads, interview multiple perspectives, and synthesize complexity into clear prose.",
    ],
  },
];

export const interviews: InterviewItem[] = [
  {
    slug: "building-resilient-media-adaora-nwachukwu",
    title: "Building Resilient Media in a Digital Age",
    guest: "Adaora Nwachukwu",
    guestRole: "Founder & Media Strategist",
    date: "November 2026",
    summary:
      "An in-depth conversation on independent publishing, audience trust, and editorial craft.",
    fileUrl: "/downloads/interview-01.pdf",
    fileName: "Frontiers-Interview-01.pdf",
    highlights: [
      {
        question: "What separates publications that earn lasting trust from those that fade after a viral spike?",
        answer:
          "Consistency of standards. Readers forgive an outlet for not covering everything, but they never forgive being misled or having their time wasted.",
      },
      {
        question: "Why offer downloadable PDF editions alongside web articles?",
        answer:
          "Because serious readers still love owning and archiving a finished edition. A PDF has a beginning, middle, and end—there are no pop-ups or distractions.",
      },
    ],
  },
];