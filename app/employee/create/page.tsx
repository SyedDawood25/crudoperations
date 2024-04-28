import { EmployeeForm } from "@/components/employee-form";
import { FormWrapper } from "@/components/form-wrapper";

const EmployeeCreatePage = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <FormWrapper title="Create a New Employee">
        <EmployeeForm />
      </FormWrapper>
    </main>
  );
};

export default EmployeeCreatePage;
