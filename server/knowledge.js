import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'gymKnowledge.json'), 'utf-8'))

export function buildKnowledge() {
  const d = data
  const lines = []
  lines.push(`Name: ${d.name}`)
  lines.push(`Slogan: ${d.slogan}`)
  lines.push(`Owner: ${d.owner}`)
  lines.push(`Address: ${d.address}`)
  lines.push(`Phone: ${d.phone}`)
  lines.push(`Email: ${d.email}`)
  lines.push(`Timing weekdays: ${d.timing.weekdays}`)
  lines.push(`Timing sunday: ${d.timing.sunday}`)
  lines.push('Programs:')
  d.activities.forEach(a => lines.push(`- ${a.title}: ${a.description} Features: ${a.features.join(', ')}`))
  lines.push('Amenities:')
  d.amenities.forEach(a => lines.push(`- ${a.title}: ${a.description}`))
  lines.push('USPs:')
  d.usps.forEach(u => lines.push(`- ${u.title}: ${u.description}`))
  lines.push('Partner: ' + d.partner + ' - ' + d.partnerDescription)
  lines.push('Stats:')
  d.stats.forEach(s => lines.push(`- ${s.label}: ${s.value}`))
  lines.push('FAQs:')
  d.faq.forEach(f => lines.push(`Q: ${f.question} A: ${f.answer}`))
  lines.push('Trainers: names not publicly disclosed.')
  lines.push('Unverified (confirm by phone +91 94667 09410):')
  d.unverified.details.forEach(u => lines.push(`- ${u}`))
  lines.push('Not available: membership fees, plan prices, offers, trainer names, female batch timings, trial class policy.')
  lines.push('About: ' + d.about.story)
  lines.push('Mission: ' + d.about.mission)
  lines.push('Vision: ' + d.about.vision)
  lines.push('Social: WhatsApp ' + d.social.whatsapp + ', Instagram ' + d.social.instagram)
  lines.push('Pages: Home (hero, programs, amenities, stats, testimonials, CTA), About (story, mission, vision, owner, trainers, values, timeline), Gallery (12 photos), Contact (form, info, map), FAQ section.')
  return lines.join('\n')
}

export const knowledgeText = buildKnowledge()
export const gymData = data
