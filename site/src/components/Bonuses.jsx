const bonuses = [
  {
    tag: 'COMBO CAÇADOR 🤠',
    title: 'Kit Completo do Método',
    items: [
      'Ebook "Os 7 Passos do Método Deed Hunter"',
      'Mapa do Caçador de Títulos',
      'Como o Tax Lien funciona',
      'Ebook "150 Formas de Fazer Dinheiro"',
    ],
    icon: '/assets/bonus1.png',
  },
  {
    tag: 'BÔNUS EXTRA 🎁',
    title: 'Curso Gravado 7 Passos do Caçador de Títulos',
    items: [
      'Curso gravado mais recente com o método completo',
      'Acesso por 90 dias completos',
      'Veja e reveja quantas vezes quiser',
      'Prepare-se para a jornada de mudança financeira',
    ],
    icon: '/assets/mockup.png',
  },
]

export default function Bonuses() {
  return (
    <section className="bg-brand-dark-2 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Incluído na sua inscrição</span>
          <h2 className="section-title text-white mb-4">
            🔥 Bônus que{' '}
            <span className="text-brand-gold">Multiplicam seu Investimento</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Receba benefícios exclusivos reservados para aqueles que decidem dar o próximo passo rumo à liberdade e à expansão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="reveal card-dark hover:border-brand-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={bonus.icon}
                  alt={bonus.title}
                  className="w-16 h-16 object-contain rounded-xl bg-brand-gold/10 p-2 flex-shrink-0"
                />
                <div>
                  <span className="text-brand-gold text-xs font-black uppercase tracking-widest mb-1 block">{bonus.tag}</span>
                  <h3 className="text-white font-bold text-lg group-hover:text-brand-gold transition-colors duration-300">{bonus.title}</h3>
                </div>
              </div>
              <ul className="space-y-2">
                {bonus.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-brand-gold font-black flex-shrink-0">✓</span>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
