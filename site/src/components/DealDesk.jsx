const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

export default function DealDesk() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a1200 100%)' }}
    >
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">Benefício Exclusivo</span>
          <h2 className="section-title text-white mb-6">
            Acesso ao <span className="text-brand-gold">Deal Desk</span><br />
            + <span className="text-brand-gold">US$150.000</span> para investir junto com você
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          {[
            { step: '01', title: 'Você Pesquisa', desc: 'Encontre o imóvel ideal usando o método do Caçador de Títulos' },
            { step: '02', title: 'Nós Analisamos', desc: 'Nossa equipe verifica a viabilidade do investimento' },
            { step: '03', title: 'Nós Lucramos', desc: 'Você aprende enquanto lucra, sem capital mínimo elevado' },
          ].map((item) => (
            <div
              key={item.step}
              className="reveal relative bg-white/5 border border-brand-gold/20 rounded-2xl p-6 hover:border-brand-gold/50 transition-all duration-300"
            >
              <div className="text-5xl font-black text-brand-gold/20 mb-3 leading-none">{item.step}</div>
              <h3 className="text-brand-gold font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 sm:p-8 mb-10 backdrop-blur-sm">
          <p className="text-brand-gold text-xl sm:text-2xl font-black uppercase mb-2">
            Você Pesquisa, Eu Compro, Nós Lucramos.
          </p>
          <p className="text-white/70 text-sm sm:text-base">
            Disponibilizamos <strong className="text-brand-gold">150 mil dólares</strong> para investir junto com os alunos que não têm capacidade suficiente de investimento. Basta enviar os dados do imóvel para que a equipe possa verificar a viabilidade.
          </p>
        </div>

        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold-lg inline-block reveal">
          Quero comprar minha propriedade no leilão!
        </a>
      </div>
    </section>
  )
}
