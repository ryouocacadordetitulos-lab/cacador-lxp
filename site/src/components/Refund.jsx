const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

const steps = [
  { num: '1', label: 'Faça seu depósito de US$397 e garanta sua vaga' },
  { num: '2', label: 'Participe da Expedição e compre sua primeira propriedade' },
  { num: '3', label: 'Envie seu vídeo de depoimento para a equipe' },
  { num: '4', label: 'Receba seu depósito de volta integralmente' },
]

export default function Refund() {
  return (
    <section className="bg-brand-dark-3 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">Como a Expedição pode sair de graça para você</span>
          <h2 className="section-title text-white mb-4">
            Participe, Compre, Depoimento →{' '}
            <span className="text-brand-gold">Dinheiro de Volta</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Steps */}
          <div className="space-y-4 reveal">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold text-black font-black text-lg flex items-center justify-center">
                  {step.num}
                </div>
                <p className="text-white/80 text-sm sm:text-base font-medium">{step.label}</p>
              </div>
            ))}
          </div>

          {/* Info block */}
          <div className="reveal">
            <div className="bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/30 rounded-2xl p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl font-black text-brand-gold mb-2">$397</div>
              <p className="text-white font-bold text-lg mb-3">Depósito Reembolsável</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Eu chamei isso de <strong className="text-white">depósito</strong> — não de taxa — porque ao final da jornada, quando sua oferta de compra for aceita pelo condado, você envia um vídeo de depoimento e recebe seu dinheiro de volta.
              </p>
              <a
                href="https://lp.cacadordetitulos.com/reembolso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold text-sm underline underline-offset-4 hover:text-brand-gold-light transition-colors"
              >
                *Entenda mais sobre o reembolso especial →
              </a>
            </div>

            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold w-full text-center mt-6 block">
              Quero fazer parte da Expedição!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
