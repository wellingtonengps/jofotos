import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Galery from '@/components/Galery'
import Animations from '@/_components/animations'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const medias = await payload.find({
    collection: 'media',
  })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const images = medias.docs.map((doc: any) => ({
    id: doc.id,
    url: typeof doc.url === 'string' ? doc.url : doc.image?.url,
  }))

  return (
    <div className="home">
      <div className="content">
        <Animations />
        <Galery images={images} />
      </div>
    </div>
  )
}
