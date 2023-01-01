// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type Data = {
  text: string
  slug: string
}

type Message = {
  message: string
}

type ResponseType = Data | Message

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'POST') {
    const { text } = req.body
    const slug = text.toLowerCase().replace(/\s/g, '-')

    const resolution = await prisma.resolution.create({
      data: {
        text,
        slug,
      },
    })

    return res.status(200).json(resolution)
  } else if (req.method === 'PUT') {
    const { text, slug } = req.body

    await prisma.resolution.update({
      where: { id: slug },
      data: { text },
    })

    res.status(200).json({ message: 'Resolution updated!' })
  } else if (req.method === 'DELETE') {
    const { slug } = req.body

    await prisma.resolution.delete({
      where: { id: slug },
    })

    res.status(200).json({ message: 'Resolution deleted!' })
  }
}
