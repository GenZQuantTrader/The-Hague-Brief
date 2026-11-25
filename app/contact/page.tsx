"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Failed to send message.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Get In Touch
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black">
          Contact Us
        </h1>
        <p className="mt-2 text-neutral-600">
          Have a story pitch, press inquiry, or partnership proposal? Send a direct note to our editorial desk.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Editorial Desk Info */}
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md">
            <h2 className="font-serif text-xl font-bold text-black">
              Editorial & Press
            </h2>
            <div className="mt-4 space-y-3 text-sm text-neutral-600">
              <p>
                <strong className="block text-xs uppercase tracking-wider text-emerald-700">
                  Story Pitches
                </strong>
                editorial@frontiers.example
              </p>
              <p>
                <strong className="block text-xs uppercase tracking-wider text-emerald-700">
                  Partnerships
                </strong>
                hello@frontiers.example
              </p>
              <p>
                <strong className="block text-xs uppercase tracking-wider text-emerald-700">
                  Newsroom
                </strong>
                Victoria Island, Lagos
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-md md:col-span-3 md:p-8">
          {status === "sent" ? (
            <div className="space-y-4 py-8 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                ✓
              </span>
              <h2 className="font-serif text-2xl font-bold text-black">
                Message Delivered
              </h2>
              <p className="text-sm text-neutral-600">
                Thank you for writing to Frontiers. Our team has received your note and will reply shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 rounded-full border border-neutral-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:border-emerald-700 hover:text-emerald-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700">
                  {errorMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-black focus:border-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-black focus:border-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your pitch, inquiry, or message..."
                  className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-black focus:border-emerald-700 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}