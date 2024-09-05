import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const species = await prisma.species.findMany();
      res.status(200).json(species);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching species' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, scientificName, family, nativeRegion, image, description, plantingTechniques, careRequirements, environmentalBenefits } = req.body;
      const species = await prisma.species.create({
        data: {
          name,
          scientificName,
          family,
          nativeRegion,
          image,
          description,
          plantingTechniques,
          careRequirements,
          environmentalBenefits
        },
      });
      res.status(201).json(species);
    } catch (error) {
      res.status(400).json({ message: 'Error creating species' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}