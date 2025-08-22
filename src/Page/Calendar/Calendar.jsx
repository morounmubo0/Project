export default function IslamicCalendar() {
  const days = [
    // First row (prev month tail then 1)
    { d: 26, sub: "", dim: true },
    { d: 27, sub: "", dim: true },
    { d: 28, sub: "", dim: true },
    { d: 29, sub: "", dim: true },
    { d: 31, sub: "", dim: true },
    { d: 1, sub: 26 },
    // Second row 2-8
     { d: 2, sub: 27 },
    { d: 3, sub: 28 },
    { d: 4, sub: 29 },
    { d: 5, sub: 30 },
    { d: 6, sub: 31 },
    { d: 7, sub: 1 },
    { d: 8, sub: 2 },
    { d: 9, sub: 3 },
    // Third row 10-16
    { d: 10, sub: 4 },
    { d: 11, sub: 5 },
    { d: 12, sub: 6 },
    { d: 13, sub: 7 },
    { d: 14, sub: 8 },
    { d: 15, sub: 9 },
    { d: 16, sub: 10 },
    // Fourth row 17-23 (22 active)
    { d: 17, sub: 11 },
    { d: 18, sub: 12 },
    { d: 19, sub: 13 },
    { d: 20, sub: 14 },
    { d: 21, sub: 15 },
    { d: 22, sub: 16, active: true },
    { d: 23, sub: 17 },
    // Fifth row 24-30
    { d: 24, sub: 18 },
    { d: 25, sub: 19 },
    { d: 26, sub: 20 },
    { d: 27, sub: 21 },
    { d: 28, sub: 22 },
    { d: 29, sub: 23 },
    { d: 30, sub: 24, dim: true },
  ];

  return (
    <div className="screen">
      <style>{css}</style>

      {/* Top header bar */}
      <div className="cal-header">
        <button className="icon-btn" aria-label="Back">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <div className="title">
          <div className="title-row">
            <span className="month">Safar, 1447</span>
            <svg viewBox="0 0 24 24" className="caret"><path d="M6 9l6 6 6-6" fill="currentColor"/></svg>
          </div>
          <div className="subtitle">July-August, 2025</div>
        </div>
        <div className="swap">
          <svg viewBox="0 0 24 24" className="swap-icon">
            <path d="M7 7h9m0 0-3-3m3 3-3 3M17 17H8m0 0 3 3m-3-3 3-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="swap-label">Gregorian</span>
        </div>
      </div>

      {/* Weekday bar */}
      <div className="weekday-bar">
        {['Sun','Mon','Tue','Wed','Thur','Fri','Sat'].map(w=> (
          <div key={w} className="weekday">{w}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid">
        {days.map((x, i)=> (
          <div key={i} className={"cell" + (x.dim?" dim":"") + (x.active?" active":"")}>
            <span className="g-day">{x.d}</span>
            {x.sub && <span className="h-day">{x.sub}</span>}
          </div>
        ))}
      </div>

      {/* Bottom sheet card */}
      <div className="sheet">
        <div className="grab"></div>
        <div className="tabs">
          <button className="tab active">Prayer Times<div className="pill"/></button>
          <button className="tab">Islamic Festivals</button>
        </div>

        <div className="list">
          {prayers.map((p)=> (
            <div key={p.name} className="row">
              <div className="left">
                <svg viewBox="0 0 24 24" className="picon">{p.svg}</svg>
                <span className="pname">{p.name}</span>
                <svg viewBox="0 0 24 24" className="spk">
                  <path d="M3 14v-4h3l4-3v10l-4-3H3zm13-2a3 3 0 012.6-2.97m0 5.94A3 3 0 0016 12" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.6" 
                  strokeLinecap="round"/>
                </svg>
              </div>
              <div className="time">{p.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Date section */}
      <div className="date-wrap">
        <div className="date-title">Date</div>
        <div className="date-cards">
          <div className="date-card">
            <div className="label">Gregorian Calendar</div>
            <div className="value">August 16, 2025</div>
          </div>
          <div className="date-card">
            <div className="label">Islamic Calendar</div>
            <div className="value">Safar 22, 1447</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const prayers = [
  { name: 'Fajr',    time: '5:29 AM',  svg: (<><path d="M6 12l3-2 2-4 2 4 3 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) },
  { name: 'Sunrise', time: '6:41 AM',  svg: (<><path d="M4 14h16M12 6v4m-5 1a5 5 0 1110 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) },
  { name: 'Duhr',    time: '12:51PM', svg: (<><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/></>) },
  { name: 'Asr',     time: '4:06 PM',  svg: (<><path d="M3 16h18M8 14a4 4 0 118 0" fill="none" stroke="currentColor" strokeWidth="1.6"/></>) },
  { name: 'Maghrib', time: '7:01 PM',  svg: (<><path d="M4 14h16M6 10a6 6 0 0012 0" fill="none" stroke="currentColor" strokeWidth="1.6"/></>) },
  { name: 'Isha',    time: '8:09 PM',  svg: (<><path d="M16 4a6 6 0 11-8 8 6.5 6.5 0 008-8z" fill="none" stroke="currentColor" strokeWidth="1.6"/></>) },
];

const css = `
:root{
  --bg-1:#0c7025; /* top gradient start */
  --bg-2:#0b5b20; /* bottom gradient end */
  --panel:#173a22; /* dark card */
  --panel-2:#15361f; /* deeper shadowed */
  --ink:#d8ead3; /* light text */
  --muted:#98b49f;
  --accent:#8ee08d; /* small green icons */
  --ring:#203c25;
}

/* Mobile screen container matching rounded device corners */
.screen{
  min-height:100vh;
  width:420px; /* emulate phone width */
  margin:0 auto;
  padding:20px 18px 32px;
  background: radial-gradient(120% 90% at 100% 0%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, var(--bg-1), var(--bg-2));
  border-radius:36px;
  color:var(--ink);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  position:relative;
  box-shadow: 0 10px 40px rgba(0,0,0,.35) inset;
}

/* Header */
.cal-header{display:flex; align-items:flex-start; justify-content:space-between; gap:10px;}
.icon-btn{background:transparent;border:0;color:var(--ink);padding:6px;cursor:pointer;opacity:.95}
.icon{width:26px;height:26px}
.title{display:flex;flex-direction:column;line-height:1}
.title-row{display:flex; align-items:center; gap:6px; font-size:22px; font-weight:700}
.caret{width:16px;height:16px; opacity:.9;}
.subtitle{font-size:12px; color:var(--muted); margin-top:6px}
.swap{display:flex; align-items:center; gap:8px}
.swap-icon{width:22px;height:22px;color:var(--ink)}
.swap-label{font-size:14px;color:var(--ink)}

/* Weekday bar */
.weekday-bar{margin-top:18px; background:#1f3c24; border-radius:10px; display:grid; grid-template-columns:repeat(7,1fr); padding:10px 12px; box-shadow:0 6px 16px rgba(0,0,0,.25) inset}
.weekday{ text-align:center; font-size:14px; color:#FAFFDB; opacity:.9}

/* Calendar grid */
.grid{ display:grid; grid-template-columns:repeat(7,1fr); gap:22px 14px; padding:18px 8px 10px;}
.cell{ position:relative; height:44px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#FAFFDB;}
.cell.dim{ opacity:.45 }
.g-day{ font-size:22px; font-weight:600; line-height:1}
.h-day{ position:absolute; bottom:-12px; left:50%; transform:translateX(-50%); font-size:12px; color:#FAFFDB }
.cell.active{ }
.cell.active::before{ content:""; position:absolute; ; width:42px; height:42px; border-radius:50%; }

/* Bottom sheet */
.sheet{ margin-top:22px; background: var(--panel); border-radius:18px; box-shadow: 0 16px 28px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.02); padding:16px 18px 10px; position:relative;}
.grab{ position:absolute; top:8px; left:50%; transform:translateX(-50%); width:54px; height:6px; background:#3a523f; border-radius:6px;}

.tabs{ display:flex;  margin-top:20px; margin-bottom:8px;}
.tab{ position:relative; background:transparent; color:#e9f6ea; border:0; font-weight:100; font-size:15px; padding:4px 0; cursor:pointer}
.tab .pill{ position:absolute; left:10px; right:10px;  height:4px; border-radius:6px; background:#bfeabf; display:none}
.tab.active .pill{ display:block }

.list{ margin-top:8px }
.row{ display:flex; align-items:center; justify-content:space-between; padding:16px 0; border-bottom:1px solid #23402a}
.row:last-child{ border-bottom:0 }
.left{ display:flex; align-items:center; gap:12px;}
.picon{ width:22px; height:22px; color:#78d778 }
.pname{ font-size:22px; letter-spacing:.2px; color:#FAFFDB; }
.spk{ width:18px; height:18px; color:#7ad27c; opacity:.9 }
.time{ font-size:16px; font-weight:800; color:#FAFFDB; }

/* Date cards area */
.date-wrap{ margin:26px 2px 4px }
.date-title{ font-size:22px; font-weight:800; margin-bottom:14px }
.date-cards{ display:grid; grid-template-columns:1fr 1fr; gap:16px;}
.date-card{ background: var(--panel-2); border-radius:12px; padding:14px 16px; box-shadow: 0 10px 20px rgba(0,0,0,.28) }
.date-card .label{ color:#a6bea9; font-size:13px; margin-bottom:8px }
.date-card .value{ font-size:18px; font-weight:700; color:#f2fbf2 }

/* ================= MEDIA QUERIES ================= */

/* Extra small screens (phones under 400px) */
@media (max-width: 400px) {
  .screen {
    width: 95%;         /* shrink to fit */
    border-radius: 24px;
    padding: 16px 12px;
  }

  .title-row { font-size: 18px; }
  .subtitle { font-size: 11px; }
  .g-day { font-size: 18px; }
  .pname { font-size: 18px; }
  .time { font-size: 14px; }
}

/* Small to medium screens (tablets, 401px – 768px) */
@media (min-width: 401px) and (max-width: 768px) {
  .screen {
    width: 80%;
    border-radius: 28px;
  }

  .title-row { font-size: 20px; }
  .g-day { font-size: 20px; }
  .pname { font-size: 20px; }

  .tabs {
    flex-direction: row;
    align-items: flex-start;
    gap: 180px;
  }

  .tab {
    font-size: 13px;
    padding: 8px 0;
  }

 

/* Large screens (769px and above) */
@media (min-width: 769px) {
  .screen {
    width: 420px;       /* lock to phone look */
    margin: 40px auto;  /* center like a card */
  }

   .tabs {
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 100px;
  }

  .tab {
    font-size: 14px;
    padding: 6px 4px;
  }

  .tab .pill {
    height: 3px;
  }

}

`;

