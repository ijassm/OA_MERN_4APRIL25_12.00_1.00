import { Navbar } from "../components/navbar";

export const About = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-lg">This is the about page.</p>
                <p className="text-lg">Have fun coding!</p>
            </div>
        </>
    );
}