interface Props {
    title?: string;
    subTitle?: string;
}

export const CustomJumbotron = ({
    subTitle = "Ofrecemos una amplia variedad de productos de calidad y paquetes escolares completos para todos los niveles educativos.",
}: Props) => {
    return (
        <section className="px-4 py-6 lg:px-8">
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    bg-gradient-to-r
                    from-violet-50
                    via-white
                    to-violet-100
                    shadow-sm
                "
            >
                {/* Decoraciones */}
                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-100 opacity-50" />
                <div className="absolute right-10 top-10 h-6 w-6 rounded-full bg-violet-200" />
                <div className="absolute bottom-5 left-1/2 h-4 w-4 rounded-full bg-violet-200" />

                <div className="relative z-10 grid items-center gap-8 px-8 py-10 lg:grid-cols-2 lg:px-14">
                    {/* TEXTO */}
                    <div>
                        <span className="mb-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                            Todo para tu éxito escolar
                        </span>

                        <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                            Tu papelería de confianza para{" "}
                            <span className="text-violet-600">
                                cada momento
                            </span>
                        </h1>

                        <p className="mt-5 max-w-lg text-slate-600">
                            {subTitle}
                        </p>
                    </div>

                    {/* IMAGEN */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/banner-removebg-preview.png"
                            alt="Papelería"
                            className="
                                w-full
                                max-w-[450px]
                                object-contain
                                drop-shadow-xl
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
