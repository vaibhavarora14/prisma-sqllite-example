import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  prisma.$connect();

  prisma.list.create({
    data: {
      channelId: 'C0G9J9Q9F',
      users: {
        create: [{ id: 'dcvds' }, { id: 'dvds' }]
      }
    }
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
