"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Extract headings from HTML content and find them in the DOM
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const tempHeadings = tempDiv.querySelectorAll("h1, h2, h3");
    let observer = null;

    // Wait for DOM to be ready, then find actual headings
    const findHeadings = () => {
      const article = document.querySelector("article .prose");
      if (!article) {
        // Fallback: use headings from content HTML
        const extractedHeadings = Array.from(tempHeadings).map((heading) => {
          const id =
            heading.id ||
            heading.textContent
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-")
              .trim();
          return {
            id,
            text: heading.textContent,
            level: parseInt(heading.tagName.charAt(1)),
          };
        });
        setHeadings(extractedHeadings);
        return;
      }

      const headingElements = article.querySelectorAll("h1, h2, h3");
      const extractedHeadings = Array.from(headingElements).map((heading) => {
        // Ensure heading has an ID
        if (!heading.id) {
          const text = heading.textContent || "";
          heading.id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
        }
        return {
          id: heading.id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        };
      });

      setHeadings(extractedHeadings);

      // Scroll spy
      const observerOptions = {
        root: null,
        rootMargin: "-100px 0px -66%",
        threshold: 0,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      headingElements.forEach((heading) => {
        observer.observe(heading);
      });
    };

    // Wait for next tick to ensure DOM is ready
    const timeoutId = setTimeout(findHeadings, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        const headingElements = document.querySelectorAll(
          "article .prose h1, article .prose h2, article .prose h3",
        );
        headingElements.forEach((heading) => {
          observer.unobserve(heading);
        });
      }
    };
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Mundarija</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`text-sm ${heading.level === 2 ? "pl-4" : heading.level === 3 ? "pl-6" : "pl-0"}`}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`block py-2.5 px-3 rounded-lg transition-all duration-200 ${
                  activeId === heading.id
                    ? "text-white font-semibold bg-white/20 backdrop-blur-sm shadow-md"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`shrink-0 rounded-full ${
                      heading.level === 1
                        ? "w-2 h-2 bg-white"
                        : heading.level === 2
                          ? "w-1.5 h-1.5 bg-white/80"
                          : "w-1 h-1 bg-white/60"
                    }`}
                  ></span>
                  <span className="line-clamp-2 leading-relaxed">
                    {heading.text}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
