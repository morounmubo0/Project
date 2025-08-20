import "./Prayer.css";

const PRAYERS = [
  { name: "Fajr",     time: "5:29 AM",  icon: "fajr" },
  { name: "Sunrise",  time: "6:41 AM",  icon: "sunrise" },
  { name: "Duhr",     time: "12:51PM",  icon: "duhr" },
  { name: "Asr",      time: "4:06 PM",  icon: "asr" },
  { name: "Maghrib",  time: "7:01 PM",  icon: "maghrib" },
  { name: "Isha",     time: "8:09 PM",  icon: "isha" },
];

function LineIcon({ name, className }) {
  // simple thin green line icons (SVG) to match the look
  switch (name) {
    case "fajr":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M3 14h18M7 12l3-2 2-4 2 4 3 2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "sunrise":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 16h16M12 6v4m-6 3a6 6 0 1112 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "duhr":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "asr":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M3 16h18M8 14a4 4 0 118 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "maghrib":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 16h16M6 10a6 6 0 0012 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "isha":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M16.5 4.5a7 7 0 11-9 9 7.5 7.5 0 009-9z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    default:
      return null;
  }
}

function SpeakerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M3 14v-4h3l4-3v10l-4-3H3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 12a3 3 0 012.6-2.9M18.6 17A3 3 0 0016 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function PrayerScreen() {
  return (
    <div className="screen">
      {/* top icons */}
      <div className="topbar">
        <div className="top-icon">
          {/* mic/camera glyph */}
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5 20c2-3 12-3 14 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <div className="top-icon">
          {/* settings hex glyph */}
          <svg viewBox="0 0 24 24">
            <path d="M12 3l7 4v10l-7 4-7-4V7z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
      </div>

      {/* header text */}
      <div className="centered-time">
        <div className="prayer-label">Asr</div>
        <div className="big-time">4:06 pm</div>
      </div>

      {/* layered sheet */}
      <div className="stack">
        <div className="sheet behind" aria-hidden="true"></div>
        <div className="sheet main">
          {/* date strip */}
          <div className="date-strip">
            <button className="chev" aria-label="prev day">
              <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
            <div className="hijri-date">Safar 21, 1147 AH</div>
            <button className="chev" aria-label="next day">
              <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
          </div>

          {/* list */}
          <div className="list">
            {PRAYERS.map((p) => (
              <div className="row" key={p.name}>
                <div className="left">
                  <LineIcon name={p.icon} className="picon" />
                  <span className="pname">{p.name}</span>
                  <SpeakerIcon className="spk" />
                </div>
                <div className="rtime">{p.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
