import { Link } from "react-router";

interface Props {
    subtitle?: string;
}

export const CustomLogo = ({ subtitle }: Props) => {
    return (
        <Link to="/" className="flex items-center gap-3 whitespace-nowrap">
            <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-12 object-contain"
            />

            <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-violet-700">
                    PAPELERÍA
                </span>

                <span className="text-2xl -m-1 font-extrabold text-violet-700">
                    DULVID
                </span>

                {subtitle && (
                    <span className="text-xs text-muted-foreground mt-1">
                        {subtitle}
                    </span>
                )}
            </div>
        </Link>
    );
};
