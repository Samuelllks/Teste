import { COMPANY } from '../config'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label={COMPANY.name}>
          <img src={COMPANY.logo} alt={COMPANY.name} className="h-9 w-auto" />
          <span className="text-lg font-semibold tracking-widest">{COMPANY.name}</span>
        </a>
        <nav aria-label="Principal">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-neutral-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="py-1 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
