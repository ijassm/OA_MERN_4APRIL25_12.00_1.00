import { object, string } from "yup";

export const formSchema = object({
    name: string().min(2, "Invalid name").max(100, "Maxmium limit is 100").required("Name is required"),
    email: string().email("Invalid email format").required("Email is required")
})