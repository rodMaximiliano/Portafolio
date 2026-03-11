
function Encabezado() {

    return (

        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
         px-6 md:px-12 py-6 bg-[#0C0D17] backdrop-blur-md border-b border-[#2C384F]/30">

            <div className="text-[#E0E0E5] font-bold text-2xl tracking-tighter 
                cursor-pointer fuente">
                Morrison
                <span className="text-[#00A8B5] animate-pulse">_</span>

            </div>


            <ul className="hidden md:flex items-center gap-8 text-sm font-medium fuenteLinks">
                <li className="text-[#A0A8B5] hover:text-[#E0E0E5] transition-colors relative group cursor-pointer">Home
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00A8B5] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="text-[#A0A8B5] hover:text-[#E0E0E5] transition-colors relative group cursor-pointer">Sobre mi
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00A8B5] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="text-[#A0A8B5] hover:text-[#E0E0E5] transition-colors relative group cursor-pointer">Proyectos
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00A8B5] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="text-[#A0A8B5] hover:text-[#E0E0E5] transition-colors relative group cursor-pointer">Contacto
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00A8B5] transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
        </header>


    )
}

export default Encabezado
