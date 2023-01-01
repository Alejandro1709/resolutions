import prisma from '../lib/prisma'

async function main() {
  await prisma.resolution.deleteMany({})

  const first = await prisma.resolution.create({
    data: {
      text: 'Conseguir un nuevo trabajo',
      slug: 'conseguir-un-nuevo-trabajo',
    },
  })

  const second = await prisma.resolution.create({
    data: {
      text: 'Tener un buen año académico',
      slug: 'finish-prisma-tutorial',
    },
  })

  const third = await prisma.resolution.create({
    data: {
      text: 'Subir más videos a youtube',
      slug: 'subir-mas-videos-a-youtube',
    },
  })

  const fourth = await prisma.resolution.create({
    data: {
      text: 'Mejorar en twitch',
      slug: 'mejorar-en-twitch',
    },
  })

  const fifth = await prisma.resolution.create({
    data: {
      text: 'Tener más viajes',
      slug: 'tener-mas-viajes',
    },
  })

  const sixth = await prisma.resolution.create({
    data: {
      text: 'Aprender 4 nuevos lenguajes de programación',
      slug: 'aprender-4-nuevos-lenguajes-de-programacion',
    },
  })

  const seventh = await prisma.resolution.create({
    data: {
      text: 'Seguir yendo al gimnasio',
      slug: 'seguir-yendo-al-gimnasio',
    },
  })

  const eighth = await prisma.resolution.create({
    data: {
      text: 'Crear un nuevo proyecto relacionado con la IA',
      slug: 'crear-un-nuevo-proyecto-relacionado-con-la-ia',
    },
  })

  console.log({ first, second, third, fourth, fifth, sixth, seventh, eighth })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
