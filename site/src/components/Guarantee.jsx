export default function Guarantee() {
  return (
    <section className="bg-brand-dark-3 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="reveal bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          <div className="flex justify-center mb-6">
            <img src="./assets/garantia.png" alt="Garantia" className="h-16 w-auto" />
          </div>
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">Risco zero</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-6">
            Sua Satisfação ou Seu <span className="text-brand-gold">Dinheiro de Volta</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Caçador, se por algum motivo você não se identificar com o conteúdo ou sentir que isso não trouxe nenhum benefício real, você pode acionar a garantia incondicional em até <strong className="text-white">30 dias</strong>.
          </p>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Ou seja, você pode consumir o conteúdo, colocar em prática e se não gostar, é só pedir seu dinheiro de volta — <strong className="text-brand-gold">sem letras miúdas.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
