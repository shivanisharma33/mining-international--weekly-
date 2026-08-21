"use client";

import React, { useState } from "react";
import IMWHeader from "@/components/imw/IMWHeader";
import IMWFooter from "@/components/imw/IMWFooter";
import CitySection from "@/components/imw/CitySection";
import {
  IMW_SUBMIT_ERROR_MESSAGE,
  submitIMWCompanyRegistration,
  submitIMWInvestorRegistration,
  type CompanyRegistrationForm,
  type InvestorRegistrationForm,
} from "@/lib/imwApi";

const EMPTY_INVESTOR_FORM: InvestorRegistrationForm = {
  companyName: "",
  firstName: "",
  lastName: "",
  businessTitle: "",
  city: "",
  country: "",
  email: "",
  phone: "",
  aum: "",
  investorType: "Institutional Investor",
  bio: "",
  subscribeNews: true,
};

const EMPTY_COMPANY_FORM: CompanyRegistrationForm = {
  companyName: "",
  tickerSymbol: "",
  firstName: "",
  lastName: "",
  executiveTitle: "",
  city: "",
  country: "",
  email: "",
  phone: "",
  assetStage: "Exploration & Discovery",
  showcaseInterest: "1-on-1 Executive Meetings",
  description: "",
  subscribeNews: true,
};

