'use client'

import Image from 'next/image'
import { useState } from 'react'

type Media = {
  id: string
  url: string
}

export default function Galery({ images }: { images: Media[] }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [start, setStart] = useState<{ x: number; y: number } | null>(null)

  const radiusX = 400
  const radiusY = 200
  const centerX = 600
  const centerY = 400

  const handleMouseDown = (e: React.MouseEvent) => {
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (start) {
      setPosition({
        x: e.clientX - start.x,
        y: e.clientY - start.y,
      })
    }
  }

  const handleMouseUp = () => {
    setStart(null)
  }

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-black relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: start ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        {images.map((media, i) => {
          const angle = (i / images.length) * 2 * Math.PI
          const x = centerX + radiusX * Math.cos(angle)
          const y = centerY + radiusY * Math.sin(angle)
          return (
            <Image
              key={media.id}
              width={300}
              height={200}
              src={media.url}
              alt={`Imagem ${i}`}
              className="absolute rounded-lg shadow-lg"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
