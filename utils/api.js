import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        include: {
          projects: true,
          forumPosts: true,
        },
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  } else if (req.method === 'POST') {
    try {
      const { username, email, password, bio, profilePicture } = req.body;
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password,
          bio,
          profilePicture,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}