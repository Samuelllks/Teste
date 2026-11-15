import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config'

// Abre a conversa no WhatsApp sem mensagem automática.
// Enquanto o número não estiver configurado em src/config.js, o botão fica inativo.
export default function WhatsAppButton({ children = 'Pedir orçamento', variant = 'dark', className = '' }) {
  const styles =
    variant === 'dark'
      ? 'bg-neutral-900 text-white hover:bg-neutral-700'
      : variant === 'light'
        ? 'bg-white text-neutral-900 hover:bg-neutral-200'
        : 'border border-neutral-900 text-neutral-900 hover:bg-neutral-100'
  const enabled = Boolean(whatsappLink)

  return (
    <a
      href={enabled ? whatsappLink : undefined}
      target="_blank"
      rel="noopener noreferrer"
      aria-disabled={!enabled}
      title={enabled ? undefined : 'Número de WhatsApp ainda não configurado'}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors ${styles} ${
        enabled ? '' : 'cursor-not-allowed opacity-60'
      } ${className}`}
    >
      <MessageCircle size={18} strokeWidth={1.5} aria-hidden="true" />
      {children}
    </a>
  )
}
