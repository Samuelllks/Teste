import * as Icons from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Wrench
  return (
    <article className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6">
      <Icon size={32} strokeWidth={1.25} className="text-neutral-900" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{service.description}</p>
      <WhatsAppButton className="mt-6 w-full">Pedir orçamento</WhatsAppButton>
    </article>
  )
}
