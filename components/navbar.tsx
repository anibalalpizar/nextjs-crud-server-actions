import React from "react";
import { ModeToggle } from "./theme-toggle-button";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between py-10">
      <h1 className="text-3xl font-bold">Next Actions Crud</h1>

      <div className="flex gap-x-2 items-center">
        <Link className={buttonVariants({ variant: "secondary" })} href="new">
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
