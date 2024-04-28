"use server";
import { z } from "zod";
import { EmployeeSchema } from "@/schemas";
import { db } from "@/lib/db";

export const createEmployee = async (values : z.infer<typeof EmployeeSchema>) => {

    const validatedValues = EmployeeSchema.safeParse(values);

    if(!validatedValues.success) {
        return {
            error: "The values are invalid"
        }
    }

    const employee = await db.employee.create({
        data: {
            firstName: validatedValues.data.firstName,
            lastName: validatedValues.data.lastName,
            email: validatedValues.data.email,
            phoneNumber: validatedValues.data.phoneNumber
        }
    });

    console.log(employee);
}