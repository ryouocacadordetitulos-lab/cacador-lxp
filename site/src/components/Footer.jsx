export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src="./assets/logo.png" alt="Caçador de Títulos" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />

          <div className="flex flex-wrap justify-center gap-6 text-white/40 text-xs">
            <span className="hover:text-white/60 transition-colors cursor-default">Política de Privacidade</span>
            <span className="hover:text-white/60 transition-colors cursor-default">Termos de Uso</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/30 text-xs leading-relaxed">
          <p className="mb-2">
            © {new Date().getFullYear()} Caçador de Títulos — Marcos Jacober. Todos os direitos reservados.
          </p>
          <p>
            Este site não é afiliado ao Facebook, Instagram, YouTube ou qualquer plataforma de mídia social.
            Os resultados podem variar. Os depoimentos apresentados são experiências individuais e não garantem resultados iguais.
          </p>
        </div>
      </div>
    </footer>
  )
}
