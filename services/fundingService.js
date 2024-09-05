import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const opportunities = await prisma.fundingOpportunity.findMany();
      res.status(200).json(opportunities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching funding opportunities" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, description, link } = req.body;
      const opportunity = await prisma.fundingOpportunity.create({
        data: {
          name,
          description,
          link,
        },
      });
      res.status(201).json(opportunity);
    } catch (error) {
      res.status(400).json({ message: "Error creating funding opportunity" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}