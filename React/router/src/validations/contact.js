import * as yup from "yup"


export const contactSchema = yup.object().shape({
    name: yup.string().min(2, "Invalid name").required("Name is required"),
    email: yup.string().email("Email is not valid").required("Email is required")
})