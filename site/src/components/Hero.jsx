import { useState, useEffect } from 'react'

const CTA_LINK = 'https://api.whatsapp.com/send/?phone=17623472427&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+O+DESAFIO.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({})
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const t = setInterval(calc, 1000)
    return () => clearInterval(t)
  }, [targetDate])
  return timeLeft
}

export default function Hero() {
  const target = new Date()
  target.setDate(target.getDate() + 3)
  const { d, h, m, s } = useCountdown(target)

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./assets/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="./assets/logo.png" alt="Caçador de Títulos" className="h-16 sm:h-20 w-auto drop-shadow-2xl" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/50 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-widest">
            Inscrições Abertas — Vagas Limitadas
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] text-shadow mb-4">
          <span className="text-white">1 DIA INTEIRO DE</span>
          <br />
          <span className="text-brand-gold text-shadow-gold">EXPEDIÇÃO TOTAL</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 mb-6 max-w-3xl mx-auto">
          Compre sua primeira propriedade no leilão, crie uma nova fonte de rendimento e{' '}
          <span className="text-brand-gold">reescreva sua história nos EUA.</span>
        </p>

        <p className="text-sm sm:text-base text-white/70 mb-10 max-w-2xl mx-auto">
          Junte-se ao melhor programa <strong className="text-white">PRÁTICO</strong> para iniciantes no mercado imobiliário americano.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-6 sm:gap-10 mb-10">
          {[
            { val: d, label: 'Dias' },
            { val: h, label: 'Horas' },
            { val: m, label: 'Min' },
            { val: s, label: 'Seg' },
          ].map(({ val, label }) => (
            <div key={label} className="countdown-block">
              <div className="bg-black/60 border border-brand-gold/30 rounded-xl px-4 py-3 min-w-[64px] backdrop-blur-sm">
                <span className="countdown-number">{String(val ?? 0).padStart(2, '0')}</span>
              </div>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-lg inline-block"
        >
          🔥 Quero fazer parte da Expedição!
        </a>

        <p className="text-white/50 text-xs mt-4">
          Depósito reembolsável de US$397 · Vagas limitadas
        </p>

        {/* Arrow */}
        <div className="mt-12 animate-bounce-slow">
          <svg className="mx-auto w-8 h-8 text-brand-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
