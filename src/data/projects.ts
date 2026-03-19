import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Multi-Tenant HR Management SaaS",
    description:
      "Scalable HR system with RBAC, payroll, and employee lifecycle management.",
    tech: [".NET Core", "Angular", "SQL Server"],
    github: "#",
    live: "#",
    status: "completed",
  },
  {
    id: "2",
    title: "E-Commerce REST API",
    description:
      "Secure API with JWT authentication, product catalog, and order system.",
    tech: [".NET Core", "React", "SQL Server"],
    status: "completed",
  },
];
