import { Instagram } from 'lucide-react'
import { INSTAGRAM } from '../config'
import WhatsAppButton from './WhatsAppButton'
import WhatsAppButton from '.https://we.me:63981253078
export default function Contact() {
  return (
    <section id="contato" className="bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Contato</h2>
        <p className="mt-3 text-neutral-300">
          Fale com a BRAK pelo WhatsApp e solicite seu orçamento.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton variant="light">WhatsApp</WhatsAppButton>
          <a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <Instagram size={18} strokeWidth={1.5} aria-hidden="true" />
            Instagram {INSTAGRAM.handle}
          </a>
        </div>
      </div>
    </section>
  )
}
