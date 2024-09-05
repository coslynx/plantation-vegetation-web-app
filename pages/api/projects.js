import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany({
        include: {
          plantSpecies: true,
          teamMembers: {
            select: {
              username: true,
              profilePicture: true,
            },
          },
        },
      });
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching projects' });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        name,
        description,
        location,
        plantSpecies,
        teamMembers,
        startDate,
        endDate,
      } = req.body;

      const project = await prisma.project.create({
        data: {
          name,
          description,
          location,
          plantSpecies: {
            connect: {
              name: plantSpecies,
            },
          },
          teamMembers: {
            connect: teamMembers.map((memberId: number) => ({ id: memberId })),
          },
          startDate,
          endDate,
        },
      });
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: 'Error creating project' });
    }
  } else if (req.method === 'PUT') {
    try {
      const {
        id,
        name,
        description,
        location,
        plantSpecies,
        teamMembers,
        startDate,
        endDate,
      } = req.body;

      const project = await prisma.project.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          description,
          location,
          plantSpecies: {
            connect: {
              name: plantSpecies,
            },
          },
          teamMembers: {
            set: teamMembers.map((memberId: number) => ({ id: memberId })),
          },
          startDate,
          endDate,
        },
      });
      res.status(200).json(project);
    } catch (error) {
      res.status(400).json({ message: 'Error updating project' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      await prisma.project.delete({
        where: {
          id: parseInt(id as string),
        },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: 'Error deleting project' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}