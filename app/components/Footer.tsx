export default function Footer() {
    return (
        <div className="w-full py-6 text-center">
            <small className="text-sm font-semibold text-white/90">
                © {new Date().getFullYear()} Probiyom
            </small>
        </div>
    );
}
