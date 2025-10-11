import Header from "../components/Header/Header"; 
import Button from "../components/Button/Button"
export default function Home() {
    return (
        <main className="p-6 space-y-4">
            <Header />
            <h1 className="text-3xl font-bold text-sky-600">Home</h1>
            <p className="text-gray-700">This is your home page!</p>
            <Button page="Home"/>
        </main>
    );
}
