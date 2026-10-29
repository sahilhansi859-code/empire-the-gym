import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { gymData } from '../../data/gymData'

export function Marquee({ 
  text,
  speed = 50, 
  className = '',
  paused = false
}) {
  const { t } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
  const marqueeText = text || gymData[t].marqueeText
  const items = marqueeText.split(' • ').filter(Boolean)
  const duplicatedItems = [...items, ...items]
  const duration = Math.max(20, 120 - speed * 1.5)

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="flex whitespace-nowrap" 
           style={{ 
             animation: `marquee ${duration}s linear infinite`,
             animationPlayState: paused || isHovered ? 'paused' : 'running',
             willChange: 'transform'
           }}>
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="font-heading text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wider text-gym-red/60 px-4 py-2"
            style={{ whiteSpace: 'nowrap' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}