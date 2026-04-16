export default function Experience() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('./assets/cta-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">1 Dia. Resultado permanente.</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-6 leading-tight">
            1 Dia Inteiro de{' '}
            <span className="text-brand-gold text-shadow-gold">Expedição Total:</span>
            <br />
            A Transformação Mais Intensa do Mercado Americano de Leilões
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 text-left">
          {[
            { icon: '🎯', title: 'Foco Absoluto', desc: 'Sem distrações, sem dispersão, sem procrastinação. Em 1 dia você absorve o que outros levam meses.' },
            { icon: '🤝', title: 'Suporte Total', desc: 'Marcos pega na sua mão e mostra cada passo na prática, do início ao fim.' },
            { icon: '⚡', title: 'Iniciante → Preparado', desc: 'Você entra iniciante pela manhã e sai à noite preparado para lucrar com leilões.' },
            { icon: '🔄', title: 'Sem Risco', desc: 'Não conseguiu ao vivo? As aulas ficam gravadas para você assistir no dia seguinte.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-brand-gold/30 transition-all duration-300">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-brand-gold font-bold mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <button className="btn-gold-lg inline-block cursor-default">
            Quero estar ao vivo com o Caçador!!
          </button>
          <p className="text-white/40 text-xs mt-4">Comunidade ideal para imigrantes latinos, investidores iniciantes e profissionais em transição de carreira</p>
        </div>
      </div>
    </section>
  )
}
