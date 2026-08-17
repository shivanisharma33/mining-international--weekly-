"use client";

import React, { useState } from "react";
import IMWHeader from "@/components/imw/IMWHeader";
import IMWFooter from "@/components/imw/IMWFooter";
import StayConnected from "@/components/imw/StayConnected";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white dark:bg-[#070b14]">
        {/* Contact Hero */}
        <section className="relative w-full py-10 sm:py-14 bg-[#090d16] text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/quebec_city_host.png')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/80 via-[#090d16]/95 to-[#090d16]"></div>
          <div className="relative max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="text-[#005B82] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mb-4">
              Contact International Mining Week
            </h1>
            <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about event programming, registration, partnerships, or media inquiries? Our team is here to assist you.
            </p>
          </div>
        </section>

        {/* Contact Cards & Form */}
        <section className="w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-50 dark:bg-[#0d121f] p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#005B82]/10 text-[#005B82] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white text-base mb-1">Email Us</h3>
                <p className="text-xs text-neutral-500 mb-2">For general &amp; event inquiries</p>
                <a href="mailto:info@internationalminingweek.com" className="text-sm font-bold text-[#005B82] hover:underline block break-all">
                  info@internationalminingweek.com
                </a>
                <a href="mailto:jchoi@irinc.ca" className="text-sm font-bold text-[#005B82] hover:underline block break-all mt-1">
                  jchoi@irinc.ca
                </a>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-[#0d121f] p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#005B82]/10 text-[#005B82] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.01-5.09-3.274-6.1-6.1l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white text-base mb-1">Call Us</h3>
                <p className="text-xs text-neutral-500 mb-2">Mon - Fri from 9am to 5pm EST</p>
                <a href="tel:+19055153508" className="text-sm font-bold text-[#005B82] hover:underline block">
                  +1-905-515-3508
                </a>
                <a href="tel:+14185551234" className="text-sm font-bold text-neutral-700 dark:text-neutral-300 hover:underline block mt-1">
                  +1 418 555 1234
                </a>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-[#0d121f] p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#005B82]/10 text-[#005B82] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white text-base mb-1">Venue &amp; Location</h3>
                <p className="text-xs text-neutral-500 mb-2">Host City Destination</p>
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 block">
                  Centre des Congrès de Québec
                </span>
                <span className="text-xs text-neutral-500 block">Québec City, QC, Canada</span>
              </div>
            </div>
          </div>

          {/* Form Box */}
          <div className="bg-neutral-50 dark:bg-[#0d121f] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Send Us a Message</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8">
              Fill out the contact form below and a member of our team will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 rounded-xl text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">Message Sent!</h3>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm max-w-lg mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Your message has been received. Our team will get back to you shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151c2e] text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#005B82]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151c2e] text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#005B82]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Company or Affiliation"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151c2e] text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#005B82]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151c2e] text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#005B82]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sponsorship & Partnership">Sponsorship &amp; Partnership</option>
                      <option value="Registration & Tickets">Registration &amp; Tickets</option>
                      <option value="Speaking Opportunity">Speaking Opportunity</option>
                      <option value="Media & Press">Media &amp; Press</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151c2e] text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#005B82]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your request or inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151c2e] text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-[#005B82]"
                  ></textarea>
                </div>

                <div className="pt-2 text-right">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-[#005B82] hover:bg-[#023B50] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
