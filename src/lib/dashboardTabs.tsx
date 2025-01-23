import { ReactNode } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
// import { IoDocumentTextOutline } from "react-icons/io5";

const generateId = () => Math.floor(Math.random() * 10000);

type DashboardTab = {
  id: number;
  path: string;
  icon: ReactNode;
  linkText: string;
};

export const dashboardTabs: DashboardTab[] = [
  {
    id: generateId(),
    path: "/dashboard",
    icon: <IoDocumentTextOutline className="h-4 w-4" />,
    linkText: "Project",
  },
];
