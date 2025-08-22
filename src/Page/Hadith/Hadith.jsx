import { ChevronLeft, MoreHorizontal } from 'lucide-react'
import './Hadith.css'

function Hadith() {
  const hadithCollections = [
    {
      title: "Sahih al-Bukhari",
      description: "Sahih al-Bukhari is a collection of hadith compiled by Abu Abdullah Muhammad ibn Ismail al-Bukhari. His collection is recognized by the overwhelming majority of the Muslim world to be one of the most authentic collection of the sunnah of the prophet (S.A.W). It contains roughly 7563 hadith (with repetitions) in 98 books."
    },
    {
      title: "Sahih Muslim",
      description: "Sahih Muslim is a collection of hadith compiled by Imam Muslim ibn al-Hajjaj al-Naysaburi. His collection is considered to be one of the most authentic collections of the Sunnah of the Prophet(S.A.W), and along with Sahih al-Bukhari forms the 'Sahihain', or the 'two sahihs'. It contains roughly 7500 hadith (with repetition) in 57 books."
    },
    {
      title: "Sunan Abi Dawud",
      description: "Sunan Abi Dawud is a collection of hadith compiled by imam Abi Dawud Sulayman ibn al-Ash'ath as-Sijistani. It is widely considered to be among the six canonical collections of hadith (kutub as-Sittah) of the Sunnah of the prophet (S.A.W). It consists of 5274 ahadith in 43 books"
    },
    {
      title: "Sunan Ibn Majah",
      description: "Sunan Ibn Majah is a collection of hadith compiled by Ibn Majah. It is widely considered to be the sixth of the six canonical collection of hadith for (kutub as-sittah) of the Sunnah of the Prophet (S.A.W). It consists of 4341 ahadith in 37 books."
    },
    {
      title: "40 Hadith Nawawi",
      description: "Nawwi's Forty is a compilation of 40 hadiths by Imam al-Nawawi, most of which are from Sahih Muslim and Sahih al-Bukhari. It is particularly valued because it is a distillation, by one of the most eminent authorities in Islamic jurisprudence, of the foundation of Islamic Shari'ah."
    }
  ]

  return (
    <div className="hadith-container">
      {/* Header */}
      <div className="header">
        <ChevronLeft className="back-arrow" size={24} />
        <h1 className="header-title">Hadith Collections</h1>
        <MoreHorizontal className="menu-dots" size={24} />
      </div>

      {/* Hadith Collections */}
      <div className="collections-list">
        {hadithCollections.map((collection, index) => (
          <div key={index} className="collection-card">
            <h2 className="collection-title">{collection.title}</h2>
            <p className="collection-description">{collection.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hadith
