import { yupResolver } from "@hookform/resolvers/yup";
import { Navbar } from "../components/navbar";
import { useForm } from "react-hook-form";
import { contactSchema } from "../validations/contact";
import clsx from "clsx";
import { Input } from "../components/ui/input";
import { WithLabel } from "../components/ui/WithLabel";
import { Button } from "../components/ui/Button";

export const Contact = () => {
    // console.log(useForm());

    // console.log("rendered 😋");


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactSchema),
    });

    // console.log(register("name"), 'register("name")');

    // console.log(errors, "errors");


    const onSubmitHandler = handleSubmit((data) => {
        console.log(data, "data");
    })


    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center justify-center my-24 w-[90%] max-w-sm m-auto">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <p className="text-lg">This is the contact page.</p>
                <p className="text-lg">Have fun coding!</p>
                <form onSubmit={onSubmitHandler} className="w-full">
                    <div className="my-4">
                        <WithLabel name="name">
                            <Input id="name" name="name" {...register("name")} errors={errors} />
                        </WithLabel>
                    </div>
                    <div className="my-4">
                        <Input id="email" name="email" placeholder="Enter your email" {...register("email")} errors={errors} />
                    </div>

                    <Button>
                        Submit
                    </Button>
                    <div className="text-sm text-gray-500">
                        By clicking "Submit" you agree to our <span className="text-orange-400">Terms of Service</span> and <span className="text-orange-400">Privacy Policy</span>.
                    </div>
                </form>
            </main>
        </>
    );
};
