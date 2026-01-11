"use client";

import { useState } from "react";

/**
 * Content Elements Component Library
 * Reusable content boxes for blog posts
 */

/**
 * InfoBox - Displays informational content with blue styling
 * @param {Object} props
 * @param {string} props.title - Optional title for the info box
 * @param {string} props.icon - Optional emoji or icon
 * @param {string} props.variant - Variant: 'info' (blue), 'tip' (green), 'note' (purple)
 * @param {React.ReactNode} props.children - Content to display
 */
export function InfoBox({ title, icon = "💡", variant = "info", children }) {
  const variants = {
    info: {
      bg: "bg-blue-50",
      border: "border-l-blue-500",
      titleColor: "text-blue-900",
      iconBg: "bg-blue-100",
    },
    tip: {
      bg: "bg-emerald-50",
      border: "border-l-emerald-500",
      titleColor: "text-emerald-900",
      iconBg: "bg-emerald-100",
    },
    note: {
      bg: "bg-purple-50",
      border: "border-l-purple-500",
      titleColor: "text-purple-900",
      iconBg: "bg-purple-100",
    },
  };

  const style = variants[variant] || variants.info;

  return (
    <div
      className={`${style.bg} ${style.border} border-l-4 rounded-xl p-6 my-8 shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex gap-4">
        {icon && (
          <div
            className={`${style.iconBg} w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-xl`}
          >
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`${style.titleColor} font-bold text-lg mb-3`}>
              {title}
            </h4>
          )}
          <div className="text-gray-700 leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:mb-4 [&>ul:last-child]:mb-0 [&>ol]:mb-4 [&>ol:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * WarningBox - Displays warning content with amber/yellow styling
 * @param {Object} props
 * @param {string} props.title - Optional title
 * @param {React.ReactNode} props.children - Content to display
 */
export function WarningBox({ title, children }) {
  return (
    <div className="bg-amber-50 border-l-4 border-l-amber-500 rounded-xl p-6 my-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex gap-4">
        <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
          <svg
            className="w-6 h-6 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="text-amber-900 font-bold text-lg mb-3">{title}</h4>
          )}
          <div className="text-gray-700 leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:mb-4 [&>ul:last-child]:mb-0 [&>ol]:mb-4 [&>ol:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * SuccessBox - Displays success/positive content with green styling
 * @param {Object} props
 * @param {string} props.title - Optional title
 * @param {React.ReactNode} props.children - Content to display
 */
export function SuccessBox({ title, children }) {
  return (
    <div className="bg-emerald-50 border-l-4 border-l-emerald-500 rounded-xl p-6 my-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex gap-4">
        <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
          <svg
            className="w-6 h-6 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="text-emerald-900 font-bold text-lg mb-3">{title}</h4>
          )}
          <div className="text-gray-700 leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:mb-4 [&>ul:last-child]:mb-0 [&>ol]:mb-4 [&>ol:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * StepCard - Displays step-by-step instructions with purple gradient
 * @param {Object} props
 * @param {number} props.stepNumber - Step number (1, 2, 3, etc.)
 * @param {string} props.title - Step title
 * @param {React.ReactNode} props.children - Step content
 */
export function StepCard({ stepNumber, title, children }) {
  return (
    <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl p-8 my-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-xl font-bold border-2 border-white/30">
          {stepNumber}
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
          )}
          <div className="text-white/95 leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:mb-4 [&>ul:last-child]:mb-0 [&>ol]:mb-4 [&>ol:last-child]:mb-0 [&>ul]:list-disc [&>ul]:ml-6 [&>ol]:list-decimal [&>ol]:ml-6 [&>li]:mb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * FAQItem - Displays FAQ question and answer
 * @param {Object} props
 * @param {string} props.question - FAQ question
 * @param {string|React.ReactNode} props.answer - FAQ answer
 * @param {boolean} props.collapsible - Whether the item is collapsible (default: false)
 */
export function FAQItem({ question, answer, collapsible = false }) {
  const [isOpen, setIsOpen] = useState(!collapsible);

  if (collapsible) {
    return (
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-4 hover:border-blue-300 transition-colors duration-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg cursor-pointer"
          aria-expanded={isOpen}
        >
          <h4 className="text-blue-600 font-bold text-lg flex-1">{question}</h4>
          <svg
            className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="mt-4 text-gray-700 leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:mb-3 [&>ul:last-child]:mb-0 [&>ol]:mb-3 [&>ol:last-child]:mb-0">
            {answer}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-4 hover:border-blue-300 transition-colors duration-200">
      <h4 className="text-blue-600 font-bold text-lg mb-3">{question}</h4>
      <div className="text-gray-700 leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:mb-3 [&>ul:last-child]:mb-0 [&>ol]:mb-3 [&>ol:last-child]:mb-0">
        {answer}
      </div>
    </div>
  );
}

/**
 * CTABox - Call-to-action box with green gradient
 * @param {Object} props
 * @param {string} props.title - CTA title
 * @param {string} props.description - CTA description
 * @param {string} props.buttonText - Button text
 * @param {string} props.buttonHref - Button link
 * @param {React.ReactNode} props.children - Additional content
 */
export function CTABox({
  title,
  description,
  buttonText,
  buttonHref,
  children,
}) {
  return (
    <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 my-10 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
      {title && <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>}
      {description && (
        <p className="text-lg text-white/95 mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {children && (
        <div className="text-white/95 mb-6 [&>p]:mb-3 [&>p:last-child]:mb-0">
          {children}
        </div>
      )}
      {buttonText && buttonHref && (
        <a
          href={buttonHref}
          className="inline-block bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}
