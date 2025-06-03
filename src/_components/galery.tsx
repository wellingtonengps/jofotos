'use client'

import CircularGallery from '@/ui/blocks/Components/CircularGallery/CircularGallery'
import { motion, LayoutGroup } from 'framer-motion'

type Item = {
  image: string
  text: string
}

type GaleryProps = {
  items: Item[]
}

export default function Galery({ items }: GaleryProps) {
  return (
    <div>
      <LayoutGroup>
        <motion.div className=" w-lvw h-lvh">
          <CircularGallery bend={0} borderRadius={0.05} items={items} />
        </motion.div>
      </LayoutGroup>
    </div>
  )
}
