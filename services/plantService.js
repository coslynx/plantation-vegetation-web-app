import { prisma } from "@/lib/prisma";

export const fetchPlants = async () => {
  try {
    const plants = await prisma.species.findMany({
      include: {
        plantings: true,
      },
    });
    return plants;
  } catch (error) {
    console.error("Error fetching plants:", error);
    throw new Error("Failed to fetch plants");
  }
};

export const fetchPlant = async (id) => {
  try {
    const plant = await prisma.species.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        plantings: true,
      },
    });
    return plant;
  } catch (error) {
    console.error("Error fetching plant:", error);
    throw new Error("Failed to fetch plant");
  }
};