"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  fetchSpeakers,
  applySpeakerFilters,
  getSpeakerName,
  getSpeakerTitle,
  getSpeakerCompany,
  getSpeakerImage,
  IMW_SPEAKER_PUBLISH_TO,
  type StrapiSpeaker,
  type SpeakerFilterOptions,
} from "@/lib/api/speakers";
import { filterByPublishTo } from "@/lib/api/client";

type SpeakerLook = {
  skin: string;
  hair: string;
  style: string;
  suit: string;
  tie: string | null;
  bg: number;
};

function PortraitSVG({ look, w = 220, h = 230 }: { look?: SpeakerLook; w?: number; h?: number }) {
  const defaultLook: SpeakerLook = {
    skin: "#d5a688",
    hair: "#332a24",
    style: "side",
    suit: "#1d2433",
    tie: "#2f4d3a",
    bg: 214,
  };
  const { skin, hair, style, suit, tie, bg } = look || defaultLook;
  const cx = w / 2;
  let hairSvg = null;

  if (style === "short") {
    hairSvg = <path d={`M${cx - 34} ${h * 0.36} q2-34 34-34 q32 0 34 34 l-6 2 q-4-24-28-24 q-24 0-28 24 z`} fill={hair} />;
  } else if (style === "side") {
    hairSvg = <path d={`M${cx - 34} ${h * 0.38} q0-36 34-36 q34 0 34 36 l-8 0 q2-26-20-28 q-8 10-32 12 q-6 6-6 16 z`} fill={hair} />;
  } else if (style === "bob") {
    hairSvg = <path d={`M${cx - 38} ${h * 0.52} q-4-52 38-52 q42 0 38 52 l-10 4 q6-44-28-44 q-34 0-28 44 z`} fill={hair} />;
  } else if (style === "long") {
    hairSvg = <path d={`M${cx - 40} ${h * 0.66} q-8-64 40-64 q48 0 40 64 l-12 2 q4-54-28-54 q-32 0-28 54 z`} fill={hair} />;
  } else if (style === "bald") {
    hairSvg = <path d={`M${cx - 30} ${h * 0.33} q6-16 30-16 q24 0 30 16 l-6 1 q-8-11-24-11 q-16 0-24 11 z`} fill={hair} opacity=".55" />;
  }

  const tieSvg = tie ? (
    <>
      <path d={`M${cx - 5} ${h * 0.72} L${cx} ${h * 0.86} L${cx + 5} ${h * 0.72} L${cx} ${h * 0.68} Z`} fill={tie} />
      <path d={`M${cx - 4} ${h * 0.68} L${cx + 4} ${h * 0.68} L${cx} ${h * 0.73} Z`} fill={tie} />
    </>
  ) : (
    <path d={`M${cx - 9} ${h * 0.68} q9 8 18 0 l0 6 q-9 7-18 0 z`} fill="#e8ecf2" opacity=".7" />
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id={`pb${bg}_${w}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={`hsl(${bg},22%,88%)`} />
          <stop offset="1" stopColor={`hsl(${bg},18%,74%)`} />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#pb${bg}_${w})`} />
      <rect x={cx - 8} y={h * 0.5} width="16" height={h * 0.16} fill={skin} />
      <path d={`M${cx - 58} ${h} q4-34 34-38 q12 10 24 10 q12 0 24-10 q30 4 34 38 z`} fill={suit} />
      <path d={`M${cx - 14} ${h * 0.66} L${cx} ${h * 0.76} L${cx + 14} ${h * 0.66} L${cx + 8} ${h * 0.98} L${cx - 8} ${h * 0.98} Z`} fill="#f2f5f9" />
      {tieSvg}
      <ellipse cx={cx} cy={h * 0.42} rx="30" ry="33" fill={skin} />
      {hairSvg}
    </svg>
  );
}

