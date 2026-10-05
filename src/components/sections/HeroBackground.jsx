import React from 'react'

const particles = [
  { left: '7%', top: '18%', size: 4, delay: '0s', duration: '7s' },
  { left: '14%', top: '72%', size: 3, delay: '1.2s', duration: '8s' },
  { left: '27%', top: '13%', size: 3, delay: '2.4s', duration: '9s' },
  { left: '39%', top: '80%', size: 4, delay: '0.8s', duration: '7.5s' },
  { left: '52%', top: '16%', size: 3, delay: '3s', duration: '8.5s' },
  { left: '64%', top: '76%', size: 4, delay: '1.8s', duration: '9s' },
  { left: '77%', top: '20%', size: 3, delay: '2s', duration: '7s' },
  { left: '88%', top: '66%', size: 4, delay: '0.5s', duration: '8s' },
  { left: '94%', top: '35%', size: 3, delay: '3.5s', duration: '9s' },
]

export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* BASE ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.10),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(6,182,212,0.10),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.08),transparent_35%)]" />

      {/* MOVING GRID */}
      <div className="hero-grid absolute inset-0 opacity-[0.42]" />

      {/* LARGE SOFT GLOWING ORBS */}
      <div className="hero-orb hero-orb-one absolute -left-32 top-24 h-[420px] w-[420px] rounded-full" />
      <div className="hero-orb hero-orb-two absolute -right-40 top-8 h-[520px] w-[520px] rounded-full" />
      <div className="hero-orb hero-orb-three absolute bottom-[-220px] left-[38%] h-[500px] w-[500px] rounded-full" />

      {/* ABSTRACT LEARNING NETWORK */}
      <svg
        className="hero-network absolute inset-0 h-full w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroLineBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
            <stop offset="45%" stopColor="#0284c7" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLineCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left network */}
        <path className="hero-network-line" d="M0 180 C170 120 250 220 390 150 C470 110 520 150 600 90" stroke="url(#heroLineBlue)" />
        <path className="hero-network-line hero-network-line-delay" d="M20 590 C160 520 230 610 350 540 C450 480 510 530 650 450" stroke="url(#heroLineCyan)" />

        {/* Right network */}
        <path className="hero-network-line" d="M820 140 C930 210 1010 120 1110 180 C1220 245 1310 150 1440 210" stroke="url(#heroLineCyan)" />
        <path className="hero-network-line hero-network-line-delay" d="M790 570 C930 480 1000 580 1110 500 C1230 410 1320 520 1440 450" stroke="url(#heroLineBlue)" />

        {/* Connecting lines */}
        <line x1="390" y1="150" x2="470" y2="360" stroke="#0284c7" strokeOpacity="0.08" />
        <line x1="470" y1="360" x2="650" y2="450" stroke="#06b6d4" strokeOpacity="0.08" />
        <line x1="1010" y1="120" x2="930" y2="350" stroke="#0284c7" strokeOpacity="0.08" />
        <line x1="930" y1="350" x2="1110" y2="500" stroke="#06b6d4" strokeOpacity="0.08" />

        {/* Network nodes */}
        <g className="hero-network-node">
          <circle cx="390" cy="150" r="5" fill="#0284c7" />
          <circle cx="390" cy="150" r="13" fill="#0284c7" fillOpacity="0.08" />
        </g>
        <g className="hero-network-node hero-network-node-delay">
          <circle cx="470" cy="360" r="4" fill="#06b6d4" />
          <circle cx="470" cy="360" r="12" fill="#06b6d4" fillOpacity="0.08" />
        </g>
        <g className="hero-network-node">
          <circle cx="650" cy="450" r="5" fill="#0284c7" />
          <circle cx="650" cy="450" r="14" fill="#0284c7" fillOpacity="0.08" />
        </g>
        <g className="hero-network-node hero-network-node-delay">
          <circle cx="1010" cy="120" r="5" fill="#06b6d4" />
          <circle cx="1010" cy="120" r="13" fill="#06b6d4" fillOpacity="0.08" />
        </g>
        <g className="hero-network-node">
          <circle cx="930" cy="350" r="4" fill="#0284c7" />
          <circle cx="930" cy="350" r="12" fill="#0284c7" fillOpacity="0.08" />
        </g>
        <g className="hero-network-node hero-network-node-delay">
          <circle cx="1110" cy="500" r="5" fill="#06b6d4" />
          <circle cx="1110" cy="500" r="14" fill="#06b6d4" fillOpacity="0.08" />
        </g>
      </svg>

      {/* FLOATING PARTICLES */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle absolute rounded-full bg-brand-500"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {/* SMALL DECORATIVE STARS */}
      <div className="hero-star absolute left-[31%] top-[20%] text-brand-400">✦</div>
      <div className="hero-star hero-star-delay absolute right-[31%] top-[17%] text-teal-400">✦</div>
      <div className="hero-star absolute bottom-[25%] left-[48%] text-brand-300">✦</div>

      {/* MOVING LIGHT SWEEP */}
      <div className="hero-light-sweep absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl" />

      {/* EDGE FADE */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-ink-950 dark:via-ink-950/40" />
    </div>
  )
}
