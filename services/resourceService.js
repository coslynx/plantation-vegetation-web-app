import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const resources = await prisma.resource.findMany();
      res.status(200).json(resources);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching resources' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, description, link } = req.body;
      const resource = await prisma.resource.create({
        data: {
          name,
          description,
          link,
        },
      });
      res.status(201).json(resource);
    } catch (error) {
      res.status(400).json({ message: 'Error creating resource' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}