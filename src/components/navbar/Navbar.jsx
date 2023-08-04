import React from "react";

export default function Navbar() {
  return (
    <nav class="flex justify-center h-20 bspace-x-4">
      <a
        href="/dashboard"
        class=" px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </a>
      <a
        href="/team"
        class=" px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Team
      </a>
      <a
        href="/projects"
        class=" px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Projects
      </a>
      <a
        href="/reports"
        class="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Reports
      </a>
    </nav>
  );
}
