import { prisma } from "@/lib/prisma";

export const fetchProjects = async () => {
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
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};

export const fetchProject = async (id) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id),
      },
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
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Failed to fetch project");
  }
};

export const createProject = async (data) => {
  try {
    const newProject = await prisma.project.create({
      data,
    });
    return newProject;
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
};

export const updateProject = async (id, data) => {
  try {
    const updatedProject = await prisma.project.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
    return updatedProject;
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
};

export const deleteProject = async (id) => {
  try {
    await prisma.project.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project");
  }
};