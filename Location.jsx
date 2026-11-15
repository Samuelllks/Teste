import { MapPin, Navigation } from 'lucide-react'
import { COMPANY, LOCATION } from '../config'

export default function Location() {
  return (
    <section id="localizacao" className="bg-neutral-100 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Localização</h2>
        <div className="mt-6 flex items-start gap-3 text-neutral-700">
          <MapPin size={22} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{COMPANY.address || 'Endereço completo a ser informado.'}</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg border border-neutral-300">
          <iframe
            title="Mapa da localização da BRAK no Google Maps"
            src={LOCATION.embedUrl}
            className="h-72 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={LOCATION.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          <Navigation size={18} strokeWidth={1.5} aria-hidden="true" />
          Como chegar
        </a>
      </div>
    </section>
  )
}
