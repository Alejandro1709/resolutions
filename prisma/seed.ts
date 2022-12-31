import prisma from '../lib/prisma'

async function main() {
  const first = await prisma.resolution.create({
    data: {
      text: 'I will not eat any more chocolate',
      slug: 'no-more-chocolate',
    },
  })

  const second = await prisma.resolution.create({
    data: {
      text: 'Finish the Prisma tutorial',
      slug: 'finish-prisma-tutorial',
    },
  })

  console.log({ first, second })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
