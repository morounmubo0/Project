import { ChevronLeft } from 'lucide-react'
import './Adhkar.css'

  function Adhkar() {
  const adhkarItems = [
    "Morning Adhkar",
    "Evening Adhkar", 
    "Before Sleeping Adhkar",
    "Waking Up Adhkar",
    "After Prayer Adhkar",
    "Dua After The Opening Takbeer",
    "After Tashahud Adhkar",
    "Dua During Ruku",
    "Dua During Sujood",
    "Istikharah"
  ]

  return (
    <div className="adhkar-container">
      {/* Header */}
      <div className="header">
        <ChevronLeft className="back-arrow" size={24} />
        <h1 className="header-title">Adhkar</h1>
      </div>

      {/* My Favorite Adhkar Section */}
      <div className="favorite-section">
        <h2 className="favorite-title">My Favorite Adhkar</h2>
        <p className="favorite-subtitle">No favorite yet</p>
      </div>

      {/* Adhkar List */}
      <div className="adhkar-list">
        <h3 className="list-title">Adhkar list</h3>
        {adhkarItems.map((item, index) => (
          <div key={index} className="adhkar-item">
            <span className="adhkar-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Adhkar