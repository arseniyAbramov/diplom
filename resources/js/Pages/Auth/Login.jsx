import { Head, useForm } from "@inertiajs/react";
import IconArrowRight from "/public/arrow-right.svg";
import Logo from "/public/logo-mechta.svg";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Вход" />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 font-manrope">
                <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md text-center">
                    <img
                        src={Logo}
                        alt="Логотип"
                        className="mx-auto mb-6 h-20"
                    />

                    {/* Заголовок */}
                    <h1 className="text-[36px] font-extralight text-[#323343] mb-2">
                        Добро пожаловать
                    </h1>

                    {/* Подзаголовок */}
                    <p className="text-[18px] font-medium text-[#757B82] mb-6">
                        Для входа введите свой адрес электронной почты и пароль.
                    </p>

                    <form onSubmit={submit} className="text-left">
                        <label className="block text-sm text-[#757B82] mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full border border-blue-400 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm mb-2">
                                {errors.email}
                            </div>
                        )}

                        <label className="block text-sm text-[#757B82] mb-1">
                            Пароль
                        </label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        {errors.password && (
                            <div className="text-red-500 text-sm mb-4">
                                {errors.password}
                            </div>
                        )}

                        {/* Забыли пароль */}
                        <div className="text-center mb-4">
                            <a
                                href={route("password.request")}
                                className="text-blue-600 text-sm hover:underline"
                            >
                                Забыли пароль?
                            </a>
                        </div>

                        {/* Кнопка */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#4F6AF3] text-white py-2 rounded-md font-extralight text-[16px] hover:bg-[#3f59d9] transition flex justify-between items-center px-4"
                        >
                            <span>Продолжить</span>
                            <img
                                src={IconArrowRight}
                                alt="→"
                                className="w-4 h-4"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
