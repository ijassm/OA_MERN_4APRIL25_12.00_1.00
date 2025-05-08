import { useRouteError } from 'react-router';

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-lg">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    );
}

