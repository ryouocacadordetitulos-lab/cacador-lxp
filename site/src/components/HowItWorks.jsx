const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

const phases = [
  {
    phase: 'Fase 01',
    title: 'PREPARAÇÃO',
    color: 'from-brand-gold/20 to-transparent',
    border: 'border-brand-gold/30',
    accent: 'text-brand-gold',
    items: [
      'Área de membros liberada imediatamente após o depósito',
      'Datas e horários disponíveis com antecedência',
      'Introdução ao mundo dos Tax Liens e Tax Deeds',
      'Mentalidade correta para o mercado imobiliário americano',
      'Conteúdo gravado — assista quando e onde quiser',
      'Acesso ilimitado pelo período de 90 dias',
    ],
  },
  {
    phase: 'Fase 02',
    title: 'PRÁTICA AO VIVO',
    color: 'from-brand-gold/30 to-brand-gold/10',
    border: 'border-brand-gold/50',
    accent: 'text-brand-gold',
    items: [
      'Aula AO VIVO com Marcos Jacober via Zoom',
      'Equipe de mentores acompanhando cada passo',
      'Validação do seu processo de compra em grupo',
      'Eliminação de 98% dos riscos do processo',
      'Resolução de todas as suas dúvidas em tempo real',
      'Gravação disponível para quem não puder ao vivo',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-brand-dark-3 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Como funciona</span>
          <h2 className="section-title text-white mb-4">
            A Expedição é Dividida em{' '}
            <span className="text-brand-gold">Duas Fases</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Um sistema progressivo: primeiro você aprende na teoria, depois executa na prática ao lado de quem já fez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`reveal relative bg-gradient-to-br ${phase.color} border ${phase.border} rounded-2xl p-6 sm:p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs font-black uppercase tracking-widest ${phase.accent} bg-black/30 px-3 py-1 rounded-full`}>
                  {phase.phase}
                </span>
                <h3 className={`font-black text-xl ${phase.accent}`}>{phase.title}</h3>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`${phase.accent} font-black flex-shrink-0 mt-0.5`}>✓</span>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Phone mockups */}
        <div className="reveal flex justify-center gap-4 sm:gap-6 mb-12 flex-wrap">
          {['/assets/phone1.png', '/assets/phone2.png', '/assets/phone3.png', '/assets/phone4.png'].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="App screenshot"
              className="h-36 sm:h-48 w-auto rounded-xl shadow-2xl border border-white/10 hover:border-brand-gold/30 transition-colors duration-300"
            />
          ))}
        </div>

        <div className="text-center reveal">
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold-lg inline-block">
            Quero estar ao vivo com o Caçador!!
          </a>
        </div>
      </div>
    </section>
  )
}
