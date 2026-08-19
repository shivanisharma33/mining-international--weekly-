"use client";

import React, { useState } from "react";

type SpeakerLook = {
  skin: string;
  hair: string;
  style: string;
  suit: string;
  tie: string | null;
  bg: number;
};

type Speaker = {
  n: string;
  t: string;
  o: string;
  role: string;
  cats: string[];
  feat: number;
  look: SpeakerLook;
  img?: string;
};

const IMW_SPEAKERS: Speaker[] = [
  {
    n: "Armand MacKenzie",
    t: "President",
    o: "First Phosphate Corp",
    role: "KEYNOTE",
    cats: ["kn", "ex"],
    feat: 1,
    look: { skin: "#d5a688", hair: "#332a24", style: "side", suit: "#1d2433", tie: "#2f4d3a", bg: 214 },
    img: "/assets/images/Armand+New+BG+(002).webp",
  },
  {
    n: "Jenny-Lou Campbell",
    t: "Executive Director",
    o: "Indigenous Centre of Excellence for Mineral Development",
    role: "KEYNOTE",
    cats: ["kn"],
    feat: 1,
    look: { skin: "#e2b898", hair: "#4a3b30", style: "long", suit: "#22283a", tie: null, bg: 220 },
    img: "/assets/images/JLC+photo+(square).webp",
  },
  {
    n: "Colin Joudrie",
    t: "President & CEO",
    o: "Selkirk Copper Mines Inc",
    role: "PANELIST",
    cats: ["pn", "ex"],
    feat: 1,
    look: { skin: "#d9ac8c", hair: "#7d6b5c", style: "short", suit: "#20263a", tie: "#8c2333", bg: 208 },
    img: "/assets/images/Colin-scaled.webp",
  },
  {
    n: "Heng Vuong",
    t: "Executive VP & CFO",
    o: "Tacora Resources Inc.",
    role: "PANELIST",
    cats: ["pn", "ex"],
    feat: 1,
    look: { skin: "#e8c39e", hair: "#2a2126", style: "short", suit: "#1a2130", tie: "#3a4a72", bg: 218 },
    img: "/assets/images/HengVuong1.webp",
  },
  {
    n: "Susan Smith",
    t: "Managing Director",
    o: "Bluesky Strategy Group",
    role: "MODERATOR",
    cats: ["pn"],
    feat: 1,
    look: { skin: "#e0b494", hair: "#c9a05a", style: "bob", suit: "#232a3c", tie: null, bg: 224 },
    img: "/assets/images/Susan+Smith.webp",
  },
  {
    n: "Brendan Bell",
    t: "Chief Executive Officer",
    o: "Northwest Territories Mining Association",
    role: "PANELIST",
    cats: ["pn"],
    feat: 0,
    look: { skin: "#d2a284", hair: "#6b5646", style: "short", suit: "#252c3e", tie: "#7a1424", bg: 212 },
    img: "/assets/images/brendan.webp",
  },
  {
    n: "Todd Russell",
    t: "President",
    o: "NunatuKavut Community Council",
    role: "PANELIST",
    cats: ["pn"],
    feat: 0,
    look: { skin: "#c08e66", hair: "#241d1a", style: "short", suit: "#1d2433", tie: "#2f4d3a", bg: 216 },
    img: "/assets/images/Todd+Russell.webp",
  },
  {
    n: "Sandy Silver",
    t: "Special Advisor & Former Premier",
    o: "Yukon Government",
    role: "PANELIST",
    cats: ["pn"],
    feat: 0,
    look: { skin: "#d9ac8c", hair: "#9a8f85", style: "side", suit: "#20263a", tie: "#8c2333", bg: 210 },
    img: "/assets/images/Sandy+Silver.webp",
  },
  {
    n: "Mario Pieries",
    t: "Global Director, Nuclear",
    o: "Hatch Ltd.",
    role: "EXPERT",
    cats: ["ex"],
    feat: 0,
    look: { skin: "#d5a688", hair: "#4a3b30", style: "short", suit: "#1a2130", tie: "#3a4a72", bg: 226 },
    img: "/assets/images/Mario+P.webp",
  },
  {
    n: "Lyndsay Malchuk",
    t: "Host & Emcee",
    o: "Apaton Finance",
    role: "EMCEE",
    cats: ["pn"],
    feat: 0,
    look: { skin: "#e2b898", hair: "#d9c07a", style: "long", suit: "#232a3c", tie: null, bg: 218 },
    img: "/assets/images/Lyndsay+malchuk+Headshot+2026.webp",
  },
  {
    n: "Jay Rampersad",
    t: "VP Engineering & Development",
    o: "IR.INC",
    role: "EXPERT",
    cats: ["ex"],
    feat: 0,
    look: { skin: "#c08e66", hair: "#241d1a", style: "short", suit: "#252c3e", tie: "#7a1424", bg: 214 },
    img: "/assets/images/Jay+Rampersad.webp",
  },
  {
    n: "Francyne Joe",
    t: "Indigenous Relations Advisor",
    o: "First Nations Partnership",
    role: "PANELIST",
    cats: ["pn"],
    feat: 0,
    look: { skin: "#e0b494", hair: "#2a2126", style: "bob", suit: "#1d2433", tie: null, bg: 222 },
    img: "/assets/images/Francyne+Joe_2016.webp",
  },
  {
    n: "Ehren Cory",
    t: "Chief Executive Officer",
    o: "Canada Infrastructure Bank",
    role: "PANELIST",
    cats: ["pn", "ex"],
    feat: 0,
    look: { skin: "#d9ac8c", hair: "#7d6b5c", style: "side", suit: "#20263a", tie: "#3a4a72", bg: 208 },
    img: "/assets/images/Ehren+Cory+Headshot+Crop+2026.webp",
  },
  {
    n: "Dr. Willem Jacobs",
    t: "Head of Mining & Metals",
    o: "Global Capital",
    role: "EXPERT",
    cats: ["ex"],
    feat: 0,
    look: { skin: "#d2a284", hair: "#8a7663", style: "bald", suit: "#1a2130", tie: "#8c2333", bg: 228 },
    img: "/assets/images/drwill.webp",
  },
  {
    n: "Ed Ho",
    t: "CFA, MSc. Energy Policy & Climate",
    o: "Deloitte Canada",
    role: "EXPERT",
    cats: ["ex"],
    feat: 0,
    look: { skin: "#e8c39e", hair: "#332a24", style: "short", suit: "#252c3e", tie: "#2f4d3a", bg: 210 },
    img: "/assets/images/2026+Ed+Ho+1x1.webp",
  },
  {
    n: "Anton Antonov",
    t: "Managing Director & Global Head",
    o: "Global Mining Group",
    role: "EXPERT",
    cats: ["ex"],
    feat: 0,
    look: { skin: "#d5a688", hair: "#6b5646", style: "side", suit: "#1d2433", tie: "#7a1424", bg: 216 },
    img: "/assets/images/anton.antonov@marsh.com.webp",
  },
  {
    n: "Jesse McCormick",
    t: "Senior Vice President",
    o: "First Nations Major Projects Coalition",
    role: "MODERATOR",
    cats: ["pn"],
    feat: 0,
    look: { skin: "#c08e66", hair: "#241d1a", style: "short", suit: "#22283a", tie: "#3a4a72", bg: 214 },
    img: "/assets/images/Headshot+-+Jesse+McCormick.webp",
  },
  {
    n: "Allan Fordyce",
    t: "Partner, Mining Practice",
    o: "Global Advisory",
    role: "EXPERT",
    cats: ["ex"],
    feat: 0,
    look: { skin: "#d9ac8c", hair: "#9a8f85", style: "side", suit: "#20263a", tie: "#8c2333", bg: 220 },
    img: "/assets/images/Picture1.webp",
  },
];

