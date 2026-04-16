const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

const barriers = [
  {
    problem: 'Você não tem dinheiro suficiente',
    solution: 'Há propriedades à venda a partir de $50 nos leilões de tax lien e tax deed',
    icon: '💸',
  },
  {
    problem: 'Você troca tempo por dinheiro',
    solution: 'Aprenda formas de fazer o dinheiro trabalhar para você enquanto você dorme',
    icon: '⏰',
  },
  {
    problem: 'Você não tem conhecimento',
    solution: 'Aprenda os 7 passos do método do Caçador de Títulos do zero ao avançado',
    icon: '📚',
  },
]

export default function Barriers() {
  return (
    <section className="bg-brand-dark-2 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Sem desculpas</span>
          <h2 className="section-title text-white mb-4">
            A Expedição Elimina as{' '}
            <span className="text-brand-gold">3 Principais Barreiras</span>
            <br />de quem quer iniciar no mercado imobiliário
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        <div className="space-y-6 mb-12">
          {barriers.map((item, i) => (
            <div
              key={i}
              className="reveal grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Problem */}
              <div className="bg-white/5 p-6 flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <span className="text-white/40 text-xs uppercase tracking-widest block mb-1">Barreira</span>
                  <p className="text-white font-bold text-base sm:text-lg line-through decoration-red-500/70">
                    {item.problem}
                  </p>
                </div>
              </div>
              {/* Solution */}
              <div className="bg-brand-gold/10 border-l border-brand-gold/20 p-6 flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-black font-black text-sm">✓</div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold-lg inline-block">
            Quero comprar minha propriedade no leilão!
          </a>
        </div>
      </div>
    </section>
  )
}
