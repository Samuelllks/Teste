import { COMPANY, INSTAGRAM, WHATSAPP_NUMBER, whatsappLink } from '../config'

function formatPhone(n) {
  const d = String(n).replace(/\D/g, '')
  if (d.length === 13) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`
  if (d.length === 12) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 8)}-${d.slice(8)}`
  return `+${d}`
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-4 py-12 text-sm text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={COMPANY.logo} alt={COMPANY.name} className="h-12 w-auto" />
          <p className="mt-3 text-lg font-semibold tracking-widest text-white">{COMPANY.name}</p>
          <p className="mt-1">CNPJ: {COMPANY.cnpj}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contato</h3>
          <p className="mt-2">
            WhatsApp:{' '}
            {whatsappLink ? (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="underline">
                {formatPhone(WHATSAPP_NUMBER)}
              </a>
            ) : (
              '[a definir]'
            )}
          </p>
          <p className="mt-1">
            Instagram:{' '}
            <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className="underline">
              {INSTAGRAM.handle}
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Endereço</h3>
          <p className="mt-2">{COMPANY.address || '[a definir]'}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Horário de funcionamento</h3>
          <p className="mt-2">{COMPANY.hours}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-neutral-800 pt-6 text-xs text-neutral-500">
        © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
