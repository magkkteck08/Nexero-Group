"use client";

import React, { useState } from "react";
import { MailCheck, ArrowRight, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email,
          category: "Newsletter Subscription",
          subject: `[Nexora Group - Newsletter] New Subscriber: ${email}`,
          message: `Please add ${email} to the Inside Nexora corporate dispatches and venture launch mailing list.`,
        }),
      });
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 border-b-2 border-[#1E1B2E] bg-[#FEF0B6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="nb-card bg-white p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1E1B2E] bg-[#E8F8F0] px-3 py-0.5 text-[11px] font-extrabold uppercase text-[#1E1B2E]">
              <Sparkles className="h-3.5 w-3.5 text-[#3E735E]" />
              <span>Executive Dispatches</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B2E]">
              Stay Updated on Nexora Ventures &amp; Launches
            </h2>
            <p className="text-xs sm:text-sm font-medium text-[#5A5868]">
              Receive quarterly venture updates, product release notes, and technology insights from Nexora Group.
            </p>
          </div>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E1B2E] bg-[#98E2C6] px-5 py-3 text-xs sm:text-sm font-extrabold text-[#1E1B2E] shadow-[0_3px_0_0_#1E1B2E]">
              <MailCheck className="h-4 w-4" />
              <span>Subscribed to Inside Nexora!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row w-full lg:w-auto gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full sm:w-72 rounded-full border-2 border-[#1E1B2E] bg-[#FFFDF5] px-4 py-3 text-sm font-medium text-[#1E1B2E] focus:outline-none focus:ring-2 focus:ring-[#F7D147]"
              />
              <button
                type="submit"
                disabled={loading}
                className="nb-btn-primary text-xs sm:text-sm px-6 py-3 shrink-0 cursor-pointer"
              >
                <span>{loading ? "Joining..." : "Subscribe"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}