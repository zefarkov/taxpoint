"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { sendTelegramLead } from "@/lib/sendTelegramLead";

type LeadFormModalProps = {
  context: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const variants = {
  primary:
    "pulse-cta bg-electric-500 text-white shadow-sm hover:bg-electric-600 hover:shadow-glow focus-visible:outline-electric-500",
  secondary:
    "pulse-cta bg-navy-900 text-white shadow-sm hover:bg-navy-800 hover:shadow-glow focus-visible:outline-navy-700",
  outline:
    "border border-navy-200 bg-white text-navy-900 shadow-[0_8px_22px_rgba(10,35,66,0.06)] hover:border-electric-500 hover:bg-navy-50 hover:shadow-glow focus-visible:outline-navy-700"
};

const initialError = "";

export function LeadFormModal({
  context,
  children,
  variant = "primary",
  className = ""
}: LeadFormModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(initialError);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const resetForm = () => {
    setName("");
    setPhone("");
    setError(initialError);
    setIsSending(false);
    setIsSuccess(false);
  };

  const openModal = () => {
    resetForm();
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, "");

    if (!trimmedName) {
      setError("Ismingizni kiriting.");
      return;
    }

    if (!trimmedPhone || phoneDigits.length < 7) {
      setError("Telefon raqamingizni to'g'ri kiriting.");
      return;
    }

    setError(initialError);
    setIsSending(true);

    try {
      await sendTelegramLead({
        context,
        name: trimmedName,
        phone: trimmedPhone
      });
      setIsSuccess(true);
    } catch {
      setError("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsSending(false);
    }
  };

  const buttonClasses = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  const modal = isMounted
    ? createPortal(
        <div
          className={`fixed inset-0 z-[120] grid place-items-center bg-navy-900/60 px-4 py-6 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !isSending) {
              closeModal();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className={`w-full max-w-md rounded-lg border border-navy-100 bg-gradient-to-b from-white to-navy-50 p-5 shadow-[0_28px_90px_rgba(10,35,66,0.3)] transition duration-200 motion-reduce:transition-none sm:p-6 ${
              isOpen ? "scale-100 opacity-100" : "scale-[0.985] opacity-0"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="text-2xl font-extrabold text-navy-900">
                  Ma'lumotlaringizni qoldiring
                </h2>
                <p id={descriptionId} className="mt-2 text-sm leading-6 text-slate-700">
                  Mutaxassisimiz siz bilan bog'lanadi
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                disabled={isSending}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-navy-100 bg-white text-xl leading-none text-navy-900 shadow-[0_8px_20px_rgba(10,35,66,0.06)] transition hover:border-electric-500 hover:bg-navy-50 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Modalni yopish"
              >
                x
              </button>
            </div>

            {isSuccess ? (
              <div className="mt-6 rounded-lg border border-electric-400/40 bg-white p-5 text-center shadow-[0_12px_30px_rgba(10,35,66,0.07)]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-100 text-lg font-extrabold text-electric-600">
                  ✓
                </div>
                <p className="mt-4 text-lg font-extrabold text-navy-900">
                  Rahmat! So'rovingiz qabul qilindi.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Tez orada siz bilan bog'lanamiz.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  Yopish
                </button>
              </div>
            ) : (
              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <input type="hidden" name="context" value={context} />
                <label className="grid gap-2 text-sm font-bold text-navy-900">
                  Ism
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="min-h-12 rounded-md border border-navy-100 bg-white px-4 py-3 text-base font-medium text-navy-900 shadow-[0_8px_22px_rgba(10,35,66,0.05)] outline-none transition placeholder:text-slate-400 focus:border-electric-500 focus:shadow-glow"
                    placeholder="Ismingiz"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-navy-900">
                  Telefon raqam
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="min-h-12 rounded-md border border-navy-100 bg-white px-4 py-3 text-base font-medium text-navy-900 shadow-[0_8px_22px_rgba(10,35,66,0.05)] outline-none transition placeholder:text-slate-400 focus:border-electric-500 focus:shadow-glow"
                    placeholder="+998 __ ___ __ __"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </label>

                {error ? (
                  <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSending}
                  className="pulse-cta mt-1 inline-flex min-h-12 items-center justify-center rounded-md bg-electric-500 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-electric-600 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button ref={triggerRef} type="button" onClick={openModal} className={buttonClasses}>
        {children}
      </button>
      {modal}
    </>
  );
}
