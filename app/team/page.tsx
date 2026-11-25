import { teamMembers } from "@/data/team";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function TeamPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            People & Culture
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black">
          Our Team
        </h1>
        <p className="mt-2 text-neutral-600">
          Meet the editors, writers, and designers behind Frontiers. Click any
          profile to read more.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}