function PortraitSVG({ look, w = 220, h = 230 }: { look: SpeakerLook; w?: number; h?: number }) {
  const { skin, hair, style, suit, tie, bg } = look;
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
    <svg viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
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
  const [spkFilter, setSpkFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const spkMatch = (s: Speaker) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesFilter = spkFilter === "all" || s.cats.includes(spkFilter);
    const matchesSearch = !term || (s.n + " " + s.t + " " + s.o).toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  };

  const featSpeakers = IMW_SPEAKERS.filter((s) => s.feat && spkMatch(s));
  const listSpeakers = IMW_SPEAKERS.filter((s) => !s.feat && spkMatch(s));
  listSpeakers.sort((a, b) => (sortOrder === "az" ? a.n.localeCompare(b.n) : b.n.localeCompare(a.n)));

  const showEmpty = featSpeakers.length === 0 && listSpeakers.length === 0;

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
      <section className="agenda-main" style={{ paddingTop: "10px" }}>
        <div className="wrap">
          <div className="spk-bar">
            <button className={`spk-pill ${spkFilter === "all" ? "on" : ""}`} onClick={() => setSpkFilter("all")}>
              All Speakers
            </button>
            <button className={`spk-pill ${spkFilter === "kn" ? "on" : ""}`} onClick={() => setSpkFilter("kn")}>
              Keynotes
            </button>
            <button className={`spk-pill ${spkFilter === "pn" ? "on" : ""}`} onClick={() => setSpkFilter("pn")}>
              Panels
            </button>
            <button className={`spk-pill ${spkFilter === "ex" ? "on" : ""}`} onClick={() => setSpkFilter("ex")}>
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

          {featSpeakers.length > 0 && (
            <div>
              <div className="spk-label">FEATURED SPEAKERS</div>
              <div className="feat-spk-grid">
                {featSpeakers.map((s, idx) => (
                  <article className="spk-card" key={idx}>
                    <div className="spk-photo h-[230px] overflow-hidden rounded-lg bg-slate-100 relative">
                      {s.img ? (
                        <img src={s.img} alt={s.n} className="w-full h-full object-cover object-top" />
                      ) : (
                        <PortraitSVG look={s.look} w={220} h={230} />
                      )}
                    </div>
                    <h3>{s.n}</h3>
                    <div className="spk-title">{s.t}</div>
                    <div className="spk-org">{s.o}</div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="all-spk-head">
            <div className="spk-label">ALL SPEAKERS</div>
            <div className="spk-sort">
              Sort by:{" "}
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as "az" | "za")}>
                <option value="az">A–Z</option>
                <option value="za">Z–A</option>
              </select>
            </div>
          </div>

          <div className="spk-rows">
            {listSpeakers.map((s, idx) => (
              <div className="spk-row" key={idx}>
                <span className="ph w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                  {s.img ? (
                    <img src={s.img} alt={s.n} className="w-full h-full object-cover object-top" />
                  ) : (
                    <PortraitSVG look={s.look} w={120} h={120} />
                  )}
                </span>
                <div>
                  <b>{s.n}</b>
                  <div className="rt">{s.t}</div>
                  <div className="ro">{s.o}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={`spk-empty ${showEmpty ? "show" : ""}`}>No speakers match your search.</div>

          <div className="spk-viewall">
            <button
              className="btn-outline-red cursor-pointer inline-flex items-center gap-2"
              onClick={() => {
                setSpkFilter("all");
                setSearchTerm("");
              }}
            >
              VIEW ALL SPEAKERS{" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
