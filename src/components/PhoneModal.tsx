"use client";

import { useEffect, useRef, useState } from "react";
import { phoneNumbers } from "@/data/site";

type PhoneModalProps = {
  className?: string;
};

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function PhoneModal({ className = "" }: PhoneModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsMounted(true);
    window.requestAnimationFrame(() => setIsOpen(true));
  };

  const closeModal = () => {
    setIsOpen(false);
    window.setTimeout(() => {
      setIsMounted(false);
      triggerRef.current?.focus();
    }, 180);
  };

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
    focusables?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const elements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((element) => !element.hasAttribute("disabled"));

      if (elements.length === 0) {
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openModal}
        className={`pulse-phone inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-navy-900 shadow-sm transition hover:border-electric-500 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 ${className}`}
        aria-haspopup="dialog"
      >
        Qo‘ng‘iroq qilish
      </button>

      {isMounted ? (
        <div
          className={`fixed inset-0 z-[110] flex items-center justify-center bg-navy-900/45 px-4 py-6 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="phone-modal-title"
            aria-describedby="phone-modal-description"
            className={`w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(11,31,58,0.22)] transition duration-200 motion-reduce:transition-none sm:p-6 ${
              isOpen ? "scale-100 opacity-100" : "scale-[0.985] opacity-0"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="phone-modal-title" className="text-2xl font-extrabold text-navy-900">
                  Telefon orqali bog‘lanish
                </h2>
                <p id="phone-modal-description" className="mt-2 text-sm leading-6 text-slate-600">
                  O‘zingizga qulay raqamni tanlang
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xl leading-none text-navy-900 transition hover:border-electric-500 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                aria-label="Modalni yopish"
              >
                ×
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="pulse-phone group flex min-h-16 items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-electric-500 hover:bg-white hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white transition group-hover:bg-electric-500">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.63 2.65a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.29-1.29a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.65.63A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-extrabold text-navy-900">{phone.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-500">
                      Qo‘ng‘iroq qilish
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
