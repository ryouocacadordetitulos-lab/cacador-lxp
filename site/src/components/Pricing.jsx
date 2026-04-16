const included = [
  '1 dia completo de imersão ao vivo com Marcos Jacober',
  'Acesso ao Deal Desk + US$150.000 para investir junto',
  'Área de membros com todo conteúdo gravado por 90 dias',
  'Grupo exclusivo no WhatsApp com links das transmissões',
  'Equipe de mentores durante toda a jornada',
  'Possibilidade de refazer a turma seguinte sem custo',
  'COMBO CAÇADOR: 4 materiais digitais exclusivos',
  'Curso gravado "7 Passos do Caçador de Títulos"',
  'Depósito REEMBOLSÁVEL ao comprar sua propriedade',
]

export default function Pricing() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1117 0%, #150e00 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="reveal">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">Tudo isso por apenas</span>
          <h2 className="section-title text-white mb-8">
            Um Depósito <span className="text-brand-gold">Reembolsável</span> de
          </h2>
        </div>

        <div className="reveal bg-white/5 border-2 border-brand-gold/50 rounded-3xl p-8 sm:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

          <div className="mb-2">
            <span className="text-white/40 text-xl line-through">US$997</span>
          </div>
          <div className="flex items-start justify-center gap-2 mb-2">
            <span className="text-brand-gold text-3xl font-black mt-4">US$</span>
            <span className="text-7xl sm:text-8xl font-black text-brand-gold leading-none text-shadow-gold">397</span>
          </div>
          <p className="text-white/50 text-sm mb-8">Pagamento único · Depósito reembolsável</p>

          <ul className="text-left space-y-3 mb-10 max-w-md mx-auto">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand-gold font-black flex-shrink-0 mt-0.5">✓</span>
                <span className="text-white/70 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <button className="btn-gold-lg inline-block w-full sm:w-auto cursor-default">
            🔥 Quero fazer parte da Expedição!
          </button>
          <p className="text-white/30 text-xs mt-4">
            Compra 100% segura · Garantia de 30 dias
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-6 text-white/40 text-xs uppercase tracking-widest">
          <span className="flex items-center gap-2">🔒 Pagamento seguro</span>
          <span className="flex items-center gap-2">✅ Garantia 30 dias</span>
          <span className="flex items-center gap-2">🇺🇸 Mercado americano</span>
          <span className="flex items-center gap-2">💰 Depósito reembolsável</span>
        </div>
      </div>
    </section>
  )
}
