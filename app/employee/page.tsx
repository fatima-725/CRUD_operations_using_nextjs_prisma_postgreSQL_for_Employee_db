import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EmployeePage = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 justify-center items-center w-screen">
      <h1 className="text-4xl font-bold ">
        CRUD Operation using NextJS 14, Prisma and PostgreSQL
      </h1>
      <Button asChild>
        <Link href="/employee/create">Create</Link>
      </Button>
    </div>
  );
};

export default EmployeePage;
