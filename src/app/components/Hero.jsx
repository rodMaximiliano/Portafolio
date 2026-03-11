
function Hero() {

    return (
        <section className="min-h-screen flex flex-col 
        items-center justify-center px-6 relative 
        overflow-hidden pt-20 degradeHero">

            <div className="text-center z-10 w-full max-w-4xl opaHero">

                <div className="flex justify-center mb-8"></div>
                <h1 className="mb-6 relative inline-block fuenteHero">Morrison</h1>

                <p className="text-lg md:text-2xl text-[#A0A8B5] mb-14 max-w-2xl mx-auto 
                font-light tracking-wide fuenteHeroDesc">Desarrollo web
                    <span class="text-[#2C384F] mx-2">|</span>Emprendimiento propio <br />Generando oportunidades</p>


                <div className="flex flex-wrap gap-6 justify-center">

                    <button className="group relative px-8 py-4 overflow-hidden rounded-sm transition-all duration-300 diseñoBotonHero cursor-pointer">
                        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(0,168,181,0.2)]"></div>
                        <span class="relative z-10 flex items-center gap-2 text-[#E0E0E5]">Explore Projects <span class="group-hover:translate-y-1 transition-transform duration-300">↓</span></span>
                    </button>
                    <button className="group relative px-8 py-4 overflow-hidden border border-[#2C384F] rounded-sm hover:border-[#00A8B5] hover:bg-[#00A8B5]/5 transition-all duration-300 diseñoBotonHero2 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2 text-[#E0E0E5] group-hover:text-[#00A8B5] transition-colors duration-300">Let's Talk<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-4 h-4 opacity-70 group-hover:opacity-100"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span></button>
                </div>
            </div>
        </section>
    )

}

export default Hero