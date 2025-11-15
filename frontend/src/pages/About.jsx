import Header from "../components/Header/Header"; 
import Button from "../components/Button/Button"
export default function About() {
    return (
        <main className="p-6 space-y-4">
            <Header />
            <h1 className="text-3xl font-bold text-sky-600">About</h1>
            <p className="text-gray-700">This page tells the user about the app.</p>
            <Button page="About"/>
        </main>
    );
}
