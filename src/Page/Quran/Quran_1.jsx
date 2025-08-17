import React from "react";
import Vector from "../../Assets/Vector.png";
import Logo from "../../Assets/logo.png";
import { FaSearch, FaCog } from "react-icons/fa";
import "./Quran_1.css";

function Quran_1() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div>
          <img src={Logo} alt="Logo" className="logo" />
          <span className="logo">Quran</span>
        </div>
        <div className="header-icons">
          <FaSearch className="icon" />
          <FaCog className="icon" />
          </div>
      </div>

      {/* Last Read Card */}
      <div className="last-read">
        <div>
          <div className="last-read-small">Last Read</div>
          <div className="last-read-title">Al-Fatiah</div>
          <div className="last-read-info">Ayah no. 1</div>
        </div>
          <img src={Vector} alt="Last Read" className="book-icon" />        
      </div>
      
      {/* Filter Tabs */}
      <div className="tabs">
        <span className="tab active">Surah</span>
        <span className="tab">Juz</span>
        <span className="tab">Revelation</span>
      </div>
      {/* Slider */}
      <div className="slider">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      
      {/* Surah List */}
      <div className="surah-list">
        <div className="surah-item">
          <div>
            <div className="surah-name">Al-Fatihah</div>
            <div className="surah-meaning">The Opener</div>
          </div>
          <div>
            <div className="surah-arabic">ٱلْفَاتِحَة</div>
            <div className="surah-ayas">7 Ayahs</div>
          </div>
        </div>
        <hr />
        <div className="surah-item">
          <div>
            <div className="surah-name">Al-Baqarah</div>
            <div className="surah-meaning">The Cow</div>
          </div>
          <div>
            <div className="surah-arabic">ٱلْبَقَرَة</div>
            <div className="surah-ayas">286 Ayahs</div>
          </div>
        </div>
        <hr />
        <div className="surah-item">
          <div>
            <div className="surah-name">Ali 'Imran</div>
            <div className="surah-meaning">Family of Imran</div>
          </div>
          <div>
            <div className="surah-arabic">آلِ عِمْرَان</div>
            <div className="surah-ayas">200 Ayahs</div>
          </div>
        </div>
        <hr/>
         <div className="surah-item">
          <div>
            <div className="surah-name">An-Nisaa</div>
            <div className="surah-meaning">The Women</div>
          </div>
          <div>
            <div className="surah-arabic">ٱلنِّسَاء</div>
            <div className="surah-ayas">176 Ayahs</div>
          </div>
        </div>
        <hr />
         <div className="surah-item">
          <div>
            <div className="surah-name">Al-Ma'idah</div>
            <div className="surah-meaning">The Table Spread</div>
          </div>
          <div>
            <div className="surah-arabic">ٱلْمَائِدَة</div>
            <div className="surah-ayas">120 Ayahs</div>
          </div>
        </div>
        <hr />
         <div className="surah-item">
          <div>
            <div className="surah-name">Al-An'aam</div>
            <div className="surah-meaning">The Cattle</div>
          </div>
          <div>
            <div className="surah-arabic">ٱلْأَنْعَام</div>
            <div className="surah-ayas">165 Ayahs</div>
          </div>
        </div>
        <hr />
         <div className="surah-item">
          <div>
            <div className="surah-name">Al-A'raaf</div>
            <div className="surah-meaning">The Heights</div>
          </div>
          <div>
            <div className="surah-arabic">ٱلْأَعْرَاف</div>
            <div className="surah-ayas">206 Ayahs</div>
          </div>
        </div>
        {/* Add more surah items below if needed */}
      </div>
    </div>
  );
}

export default Quran_1;