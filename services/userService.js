import { prisma } from "@/lib/prisma";

export const fetchUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        projects: true,
        forumPosts: true,
      },
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchUser = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        projects: true,
        forumPosts: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
};