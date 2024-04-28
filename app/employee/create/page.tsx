import { EmployeeForm } from "@/components/employee-form";
import { FormWrapper } from "@/components/form-wrapper";
import React from "react";

const EmployeeCreatePage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <FormWrapper title="Create a New Employee">
        <EmployeeForm />
      </FormWrapper>
    </div>
  );
};

export default EmployeeCreatePage;
