import { useLanguage } from '../../context/LanguageContext'
import { gymData } from '../../data/gymData'

export function Marquee({ 
  text = gymData.marqueeText, 
  speed = 50, 
  className = '',
  paused = false
}) {
  const { language } = useLanguage()
  const items = text.split(' • ').filter(Boolean)
  const duplicatedItems = [...items, ...items]
  const duration = Math.max(20, 120 - speed * 1.5)

  return (
    <div className={`overflow-hidden ${className}`} 
         onMouseEnter={() => paused && true} 
         onMouseLeave={() => paused && true}
         style={{ 
           animationPlayState: paused ? 'paused' : 'running' 
         }}>
      <div className="flex whitespace-nowrap" 
           style={{ 
             animation: `marquee ${duration}s linear infinite`,
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