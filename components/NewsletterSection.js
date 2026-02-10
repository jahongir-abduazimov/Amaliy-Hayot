"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', null
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Obuna muvaffaqiyatli amalga oshirildi!");
        setEmail("");

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus(null);
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage(
          data.error || "Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.",
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage("Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="newsletter-section"
      className="bg-linear-to-br from-blue-50 to-cyan-50 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl sm:text-5xl mb-4">📬</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-text-dark mb-3 sm:mb-4">
          Yangiliklar uchun obuna bo‘ling
        </h2>
        <p className="text-base sm:text-lg text-neutral-text-gray mb-6 sm:mb-8">
          Haftada bir marta eng foydali ma’lumotlarni email'ga oling
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Email manzilingiz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-2 border-neutral-border focus:border-primary focus:outline-none smooth bg-white text-neutral-text-dark placeholder-neutral-text-light disabled:opacity-50 disabled:cursor-not-allowed text-base"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="group bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold shadow-blue hover:bg-[#0369A1] smooth whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
          >
            {isSubmitting ? "Kutilmoqda..." : "Obuna bo’lish"}
            {!isSubmitting && (
              <span className="inline-block ml-2 group-hover:translate-x-1 smooth">
                →
              </span>
            )}
          </button>
        </form>

        {/* Status Message */}
        {status && message && (
          <div
            className={`mt-4 px-4 py-3 rounded-xl max-w-md mx-auto ${status === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span>{status === "success" ? "✓" : "✗"}</span>
              <span className="text-sm font-medium">{message}</span>
            </div>
          </div>
        )}

        <p className="text-sm text-neutral-text-light mt-4">
          Biz spam yubormаymiz. Istalgan vaqt bekor qilishingiz mumkin.
        </p>
      </div>
    </section>
  );
}
