'use client'
import Image from 'next/image'
import { motion, LayoutGroup } from 'framer-motion'

import GridMotion from '@/ui/blocks/Backgrounds/GridMotion/GridMotion'

const items2 = Array.from({ length: 28 }, (_, index) => (
  <Image
    key={`img-${index}`}
    src={`https://picsum.photos/seed/picsum-${index}/400/300`}
    alt={`Random image ${index + 1}`}
    width={400}
    height={300}
    className="rounded-lg object-cover"
  />
))
const items = ['https://picsum.photos/seed/picsum-1/400/300']

export default function Animations() {
  return (
    <div>
      <LayoutGroup>
        <motion.div>
          <GridMotion items={items} />
        </motion.div>
      </LayoutGroup>
    </div>
  )
}
