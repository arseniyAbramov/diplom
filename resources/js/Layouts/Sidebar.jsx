import { Link } from "@inertiajs/react";

import IconCalendar from "@/Icons/calendar.svg";
import IconChart from "@/Icons/chart.svg";
import IconData from "@/Icons/data.svg";
import IconInfo from "@/Icons/info.svg";
import IconPeople from "@/Icons/people.svg";
import IconProfile from "@/Icons/profile.svg";
import IconSetting from "@/Icons/setting.svg";

export default function Sidebar({ children, user }) {
    const isAdmin = user.role === "admin";

    const navItems = [
        { label: "Календарь", href: "/calendar", icon: IconCalendar },
        { label: "Профиль", href: "/profile", icon: IconProfile },
        { label: "Руководство", href: "/guide", icon: IconInfo },
        { label: "Настройки", href: "/settings", icon: IconSetting },
    ];

    const adminItems = [
        { label: "Дашборд", href: "/dashboard", icon: IconChart },
        { label: "Сотрудники", href: "/staff", icon: IconPeople },
        {
            label: "Панель Администратора",
            href: "/admin-panel",
            icon: IconData,
        },
    ];

    return (
        <div className="flex">
            <aside className="w-64 h-screen bg-white shadow-md fixed flex flex-col justify-between">
                <div className="p-6 space-y-4">
                    <h1 className="text-xl font-bold text-[#323343] mb-4">
                        MechtaApp
                    </h1>
                    <nav className="space-y-2">
                        {[...navItems, ...(isAdmin ? adminItems : [])].map(
                            (item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition px-2 py-2 rounded-md"
                                >
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                    <span>{item.label}</span>
                                </Link>
                            )
                        )}
                    </nav>
                </div>

                <div className="p-6 border-t">
                    <form method="POST" action="/logout">
                        <button
                            type="submit"
                            className="text-red-500 hover:underline"
                        >
                            🚪 Выйти
                        </button>
                    </form>
                </div>
            </aside>

            <main className="ml-64 p-8 w-full min-h-screen bg-gray-50">
                {children}
            </main>
        </div>
    );
}
