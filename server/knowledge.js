import { buildKnowledgeText, gymKnowledge } from './data/gymKnowledge.shared.js'

export function buildKnowledge() {
  return buildKnowledgeText()
}

export const knowledgeText = buildKnowledge()
export const gymData = gymKnowledge
