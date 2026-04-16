const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

const testimonials = [
  {
    img: '/assets/testimonial1.webp',
    name: 'Aluno da Expedição',
    text: 'Consegui comprar minha primeira propriedade nos EUA ainda durante o programa. O método é incrível e o suporte da equipe fez toda a diferença!',
    stars: 5,
  },
  {
    img: '/assets/testimonial2.webp',
    name: 'Aluno da Expedição',
    text: 'Nunca imaginei que conseguiria investir no mercado americano. A Expedição me mostrou que é totalmente possível, mesmo do Brasil.',
    stars: 5,
  },
  {
    img: '/assets/testimonial3.webp',
    name: 'Aluna da Expedição',
    text: 'Em apenas 1 dia aprendi mais do que em meses de pesquisa sozinha. Valeu muito cada centavo do depósito — e ainda vou receber de volta!',
    stars: 5,
  },
  {
    img: '/assets/testimonial4.webp',
    name: 'Aluno da Expedição',
    text: 'O Deal Desk foi o diferencial. Poder contar com o capital da equipe para meu primeiro investimento me deu a confiança que eu precisava.',
    stars: 5,
  },
]

function Stars({ n }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-brand-gold text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-brand-dark py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Resultados Reais</span>
          <h2 className="section-title text-white mb-4">
            Conheça os Depoimentos de Alunos que Já{' '}
            <span className="text-brand-gold">Participaram da Expedição</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal card-dark flex flex-col items-start hover:border-brand-gold/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/30"
                />
                <span className="text-white/70 text-xs font-medium">{t.name}</span>
              </div>
              <Stars n={t.stars} />
              <p className="text-white/70 text-sm leading-relaxed italic flex-1">"{t.text}"</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-12">
          {[
            { val: '500+', label: 'Alunos formados' },
            { val: '$50', label: 'Menor propriedade' },
            { val: '98%', label: 'Riscos eliminados' },
            { val: '30', label: 'Dias de garantia' },
          ].map((stat) => (
            <div key={stat.label} className="bg-brand-dark-2 p-6 text-center">
              <div className="text-3xl font-black text-brand-gold mb-1">{stat.val}</div>
              <div className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold-lg inline-block">
            Quero fazer parte da Expedição!
          </a>
        </div>
      </div>
    </section>
  )
}
