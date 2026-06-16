import { Clock, MapPin, Phone } from "lucide-react";

export const CustomFooter = () => {
    return (
        <footer className="mt-10 w-full">
            <div className="rounded-3xl bg-violet-50 px-6 py-6 border border-violet-100 mx-10 mb-4">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                            <MapPin className="h-5 w-5 text-violet-600" />
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-800">
                                Dirección
                            </h4>

                            <p className="text-sm text-muted-foreground">
                                Av. Principal #123, Ciudad
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                            <Phone className="h-5 w-5 text-violet-600" />
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-800">
                                Teléfono
                            </h4>

                            <p className="text-sm text-muted-foreground">
                                800 123 5678
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                            <Clock className="h-5 w-5 text-violet-600" />
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-800">
                                Horario
                            </h4>

                            <p className="text-sm text-muted-foreground">
                                Lun - Vie: 8:00 am - 6:00 pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-b-xl bg-violet-700 px-4 py-3 text-center text-xs text-violet-100">
                © {new Date().getFullYear()} Papelería Dulvid. Todos los
                derechos reservados.
            </div>
        </footer>
    );
};