export default function RegisterPage() {
  const [activeTrack, setActiveTrack] = useState<"investor" | "company">("investor");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form States
  const [investorForm, setInvestorForm] = useState<InvestorRegistrationForm>(EMPTY_INVESTOR_FORM);

  const [companyForm, setCompanyForm] = useState<CompanyRegistrationForm>(EMPTY_COMPANY_FORM);

  const handleTrackSwitch = (track: "investor" | "company") => {
    if (submitting) return;
    setActiveTrack(track);
    setSubmitted(false);
    setErrorMessage("");
    const formSection = document.getElementById("registration-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return; // guards against double-clicks / slow networks
    setSubmitting(true);
    setErrorMessage("");
    try {
      await submitIMWInvestorRegistration(investorForm);
      setSubmitted(true);
    } catch {
      setErrorMessage(IMW_SUBMIT_ERROR_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCompanySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return; // guards against double-clicks / slow networks
    setSubmitting(true);
    setErrorMessage("");
    try {
      await submitIMWCompanyRegistration(companyForm);
      setSubmitted(true);
    } catch {
      setErrorMessage(IMW_SUBMIT_ERROR_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitAnother = () => {
    setSubmitted(false);
    setErrorMessage("");
    if (activeTrack === "investor") {
      setInvestorForm(EMPTY_INVESTOR_FORM);
    } else {
      setCompanyForm(EMPTY_COMPANY_FORM);
    }
  };

  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white font-[family-name:var(--font-roboto)] font-sans">
        {/* ===== HERO WITH IMAGE ===== */}
        <section
          className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center bg-[#070c16] pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden"
        >
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
              <div>
                <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  SAVE THE DATE — INVITATION ONLY
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Registration Portal
                </h1>
                <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
              </div>

              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 max-w-md shrink-0">
                <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Centre des congrès de Québec, Canada</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">June 1–5, 2026</div>
                <p className="text-white/70 text-xs mt-2 leading-relaxed font-normal">
                  Canada&apos;s invitation-only Tier 1 Conference for mining companies, accredited investors, family offices, institutions and{"\u00a0"}funds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRACK CARDS — WHITE ===== */}
        <section className="relative w-full py-8 sm:py-12 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#0a2540] text-xs font-bold tracking-[0.25em] uppercase mb-2 block">
                CHOOSE YOUR PARTICIPATION TRACK
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f2c] tracking-tight">
                Tailored Access for Investors &amp; Companies
              </h2>
              <div className="w-16 h-[3px] bg-[#0a2540] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 01: Investor Registration */}
              <div
                className={`group bg-white border rounded-3xl p-8 sm:p-10 shadow-sm transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${activeTrack === "investor"
                  ? "border-[#0a2540] ring-2 ring-[#0a2540]/20 shadow-xl"
                  : "border-neutral-200 hover:border-[#0a2540]/40"
                  }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0a2540]"></div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0a2540] bg-[#0a2540]/10 px-3.5 py-1.5 rounded-full">
                      FOR INVESTORS
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center font-bold text-lg">
                      01
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1a1f2c] mb-4 group-hover:text-[#0a2540] transition-colors">
                    Investor Registration
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                    Register as an accredited investor, family office, institution, or fund to access privately arranged 1-on-1 meetings with leading mining companies.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-800">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>1-on-1 Private Executive Meetings</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-800">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>Keynote &amp; Ministerial Session Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-800">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>VIP Receptions &amp; Networking Dinners</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleTrackSwitch("investor")}
                  className={`w-full py-4 rounded-2xl text-xs font-extrabold tracking-[0.15em] uppercase text-center transition-all duration-300 shadow-md ${activeTrack === "investor"
                    ? "bg-[#0a2540] text-white shadow-lg shadow-[#0a2540]/20"
                    : "bg-[#dce5ed] text-[#0a2540] hover:bg-[#0a2540] hover:text-white"
                    }`}
                >
                  Register as Investor
                </button>
              </div>

              {/* Card 02: Company Registration */}
              <div
                className={`group bg-white border rounded-3xl p-8 sm:p-10 shadow-sm transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${activeTrack === "company"
                  ? "border-[#0a2540] ring-2 ring-[#0a2540]/20 shadow-xl"
                  : "border-neutral-200 hover:border-[#0a2540]/40"
                  }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0a2540]/40 group-hover:bg-[#0a2540] transition-colors"></div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0a2540] bg-[#0a2540]/10 px-3.5 py-1.5 rounded-full">
                      FOR COMPANIES
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center font-bold text-lg">
                      02
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1a1f2c] mb-4 group-hover:text-[#0a2540] transition-colors">
                    Company Registration
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                    Register your mining company to showcase your projects and connect with a curated audience of international investors, family offices and{"\u00a0"}funds.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-800">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>Corporate Project Showcase</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-800">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>Curated Accredited Investor Audience</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-neutral-800">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540]/10 text-[#0a2540] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>Tier 1 Sponsorship Opportunities</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleTrackSwitch("company")}
                  className={`w-full py-4 rounded-2xl text-xs font-extrabold tracking-[0.15em] uppercase text-center transition-all duration-300 shadow-md ${activeTrack === "company"
                    ? "bg-[#0a2540] text-white shadow-lg shadow-[#0a2540]/20"
                    : "bg-[#dce5ed] text-[#0a2540] hover:bg-[#0a2540] hover:text-white"
                    }`}
                >
                  Register a Company
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FORM SECTION — LIGHT BLUE ===== */}
        <section
          id="registration-form-section"
          className="relative w-full py-10 sm:py-14 md:py-16 border-t border-[#0a2540]/10"
          style={{ background: "linear-gradient(180deg, #dce5ed 0%, #f0f8fc 50%, #ffffff 100%)" }}
        >
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Form Track Switch Buttons */}
            <div className="flex justify-center gap-3 mb-10">
              <button
                onClick={() => {
                  setActiveTrack("investor");
                  setSubmitted(false);
                }}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTrack === "investor"
                  ? "bg-[#0a2540] text-white shadow-lg shadow-[#0a2540]/20 scale-105"
                  : "bg-white text-[#0a2540] border border-[#0a2540]/20 hover:bg-[#0a2540]/5"
                  }`}
              >
                Investor Registration Form
              </button>
              <button
                onClick={() => {
                  setActiveTrack("company");
                  setSubmitted(false);
                }}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTrack === "company"
                  ? "bg-[#0a2540] text-white shadow-lg shadow-[#0a2540]/20 scale-105"
                  : "bg-white text-[#0a2540] border border-[#0a2540]/20 hover:bg-[#0a2540]/5"
                  }`}
              >
                Company Registration Form
              </button>
            </div>

            {/* Main Form Box */}
            <div className="bg-white border border-[#0a2540]/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0a2540] via-[#14507a] to-[#0a2540]"></div>

              {submitted ? (
                <div className="p-8 sm:p-12 bg-emerald-50 border border-emerald-300 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-emerald-900 mb-2">
                    {activeTrack === "investor" ? "Investor Registration Received!" : "Company Registration Received!"}
                  </h3>
                  <p className="text-emerald-700 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                    Thank you,{" "}
                    <strong>
                      {activeTrack === "investor"
                        ? investorForm.firstName || "Delegate"
                        : companyForm.firstName || "Executive"}
                    </strong>
                    . Your application details have been safely received. An official invitation &amp; meeting itinerary will be sent to{" "}
                    <strong>
                      {activeTrack === "investor" ? investorForm.email || "your email" : companyForm.email || "your email"}
                    </strong>
                    .
                  </p>
                  <button
                    onClick={handleSubmitAnother}
                    className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Registration
                  </button>
                </div>
              ) : activeTrack === "investor" ? (
                /* INVESTOR FORM */
                <div>
                  <div className="text-center mb-10">
                    <span className="text-[#0a2540] text-xs font-bold tracking-[0.25em] uppercase mb-2 block">
                      ACCREDITED DELEGATE APPLICATION
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1a1f2c] tracking-tight">
                      Investor Registration Form
                    </h3>
                    <div className="w-12 h-[3px] bg-[#0a2540] mx-auto mt-3 rounded-full"></div>
                  </div>

                  <form onSubmit={handleInvestorSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Company / Firm Name <span className="text-[#0a2540] font-bold">(required)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={investorForm.companyName}
                        onChange={(e) => setInvestorForm({ ...investorForm, companyName: e.target.value })}
                        placeholder="e.g. Apex Capital Partners"
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          First Name <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={investorForm.firstName}
                          onChange={(e) => setInvestorForm({ ...investorForm, firstName: e.target.value })}
                          placeholder="e.g. Sarah"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Last Name <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={investorForm.lastName}
                          onChange={(e) => setInvestorForm({ ...investorForm, lastName: e.target.value })}
                          placeholder="e.g. Jenkins"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Business Title
                      </label>
                      <input
                        type="text"
                        value={investorForm.businessTitle}
                        onChange={(e) => setInvestorForm({ ...investorForm, businessTitle: e.target.value })}
                        placeholder="e.g. Managing Director, Mining & Resources"
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={investorForm.city}
                          onChange={(e) => setInvestorForm({ ...investorForm, city: e.target.value })}
                          placeholder="e.g. Toronto"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          value={investorForm.country}
                          onChange={(e) => setInvestorForm({ ...investorForm, country: e.target.value })}
                          placeholder="e.g. Canada"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Email <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={investorForm.email}
                          onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                          placeholder="e.g. sarah@firm.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={investorForm.phone}
                          onChange={(e) => setInvestorForm({ ...investorForm, phone: e.target.value })}
                          placeholder="e.g. +1 (514) 555-0192"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Assets Under Management (AUM)
                        </label>
                        <select
                          value={investorForm.aum}
                          onChange={(e) => setInvestorForm({ ...investorForm, aum: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-bold outline-none transition-all cursor-pointer"
                        >
                          <option value="">Select AUM Range</option>
                          <option value="Under $10M">Under $10 Million</option>
                          <option value="$10M - $50M">$10 Million – $50 Million</option>
                          <option value="$50M - $250M">$50 Million – $250 Million</option>
                          <option value="$250M - $1B">$250 Million – $1 Billion</option>
                          <option value="Over $1B">Over $1 Billion</option>
                          <option value="HNWI / Personal">HNWI / Personal Accredited Investor</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Investor Type
                        </label>
                        <select
                          value={investorForm.investorType}
                          onChange={(e) => setInvestorForm({ ...investorForm, investorType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-bold outline-none transition-all cursor-pointer"
                        >
                          <option value="Institutional Investor">Institutional Investor</option>
                          <option value="Family Office">Family Office</option>
                          <option value="High Net Worth Individual (HNWI)">High Net Worth Individual (HNWI)</option>
                          <option value="Fund / Portfolio Manager">Fund / Portfolio Manager</option>
                          <option value="Sovereign Wealth Fund">Sovereign Wealth Fund</option>
                          <option value="Mining Analyst / Investment Banker">Mining Analyst / Investment Banker</option>
                          <option value="Retail / Accredited Investor">Retail / Accredited Investor</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Tell Us About Yourself &amp; Investment Focus
                      </label>
                      <textarea
                        rows={4}
                        maxLength={5000}
                        value={investorForm.bio}
                        onChange={(e) => setInvestorForm({ ...investorForm, bio: e.target.value })}
                        placeholder="Briefly describe your investment focus or objectives..."
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all resize-y"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={investorForm.subscribeNews}
                          onChange={(e) => setInvestorForm({ ...investorForm, subscribeNews: e.target.checked })}
                          className="w-4 h-4 text-[#0a2540] accent-[#0a2540] rounded border-neutral-300"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-700">
                          Sign up for news and updates
                        </span>
                      </label>
                    </div>

                    {errorMessage && (
                      <div
                        role="alert"
                        className="px-4 py-3.5 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs sm:text-sm font-semibold"
                      >
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="w-full py-4 rounded-2xl bg-[#0a2540] hover:bg-[#0d3b66] text-white text-xs sm:text-sm font-black tracking-[0.15em] uppercase shadow-lg shadow-[#0a2540]/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#0a2540]"
                    >
                      <span>{submitting ? "Submitting…" : "Complete Investor Registration"}</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* COMPANY FORM */
                <div>
                  <div className="text-center mb-10">
                    <span className="text-[#0a2540] text-xs font-bold tracking-[0.25em] uppercase mb-2 block">
                      CORPORATE SHOWCASE APPLICATION
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1a1f2c] tracking-tight">
                      Company Registration Form
                    </h3>
                    <div className="w-12 h-[3px] bg-[#0a2540] mx-auto mt-3 rounded-full"></div>
                  </div>

                  <form onSubmit={handleCompanySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Company / Organization Name <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.companyName}
                          onChange={(e) => setCompanyForm({ ...companyForm, companyName: e.target.value })}
                          placeholder="e.g. Apex Mining Corp."
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Ticker Symbol / Exchange
                        </label>
                        <input
                          type="text"
                          value={companyForm.tickerSymbol}
                          onChange={(e) => setCompanyForm({ ...companyForm, tickerSymbol: e.target.value })}
                          placeholder="e.g. TSX: APX / NYSE: APX"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          First Name <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.firstName}
                          onChange={(e) => setCompanyForm({ ...companyForm, firstName: e.target.value })}
                          placeholder="e.g. Michael"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Last Name <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={companyForm.lastName}
                          onChange={(e) => setCompanyForm({ ...companyForm, lastName: e.target.value })}
                          placeholder="e.g. Vance"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Executive Title
                      </label>
                      <input
                        type="text"
                        value={companyForm.executiveTitle}
                        onChange={(e) => setCompanyForm({ ...companyForm, executiveTitle: e.target.value })}
                        placeholder="e.g. CEO / President / VP Investor Relations"
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={companyForm.city}
                          onChange={(e) => setCompanyForm({ ...companyForm, city: e.target.value })}
                          placeholder="e.g. Vancouver"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          value={companyForm.country}
                          onChange={(e) => setCompanyForm({ ...companyForm, country: e.target.value })}
                          placeholder="e.g. Canada"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Business Email <span className="text-[#0a2540] font-bold">(required)</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={companyForm.email}
                          onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                          placeholder="e.g. ceo@apexmining.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={companyForm.phone}
                          onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                          placeholder="e.g. +1 (604) 555-0188"
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Primary Asset Stage / Focus
                        </label>
                        <select
                          value={companyForm.assetStage}
                          onChange={(e) => setCompanyForm({ ...companyForm, assetStage: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-bold outline-none transition-all cursor-pointer"
                        >
                          <option value="Exploration & Discovery">Exploration &amp; Discovery</option>
                          <option value="Development & Feasibility">Development &amp; Feasibility</option>
                          <option value="Producer / Operational">Producer / Operational</option>
                          <option value="Royalty & Streaming">Royalty &amp; Streaming</option>
                          <option value="Energy Transition / Critical Minerals">Energy Transition / Critical Minerals</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          Showcase Interest
                        </label>
                        <select
                          value={companyForm.showcaseInterest}
                          onChange={(e) => setCompanyForm({ ...companyForm, showcaseInterest: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-bold outline-none transition-all cursor-pointer"
                        >
                          <option value="1-on-1 Executive Meetings">1-on-1 Executive Meetings</option>
                          <option value="Corporate Presentation">Corporate Presentation</option>
                          <option value="Keynote Panel">Keynote Panel</option>
                          <option value="Delegate Showcase">Delegate Showcase</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Company &amp; Key Project Description
                      </label>
                      <textarea
                        rows={4}
                        maxLength={5000}
                        value={companyForm.description}
                        onChange={(e) => setCompanyForm({ ...companyForm, description: e.target.value })}
                        placeholder="Briefly describe your company, flagship projects and market focus..."
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-300 focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 text-neutral-900 bg-white text-xs sm:text-sm font-medium outline-none transition-all resize-y"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={companyForm.subscribeNews}
                          onChange={(e) => setCompanyForm({ ...companyForm, subscribeNews: e.target.checked })}
                          className="w-4 h-4 text-[#0a2540] accent-[#0a2540] rounded border-neutral-300"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-700">
                          Sign up for news and updates
                        </span>
                      </label>
                    </div>

                    {errorMessage && (
                      <div
                        role="alert"
                        className="px-4 py-3.5 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs sm:text-sm font-semibold"
                      >
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="w-full py-4 rounded-2xl bg-[#0a2540] hover:bg-[#0d3b66] text-white text-xs sm:text-sm font-black tracking-[0.15em] uppercase shadow-lg shadow-[#0a2540]/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#0a2540]"
                    >
                      <span>{submitting ? "Submitting…" : "Complete Company Registration"}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== POLICIES — BLUE ===== */}
        <section className="relative w-full py-8 sm:py-10 bg-white border-t border-[#0a2540]/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
            <div
              className="text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a2540 0%, #0d3b66 50%, #14507a 100%)" }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="max-w-2xl">
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white bg-white/15 px-3.5 py-1 rounded-full inline-block mb-4">
                    REGISTRATION POLICIES &amp; REQUIREMENTS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    Important Registration Notice
                  </h3>
                  <div className="space-y-3 text-white/80 text-sm leading-relaxed font-light">
                    <p>
                      Entry into THE Event and special hotel discount rates are restricted strictly to registered participants.
                    </p>
                    <p>
                      You must register your attendance prior to THE Event. You must receive an official invitation prior to THE Event in order to receive your badge at the door.{" "}
                      <strong className="text-white font-bold underline">Walk-ins will not be accepted under any circumstances.</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white/15 border border-white/20 rounded-2xl p-6 lg:w-[360px] shrink-0">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Sponsorship Contact
                  </div>
                  <div className="text-base font-black text-white mb-2">Jennifer Choi</div>
                  <p className="text-xs text-white/60 mb-4">
                    To discuss Tier 1 sponsorship packages or custom options:
                  </p>
                  <a
                    href="mailto:jchoi@irinc.ca"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                  >
                    <span>jchoi@irinc.ca ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CitySection />
      </main>
      <IMWFooter />
    </>
  );
}
