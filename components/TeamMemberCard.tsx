"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/data/team";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:shadow-xl">
      <div>
        <div className="relative h-48 w-full overflow-hidden rounded-xl bg-neutral-900">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-4 font-serif text-xl font-bold text-black">
          {member.name}
        </h2>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {member.role}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {member.bio}
        </p>

        {/* Expandable Profile Drawer */}
        {expanded && (
          <div className="mt-4 space-y-4 border-t border-neutral-200 pt-4 text-sm text-neutral-700">
            <p className="leading-relaxed">{member.expandedBio}</p>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                Focus Areas
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {member.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1 text-xs text-neutral-600">
              <p>
                <strong className="text-black">Notable Piece:</strong>{" "}
                {member.featuredWork}
              </p>
              <p>
                <strong className="text-black">Direct Desk:</strong>{" "}
                {member.contactHandle}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 border-t border-neutral-100 pt-4">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 transition hover:text-black"
        >
          <span>{expanded ? "Hide Full Profile" : "Expand Full Profile"}</span>
          <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
        </button>
      </div>
    </article>
  );
}