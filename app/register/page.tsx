"use client";

import React, { useState } from "react";
import Link from "next/link";
import IMWHeader from "@/components/imw/IMWHeader";
import IMWFooter from "@/components/imw/IMWFooter";
import CitySection from "@/components/imw/CitySection";
import {
  IMW_SUBMIT_ERROR_MESSAGE,
  submitIMWFreeRegistration,
  type FreeRegistrationForm,
} from "@/lib/imwApi";

const EMPTY_FORM: FreeRegistrationForm = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  subscribeNews: true,
};

export default function RegisterPage() {
  const [form, setForm] = useState<FreeRegistrationForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrorMessage("");
    try {
      await submitIMWFreeRegistration(form);
      setSubmitted(true);
    } catch {
      setErrorMessage(IMW_SUBMIT_ERROR_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setSubmitted(false);
    setErrorMessage("");
  };

  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white font-sans">
        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] flex items-center bg-[#070c16] pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
          {/* Background Image & Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-95"
              style={{ backgroundImage: "url('/imw_hero.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#0d1726]/90 to-transparent max-w-[70%]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#03516E]/20 to-transparent"></div>
              <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#03516E]/30 blur-3xl rounded-full pointer-events-none"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  MAY 31 – JUNE 4, 2027 · QUÉBEC CITY, CANADA
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Register for International Mining Week
                </h1>
                <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
                <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
                  Simply submit your name and email address to reserve your place at Canada&apos;s premier mining gathering.
                </p>
              </div>

              {/* Event Quick Info Badge */}
              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 max-w-md shrink-0 text-white">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
                  <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Centre des congrès de Québec, Canada</span>
                </div>
                <div className="text-xl sm:text-2xl font-black">May 31 – June 4, 2027</div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005B82]/40 border border-[#005B82]/60 text-sky-200 text-xs font-bold tracking-wide">
                  <span>Official IMW 2027 Attendance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REGISTRATION FORM SECTION ===== */}
        <section className="relative w-full py-10 sm:py-14 bg-[#f8fafc]" id="registration-form-section">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
            <div className="max-w-3xl mx-auto">
              {submitted ? (
                /* Success Confirmation State */
                <div className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#005B82]/10 border border-[#005B82]/25 shadow-xs mb-3">
                    <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#005B82]">
                      REGISTRATION CONFIRMED
                    </span>
                    <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-4">
                    Welcome to International Mining Week 2027!
                  </h2>
                  <p className="text-neutral-600 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-neutral-800">{form.firstName} {form.lastName}</strong>. Your registration has been received. We have sent confirmation details to <strong className="text-neutral-800">{form.email}</strong>.
                  </p>

                  <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 max-w-md mx-auto mb-8 text-left text-xs sm:text-sm text-sky-900 space-y-1.5">
                    <div className="font-bold flex items-center gap-2 text-[#005B82]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                      </svg>
                      May 31 – June 4, 2027
                    </div>
                    <div className="text-neutral-600">Centre des congrès de Québec · Québec City, Canada</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/agenda"
                      className="px-6 py-3 rounded-xl bg-[#005B82] hover:bg-[#023B50] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                    >
                      View Event Agenda
                    </Link>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl border border-neutral-300 hover:border-neutral-500 text-neutral-700 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                    >
                      Register Again
                    </button>
                  </div>
                </div>
              ) : (
                /* Registration Form */
                <div className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-xl">
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                      Registration
                    </h2>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          First Name <span className="text-[#005B82]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          placeholder="e.g. Jane"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#005B82] focus:ring-2 focus:ring-[#005B82]/20 outline-none text-sm text-neutral-800 transition-all"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Last Name <span className="text-[#005B82]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          placeholder="e.g. Smith"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#005B82] focus:ring-2 focus:ring-[#005B82]/20 outline-none text-sm text-neutral-800 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address <span className="text-[#005B82]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane.smith@organization.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#005B82] focus:ring-2 focus:ring-[#005B82]/20 outline-none text-sm text-neutral-800 transition-all"
                      />
                    </div>

                    {/* Organization / Company (Optional) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Company / Organization <span className="text-neutral-400 font-normal text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={form.companyName || ""}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        placeholder="e.g. Global Resources Inc."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#005B82] focus:ring-2 focus:ring-[#005B82]/20 outline-none text-sm text-neutral-800 transition-all"
                      />
                    </div>

                    {/* Newsletter / Updates Opt-in */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.subscribeNews}
                          onChange={(e) => setForm({ ...form, subscribeNews: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#005B82] focus:ring-[#005B82]"
                        />
                        <span className="text-xs text-neutral-600 leading-relaxed">
                          Keep me updated with official announcements, speaker releases, and partner event schedules for International Mining Week 2027.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl bg-[#005B82] hover:bg-[#023B50] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Registering...</span>
                          </>
                        ) : (
                          <>
                            <span>Register Now</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Included Benefits Badges */}
                    <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-semibold text-neutral-500">
                      <div className="flex items-center justify-center gap-1.5 py-1">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Event Access</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 py-1">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Keynotes &amp; Panels</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 py-1">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Partner Gatherings</span>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        <CitySection />
      </main>
      <IMWFooter />
    </>
  );
}
