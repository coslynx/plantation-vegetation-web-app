import { prisma } from "@/lib/prisma";

export const fetchForumPosts = async () => {
  try {
    const forumPosts = await prisma.forumPost.findMany({
      include: {
        author: true,
      },
    });
    return forumPosts;
  } catch (error) {
    console.error("Error fetching forum posts:", error);
    throw new Error("Failed to fetch forum posts");
  }
};

export const createForumPost = async (data) => {
  try {
    const newForumPost = await prisma.forumPost.create({
      data,
    });
    return newForumPost;
  } catch (error) {
    console.error("Error creating forum post:", error);
    throw new Error("Failed to create forum post");
  }
};

export const updateForumPost = async (id, data) => {
  try {
    const updatedForumPost = await prisma.forumPost.update({
      where: {
        id,
      },
      data,
    });
    return updatedForumPost;
  } catch (error) {
    console.error("Error updating forum post:", error);
    throw new Error("Failed to update forum post");
  }
};

export const deleteForumPost = async (id) => {
  try {
    await prisma.forumPost.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error deleting forum post:", error);
    throw new Error("Failed to delete forum post");
  }
};