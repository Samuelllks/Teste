import { SERVICES, QUOTE_INFO, PAYMENTS, COMPANY } from '../config'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral-100 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Serviços</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-lg border border-neutral-200 bg-white p-6 text-sm text-neutral-700 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-neutral-900">Orçamentos e visitas técnicas</h3>
            <p className="mt-2 leading-relaxed">{QUOTE_INFO}</p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">Formas de pagamento</h3>
            <p className="mt-2">{PAYMENTS.join(' • ')}</p>
            <p className="mt-4 text-xs text-neutral-500">{COMPANY.coverageNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
