import { z } from "zod";

export const EmployeeSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name should be atleast 2 characters"
    }),
    lastName: z.string().min(2, {
        message: "Last Name should be atleast 2 characters"
    }),
    email: z.string().email({
        message: "Enter a valid email"
    }),
    phoneNumber: z.string().min(11, {
        message: "Phone Number must contain atleast 11 digits"
    })
})