import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const tasks = [
    {
      title: 'Learn Vue 3',
      description: 'Explore Composition API and reactivity system',
      priority: 2,
      completed: false,
    },
    {
      title: 'Build React version',
      description: 'Implement the same UI and logic using React',
      priority: 1,
      completed: false,
    },
    {
      title: 'Setup microfrontends host',
      description: 'Integrate both frontends via Vite Module Federation',
      priority: 3,
      completed: false,
    },
    {
      title: 'Refactor backend',
      description: 'Add Swagger, validation, and better error handling',
      priority: 4,
      completed: false,
    },
  ];

  await prisma.task.deleteMany();

  for (const task of tasks) {
    await prisma.task.create({ data: task });
  }

  console.log('✅ Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
