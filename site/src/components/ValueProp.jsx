const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

const highlights = [
  { icon: '🏠', title: 'Propriedades a partir de $50', desc: 'Acesso a imóveis em leilões de tax lien e tax deed com entrada acessível.' },
  { icon: '💰', title: 'Dinheiro trabalhando por você', desc: 'Aprenda formas de fazer o capital se multiplicar sem trocar tempo por dinheiro.' },
  { icon: '🗺️', title: '7 Passos do Método Caçador', desc: 'Um sistema comprovado para iniciantes comprarem sua primeira propriedade nos EUA.' },
]

export default function ValueProp() {
  return (
    <section className="bg-brand-dark-2 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Por que a Expedição?</span>
          <h2 className="section-title text-white mb-4">
            A <span className="text-brand-gold">Transformação</span> Mais Intensa<br />do Mercado Americano de Leilões
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
            Intensidade distorce o tempo. Em <strong className="text-white">1 dia de foco absoluto</strong>, você vai absorver o conhecimento que outros levam meses para dominar. Sem distrações. Sem dispersão. Sem procrastinação.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, i) => (
            <div key={i} className="card-dark text-center reveal hover:border-brand-gold/30 transition-colors duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-brand-gold font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Marcos visual block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/assets/marcos1.png" alt="Marcos Jacober" className="w-36 sm:w-44 rounded-2xl border-2 border-brand-gold/30 shadow-2xl" />
              <img src="/assets/marcos2.png" alt="Marcos Jacober" className="w-36 sm:w-44 rounded-2xl border-2 border-brand-gold/30 shadow-2xl mt-6" />
            </div>
          </div>
          <div className="reveal text-center md:text-left">
            <span className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-2 block">Marcos Jacober</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase">
              Marcos vai pegar na sua mão e mostrar cada passo na <span className="text-brand-gold">prática</span>
            </h3>
            <p className="text-white/60 text-sm sm:text-base mb-6 leading-relaxed">
              Tudo que você DEVE FAZER e principalmente tudo que você NÃO DEVE FAZER para não perder dinheiro. Você entra iniciante pela manhã e sai à noite preparado para lucrar com propriedades de leilão.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold inline-block">
              Quero estar ao vivo com o Caçador!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
