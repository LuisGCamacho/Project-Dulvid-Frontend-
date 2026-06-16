import { CustomJumbotron } from "@/shop/components/CustomJumbotron";

import {
    BadgeCheck,
    CheckCircle,
    ShieldCheck,
    Star,
    Tag,
    Truck,
} from "lucide-react";

/*
        <>
            <CustomJumbotron title="Todos los productos" />
            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 0} />
        </>
*/
import colores from "../../../assets/colores.jpeg";
import cuaderno from "../../../assets/cuaderno.jpeg";
import pegamento from "../../../assets/pegamento.jpeg";
import boligrafo from "../../../assets/boligrafo.jpeg";

import pack1 from "../../../assets/pack1.jpeg";
import pack2 from "../../../assets/pack2.jpeg";
import pack3 from "../../../assets/pack3.jpeg";

export const HomePage = () => {
    const featuredProducts = [
        {
            name: "Colores de Madera",
            image: colores,
            price: "$53.00",
        },
        {
            name: "Cuaderno Profesional",
            image: cuaderno,
            price: "$40.00",
        },
        {
            name: "Pegamento en Barra",
            image: pegamento,
            price: "$25.00",
        },
        {
            name: "Bolígrafo Azul",
            image: boligrafo,
            price: "$42.00",
        },
    ];

    const schoolPacks = [
        {
            name: "Paquete Básico Primaria",
            image: pack1,
            price: "$250.00",
        },
        {
            name: "Paquete Completo Secundaria",
            image: pack2,
            price: "$380.00",
        },
        {
            name: "Paquete Premium",
            image: pack3,
            price: "$1,100.00",
        },
    ];

    return (
        <section className="mt-8 space-y-6">
            <CustomJumbotron />
            {/* BENEFICIOS */}
            <div className="grid gap-4 md:grid-cols-3 mx-8">
                <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
                    <div className="rounded-full bg-violet-100 p-3">
                        <ShieldCheck className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                        <h3 className="font-semibold">Calidad Garantizada</h3>

                        <p className="text-sm text-muted-foreground">
                            Trabajamos con las mejores marcas para asegurar
                            productos de calidad.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
                    <div className="rounded-full bg-violet-100 p-3">
                        <Tag className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                        <h3 className="font-semibold">Precios Accesibles</h3>

                        <p className="text-sm text-muted-foreground">
                            Los mejores precios del mercado en todos nuestros
                            productos.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
                    <div className="rounded-full bg-violet-100 p-3">
                        <Truck className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Atención Personalizada
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            Brindamos asesoría y servicio amigable para nuestros
                            clientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* PRODUCTOS + INFO */}
            <div className="grid gap-6 lg:grid-cols-3 mx-8">
                {/* PRODUCTOS DESTACADOS */}
                <div className="lg:col-span-1 rounded-xl border p-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="font-semibold">Productos Destacados</h2>

                        <button className="text-sm text-violet-600 hover:underline cursor-pointer">
                            Ver todos
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {featuredProducts.map((product) => (
                            <div
                                key={product.name}
                                className="rounded-lg border p-2 text-center"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="mx-auto h-16 object-contain"
                                />

                                <p className="mt-2 text-xs font-medium">
                                    {product.name}
                                </p>

                                <p className="text-sm font-bold text-violet-700">
                                    {product.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PAQUETES */}
                <div className="lg:col-span-1 rounded-xl border p-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="font-semibold">
                            Paquetes Escolares Disponibles
                        </h2>

                        <button className="text-sm text-violet-600 hover:underline cursor-pointer">
                            Ver todos
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {schoolPacks.map((pack) => (
                            <div
                                key={pack.name}
                                className="rounded-lg border p-2 text-center"
                            >
                                <img
                                    src={pack.image}
                                    alt={pack.name}
                                    className="mx-auto h-20 object-contain"
                                />

                                <p className="mt-2 text-xs font-medium">
                                    {pack.name}
                                </p>

                                <p className="text-sm font-bold text-violet-700">
                                    {pack.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* POR QUÉ ELEGIRNOS */}
                <div className="rounded-xl border p-4">
                    <h2 className="mb-4 font-semibold">¿Por qué elegirnos?</h2>

                    <div className="space-y-5">
                        <div className="flex gap-3">
                            <CheckCircle className="mt-0.5 h-5 w-5 text-violet-600" />

                            <div>
                                <h3 className="font-medium">Variedad</h3>

                                <p className="text-sm text-muted-foreground">
                                    Amplio surtido de útiles escolares y de
                                    oficina.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Star className="mt-0.5 h-5 w-5 text-violet-600" />

                            <div>
                                <h3 className="font-medium">Experiencia</h3>

                                <p className="text-sm text-muted-foreground">
                                    Más de 10 años sirviendo a la comunidad.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <BadgeCheck className="mt-0.5 h-5 w-5 text-violet-600" />

                            <div>
                                <h3 className="font-medium">Compromiso</h3>

                                <p className="text-sm text-muted-foreground">
                                    Nos esforzamos por tu satisfacción.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