export default function SpeakersView() {
  const [speakers, setSpeakers] = useState<StrapiSpeaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // User filters
  const [spkFilter, setSpkFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("" );
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const loadSpeakers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSpeakers(IMW_SPEAKER_PUBLISH_TO);
      // Client-side safety guarantee: only International Mining Week
      setSpeakers(filterByPublishTo(data, IMW_SPEAKER_PUBLISH_TO));
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[SpeakersView] Failed to fetch speakers:", err);
      }
      setError("Unable to load speakers at this time. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSpeakers();
  }, [loadSpeakers]);

  // Fixed IMW dataset
  const imwSpeakers = filterByPublishTo(speakers, IMW_SPEAKER_PUBLISH_TO);

  // Apply user-selected filters
  const filterOptions: SpeakerFilterOptions = {
    search: searchTerm,
    category: spkFilter === "all" ? undefined : spkFilter,
  };
  const filteredSpeakers = applySpeakerFilters(imwSpeakers, filterOptions);

  // Sort filtered speakers
  const sortedSpeakers = [...filteredSpeakers].sort((a, b) => {
    const nameA = getSpeakerName(a);
    const nameB = getSpeakerName(b);
    return sortOrder === "az" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  const featSpeakers = sortedSpeakers.filter((s) => {
    const cat = (s.category || "").toLowerCase();
    return cat.includes("keynote") || cat.includes("feat") || cat.includes("kn");
  });
  const listSpeakers = sortedSpeakers;

  const showEmpty = !loading && sortedSpeakers.length === 0;

  const handleClearFilters = () => {
    setSpkFilter("all");
    setSearchTerm("");
    setSortOrder("az");
  };

  return (
    <div className="pview on" id="pv-speakers">
      {/* SPEAKERS HERO */}
      <section className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center bg-[#070c16] pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
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

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full text-left">
          <div className="max-w-3xl">
            <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
              SPEAKERS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Global Leaders.<br />
              <span className="whitespace-nowrap">Insightful Perspectives.</span>
            </h1>
            <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
            <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed mb-8">
              Explore the lineup of industry leaders, experts and visionaries shaping the future of{"\u00a0"}mining.
            </p>
          </div>
        </div>
      </section>

      {/* SPEAKERS BODY */}
      <section className="agenda-main pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24">
        <div className="wrap">
          {/* Controls Bar */}
          <div className="spk-bar">
            <button className={`spk-pill ${spkFilter === "all" ? "on" : ""}`} onClick={() => setSpkFilter("all")}>
              All Speakers
            </button>
            <button className={`spk-pill ${spkFilter === "keynote" ? "on" : ""}`} onClick={() => setSpkFilter("keynote")}>
              Keynotes
            </button>
            <button className={`spk-pill ${spkFilter === "panel" ? "on" : ""}`} onClick={() => setSpkFilter("panel")}>
              Panels
            </button>
            <button className={`spk-pill ${spkFilter === "expert" ? "on" : ""}`} onClick={() => setSpkFilter("expert")}>
              Industry Experts
            </button>
            <label className="spk-search">
              <input
                type="search"
                placeholder="Search speakers, companies..."
                aria-label="Search speakers"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M20 20l-4-4" />
              </svg>
            </label>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-16 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#005B82] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-semibold text-neutral-600">Loading International Mining Week speakers...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="my-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm text-center">
              {error}
            </div>
          )}

          {/* Featured Speakers (if any) */}
          {!loading && featSpeakers.length > 0 && (
            <div>
              <div className="spk-label">FEATURED SPEAKERS</div>
              <div className="feat-spk-grid">
                {featSpeakers.map((s) => {
                  const name = getSpeakerName(s);
                  const title = getSpeakerTitle(s);
                  const comp = getSpeakerCompany(s);
                  const imgUrl = getSpeakerImage(s);

                  return (
                    <article className="spk-card" key={s.documentId || s.id}>
                      <div className="spk-photo h-[230px] overflow-hidden rounded-lg bg-slate-100 relative">
                        {imgUrl ? (
                          <img src={imgUrl} alt={name} className="w-full h-full object-cover object-top" />
                        ) : (
                          <PortraitSVG w={220} h={230} />
                        )}
                      </div>
                      <h3>{name}</h3>
                      {title && <div className="spk-title">{title}</div>}
                      {comp && <div className="spk-org">{comp}</div>}
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Speakers Section */}
          {!loading && listSpeakers.length > 0 && (
            <>
              <div className="all-spk-head">
                <div className="spk-label">ALL SPEAKERS ({listSpeakers.length})</div>
                <div className="spk-sort">
                  Sort by:{" "}
                  <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as "az" | "za")}>
                    <option value="az">A–Z</option>
                    <option value="za">Z–A</option>
                  </select>
                </div>
              </div>

              <div className="spk-rows">
                {listSpeakers.map((s) => {
                  const name = getSpeakerName(s);
                  const title = getSpeakerTitle(s);
                  const comp = getSpeakerCompany(s);
                  const imgUrl = getSpeakerImage(s);

                  return (
                    <div className="spk-row" key={s.documentId || s.id}>
                      <span className="ph w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 flex items-center justify-center">
                        {imgUrl ? (
                          <img src={imgUrl} alt={name} className="w-full h-full object-cover object-top" />
                        ) : (
                          <PortraitSVG w={60} h={60} />
                        )}
                      </span>
                      <div>
                        <b>{name}</b>
                        {title && <div className="rt">{title}</div>}
                        {comp && <div className="ro">{comp}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Clean Empty State */}
          {showEmpty && (
            <div className="py-16 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-[#005B82]">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-1">No speakers available</h3>
              <p className="text-xs text-neutral-500 mb-6">
                Speakers for International Mining Week will be announced soon.
              </p>
              {(searchTerm || spkFilter !== "all") && (
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-[#005B82] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#004766] transition-all"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {/* Reset / View All Button */}
          {!loading && listSpeakers.length > 0 && (
            <div className="spk-viewall">
              <button
                className="btn-outline-red cursor-pointer inline-flex items-center gap-2"
                onClick={handleClearFilters}
              >
                VIEW ALL SPEAKERS{" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
