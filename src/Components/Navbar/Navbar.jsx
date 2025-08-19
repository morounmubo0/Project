import React from "react";
import Quran from "../../assets/quran.png";
import Quran_1 from "../../assets/quran_1.png";
import Hadith from "../../assets/hadith.png";
import Prayer from "../../assets/prayer.png";
import Adhkar from "../../assets/adhkar.png";
import Dua from "../../assets/dua.png";
import Calendar from "../../assets/calendar.png";
import Mufti from "../../assets/mufti.png";
import Omar from "../../assets/omar.png";
import "./Navbar.css";

function Navbar() { 
  const gridItems = [
    { title: "Quran", image: Quran_1, link: "/quran_1" },
    { title: "Hadith", image: Hadith, link: "/hadith" },
    { title: "Prayer", image: Prayer, link: "/prayer" },
    { title: "Adhkar", image: Adhkar, link: "/adhkar" },
    { title: "Dua", image: Dua, link: "/dua" },
    { title: "Calendar", image: Calendar, link: "/calendar" },
    { title: "Scholars", images: [Mufti, Omar], link: "/scholars" },
  ];


  return (
    <>
    <header className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand">Ummify</span>
        <button className="signin-btn"  onClick={() => window.location.href = "/signup"}>Sign in</button>
      </div>
    </header>

     <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Daily Quran Recitation</h1>
            <p>Listen to a beautiful recitation of the Quran and explore Islamic resources to enrich your faith.</p>
          </div>
          <div className="hero-image">
            <img src={Quran} alt="Quran recitation" />
          </div>
        </div>
      </section>

       <section className="grid-section">
        <div className="grid-container">
          {gridItems.map((item) => (
            <a key={item.title} href={item.link} className="grid-item">
              {item.image && (
              <img src={item.image} alt={item.title} />
            )}
            {item.images && (
              <div className="multi-image">
                {item.images.map((img, index) => (
                  <img key={index} src={img} alt={`${item.title} ${index + 1}`} />
                ))}
              </div>
            )}
              
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </section>

      </>
  );
}


export default Navbar;
