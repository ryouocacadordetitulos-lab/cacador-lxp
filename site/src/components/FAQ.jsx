import { useState } from 'react'

const faqs = [
  {
    q: 'Quanto tempo tenho de acesso à Expedição do Caçador?',
    a: 'Você terá acesso completo a toda a Expedição pelo período de 90 dias, onde poderá assistir todo o material gravado e participar do evento ao vivo no Zoom. Após finalizar, pode conversar com a equipe e refazer a turma seguinte sem custo para rever o aprendizado.',
  },
  {
    q: 'Preciso morar nos Estados Unidos para participar?',
    a: 'Não! A comunidade é ideal para imigrantes latinos, investidores iniciantes e profissionais em transição de carreira que desejam crescer no mercado imobiliário americano e alcançar a independência financeira — independente de onde estejam.',
  },
  {
    q: 'Já sou aluno de uma turma anterior. Posso participar da nova?',
    a: 'Sim! Se você já é aluno da Expedição (antigo Desafio) e gostaria de rever todo o conhecimento, pode participar da turma seguinte à sua. Envie uma mensagem para a equipe e eles te ajudarão a ingressar na próxima Expedição.',
  },
  {
    q: 'Não vou conseguir estar ao vivo nos horários. Posso participar?',
    a: 'Sim! A Fase 1 é totalmente gravada para você ver quando quiser. A Fase 2 ao vivo também fica gravada para você assistir no dia seguinte. E se quiser, pode refazer na turma seguinte sem custo adicional.',
  },
  {
    q: 'Como receberei meu acesso?',
    a: 'Ao garantir sua vaga, você receberá por e-mail o acesso ao portal de membros, onde poderá assistir todo o conteúdo já disponível, inclusive os bônus. Você também terá acesso a um grupo do WhatsApp com o link para as transmissões ao vivo.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-brand-gold/30' : 'border-white/10'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors duration-200"
      >
        <span className="text-white font-semibold text-sm sm:text-base">{q}</span>
        <span className={`text-brand-gold font-black text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>+</span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-white/5">
          <p className="text-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-brand-dark-2 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Perguntas frequentes</span>
          <h2 className="section-title text-white mb-4">
            FAQ — Tire Suas <span className="text-brand-gold">Dúvidas</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal">
              <Item q={faq.q} a={faq.a} />
            </div>
          ))}
        </div>

        <div className="reveal text-center bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-3">Você ainda tem dúvidas?</h3>
          <p className="text-white/60 text-sm mb-6">
            Está em dúvida se a Expedição é para você? Nossa equipe está pronta para te ajudar a tomar a melhor decisão.
          </p>
          <button className="btn-gold inline-block cursor-default">
            💬 Falar com a equipe agora!
          </button>
        </div>
      </div>
    </section>
  )
}
