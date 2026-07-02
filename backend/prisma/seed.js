import { PrismaClient } from "@prisma/client";
import characters from "./seedData.js";

const prisma = new PrismaClient();

async function main() {
  for (const character of characters) {
    await prisma.character.create({ data: character });
  }
  console.log("Seed data başarıyla eklendi!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });