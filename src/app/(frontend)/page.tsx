import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
//import './styles.css'
import Galery from '@/_components/galery'
import '../../styles/globals.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const medias = await payload.find({
    collection: 'media',
  })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const images = medias.docs.map((doc: any) => ({
    image: typeof doc.url === 'string' ? doc.url : doc.image?.url,
    text: doc.alt || doc.filename || 'Imagem', // escolha um texto que tenha nos seus dados
  }))

  return (
    <div className="home bg-redssize-max">
      <div className="content bg-red">
        <Galery items={images} />
      </div>
    </div>
  )
}
