"use client";

const COUNT = 12;

export default function CatalanoSignature() {
  return (
    <section style={{ position: "relative", overflow: "hidden", height: "64px", background: "#ede7d9" }}>
      <style>{`
        @keyframes sigScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sig-track {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          width: max-content;
          height: 64px;
          padding: 0 1.75rem;
          animation: sigScroll 55s linear infinite;
        }
        .sig-logo {
          width: 13px;
          height: 13px;
          flex-shrink: 0;
          opacity: 0.18;
          display: block;
        }
        .sig-fade-l {
          position: absolute; left: 0; top: 0; bottom: 0; width: 100px;
          background: linear-gradient(to right, #ede7d9, transparent);
          z-index: 1; pointer-events: none;
        }
        .sig-fade-r {
          position: absolute; right: 0; top: 0; bottom: 0; width: 100px;
          background: linear-gradient(to left, #ede7d9, transparent);
          z-index: 1; pointer-events: none;
        }
      `}</style>
      <div className="sig-fade-l" />
      <div className="sig-fade-r" />
      <div className="sig-track">
        {Array.from({ length: COUNT * 2 }).map((_, i) => (
          <img key={i} src="/catalano-light.svg" alt="" aria-hidden="true" className="sig-logo" />
        ))}
      </div>
    </section>
  );
}