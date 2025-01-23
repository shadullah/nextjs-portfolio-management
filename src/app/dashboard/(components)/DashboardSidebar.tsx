"use client";
import { dashboardTabs } from "@/lib/dashboardTabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSideBar() {
  const pathname = usePathname();
  return (
    <div className="md:block hidden h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex-1 overflow-auto">
          <nav className="grid items-start pr-6 text-sm font-medium space-y-2">
            {dashboardTabs.map((tab) => (
              <Link
                key={tab.id}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  pathname === tab.path
                    ? "bg-gray-900 text-gray-100 dark:bg-gray-50 dark:text-gray-800"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                href={tab.path}
              >
                <div className="border rounded-lg border-gray-400 p-1 bg-white">
                  {tab.icon}
                </div>
                {tab.linkText}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
