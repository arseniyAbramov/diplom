import Sidebar from "@/Layouts/Sidebar";

export default function Calendar({ auth }) {
    return (
        <Sidebar user={auth.user}>
            <h1 className="text-2xl font-semibold text-[#323343] mb-4">
                Календарь
            </h1>
            <p>Тут в будущем будет React Big Calendar и фильтры.</p>
        </Sidebar>
    );
}
