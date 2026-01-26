import { Section } from '../components/Section'
import { ParallaxSection } from '../components/ParallaxSection'
import { site } from '../content/site'
import { useSeo } from '../useSeo'
import contact from '../../content/pages/contact.json'

// Solid Icons
function WhatsAppIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
    </svg>
  )
}

export function ContactPage() {
  useSeo(contact.seo)

  return (
    <div>
      {/* Contact Info */}
      <Section
        id={contact.contact.section.id}
        title={contact.contact.section.title}
        subtitle={contact.contact.section.subtitle}
        variant={contact.contact.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {contact.contact.intro}
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-[var(--radius-card)] p-6 text-center group hover:border-[var(--primary)] transition-colors"
          >
            <div className="flex justify-center mb-4"><WhatsAppIcon /></div>
            <h3 className="text-xl tracking-wider">{contact.contact.cards.find((card) => card.key === 'whatsapp')?.title}</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              {contact.contact.cards.find((card) => card.key === 'whatsapp')?.description}
            </p>
            <p className="text-[var(--foreground)] mt-4 group-hover:text-[var(--primary)] transition-colors">
              {site.whatsapp}
            </p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${site.email}`}
            className="glass-card rounded-[var(--radius-card)] p-6 text-center group hover:border-[var(--primary)] transition-colors"
          >
            <div className="flex justify-center mb-4"><EmailIcon /></div>
            <h3 className="text-xl tracking-wider">{contact.contact.cards.find((card) => card.key === 'email')?.title}</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              {contact.contact.cards.find((card) => card.key === 'email')?.description}
            </p>
            <p className="text-[var(--foreground)] mt-4 group-hover:text-[var(--primary)] transition-colors">
              {site.email}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${site.phone}`}
            className="glass-card rounded-[var(--radius-card)] p-6 text-center group hover:border-[var(--primary)] transition-colors"
          >
            <div className="flex justify-center mb-4"><PhoneIcon /></div>
            <h3 className="text-xl tracking-wider">{contact.contact.cards.find((card) => card.key === 'phone')?.title}</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              {contact.contact.cards.find((card) => card.key === 'phone')?.description}
            </p>
            <p className="text-[var(--foreground)] mt-4 group-hover:text-[var(--primary)] transition-colors">
              {site.phone}
            </p>
          </a>
        </div>
      </Section>

      <ParallaxSection
        id={contact.parallax[0].id}
        imageSrc={contact.parallax[0].imageSrc}
        height={contact.parallax[0].height}
      />

      {/* Address & Hours */}
      <Section
        id={contact.visit.section.id}
        title={contact.visit.section.title}
        subtitle={contact.visit.section.subtitle}
        variant={contact.visit.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {contact.visit.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">{contact.visit.addressTitle}</h3>
              <address className="not-italic mt-4 space-y-1 text-[var(--muted-foreground)]">
                <p className="text-[var(--foreground)] font-medium text-lg">The Royal Falcon</p>
                <p>{site.address}</p>
              </address>
              <div className="mt-6">
                <a
                  href={contact.visit.mapCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                >
                  {contact.visit.mapCta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl tracking-wider">{contact.visit.hoursTitle}</h3>
              <ul className="mt-4 space-y-3">
                {contact.visit.hours.map((hour, index) => (
                  <li
                    key={hour.label}
                    className={`flex justify-between ${
                      index === contact.visit.hours.length - 1
                        ? ''
                        : 'border-b border-[var(--border)] pb-2'
                    }`}
                  >
                    <span className="text-[var(--muted-foreground)]">{hour.label}</span>
                    <span className="text-[var(--foreground)]">{hour.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Reservation Form */}
      <Section
        id={contact.booking.section.id}
        title={contact.booking.section.title}
        subtitle={contact.booking.section.subtitle}
        variant={contact.booking.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {contact.booking.intro}
        </p>
        <div className="glass-card form-card-light rounded-[var(--radius-card)] p-8 md:p-10 max-w-3xl mx-auto">
          <form className="space-y-8">
            {/* Personal Info Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--border)]">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg tracking-wider text-[var(--foreground)]">{contact.booking.form.sections.personal}</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {contact.booking.form.labels.name} <span className="text-[var(--primary)]">*</span>
                  </label>
                  <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    required
                    className="w-full rounded-[var(--radius-sm)] pl-11 pr-4 py-3.5 text-sm border border-[var(--border)] bg-white text-[#1a1a1a] placeholder:text-[#4b4b4b] focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder={contact.booking.form.placeholders.name}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {contact.booking.form.labels.phone} <span className="text-[var(--primary)]">*</span>
                  </label>
                  <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-[var(--radius-sm)] pl-11 pr-4 py-3.5 text-sm border border-[var(--border)] bg-white text-[#1a1a1a] placeholder:text-[#4b4b4b] focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder={contact.booking.form.placeholders.phone}
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {contact.booking.form.labels.email}
                </label>
                <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <input
                  type="email"
                  className="w-full rounded-[var(--radius-sm)] pl-11 pr-4 py-3.5 text-sm border border-[var(--border)] bg-white text-[#1a1a1a] placeholder:text-[#4b4b4b] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder={contact.booking.form.placeholders.email}
                />
              </div>
            </div>

            {/* Reservation Details Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--border)]">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg tracking-wider text-[var(--foreground)]">{contact.booking.form.sections.reservation}</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="relative">
                  <label htmlFor="booking-date" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {contact.booking.form.labels.date} <span className="text-[var(--primary)]">*</span>
                  </label>
                  <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    title="Selecteer een datum"
                    className="w-full rounded-[var(--radius-sm)] pl-11 pr-4 py-3.5 text-sm border border-[var(--border)] bg-white text-[#1a1a1a] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="booking-time" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {contact.booking.form.labels.time} <span className="text-[var(--primary)]">*</span>
                  </label>
                  <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <input
                    id="booking-time"
                    type="time"
                    required
                    title="Selecteer een tijd"
                    className="w-full rounded-[var(--radius-sm)] pl-11 pr-4 py-3.5 text-sm border border-[var(--border)] bg-white text-[#1a1a1a] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="booking-persons" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {contact.booking.form.labels.persons} <span className="text-[var(--primary)]">*</span>
                  </label>
                  <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </span>
                  <span className="pointer-events-none absolute right-3 top-[46px] text-[#1a1a1a]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <select
                    id="booking-persons"
                    required
                    title="Selecteer aantal personen"
                    className="w-full rounded-[var(--radius-sm)] pl-11 pr-12 py-3.5 text-sm bg-white text-[#1a1a1a] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors appearance-none"
                  >
                    {contact.booking.form.options.persons.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="booking-occasion" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {contact.booking.form.labels.occasion}
                </label>
                <span className="pointer-events-none absolute left-3 top-[46px] text-[#1a1a1a]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v3H2V5zm0 5h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z" />
                  </svg>
                </span>
                <span className="pointer-events-none absolute right-3 top-[46px] text-[#1a1a1a]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
                <select
                  id="booking-occasion"
                  title="Selecteer gelegenheid"
                  className="w-full rounded-[var(--radius-sm)] pl-11 pr-12 py-3.5 text-sm bg-white text-[#1a1a1a] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors appearance-none"
                >
                  {contact.booking.form.options.occasion.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Extra Notes Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--border)]">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg tracking-wider text-[var(--foreground)]">{contact.booking.form.sections.notes}</h3>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-4 text-[#1a1a1a]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </span>
                <textarea
                  className="w-full rounded-[var(--radius-sm)] pl-11 pr-4 py-3.5 text-sm border border-[var(--border)] bg-white text-[#1a1a1a] placeholder:text-[#4b4b4b] focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  rows={4}
                  placeholder={contact.booking.form.placeholders.notes}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full cta-link justify-center bg-[var(--secondary)] text-[var(--secondary-foreground)] text-base font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {contact.booking.form.submit}
                <span aria-hidden>→</span>
              </button>
              <p className="text-xs text-[var(--muted-foreground)] text-center mt-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                {contact.booking.form.note}
              </p>
            </div>
          </form>
        </div>
      </Section>

      {/* Social Media */}
      <Section
        id={contact.social.section.id}
        title={contact.social.section.title}
        subtitle={contact.social.section.subtitle}
        variant={contact.social.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {contact.social.intro}
        </p>
        <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-[var(--radius-card)] p-6 text-center group hover:border-[var(--primary)] transition-colors"
          >
            <div className="flex justify-center mb-3">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <p className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {contact.social.cards.find((card) => card.key === 'facebook')?.label}
            </p>
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-[var(--radius-card)] p-6 text-center group hover:border-[var(--primary)] transition-colors"
          >
            <div className="flex justify-center mb-3">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <p className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {contact.social.cards.find((card) => card.key === 'instagram')?.label}
            </p>
          </a>
          <a
            href={site.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-[var(--radius-card)] p-6 text-center group hover:border-[var(--primary)] transition-colors"
          >
            <div className="flex justify-center mb-3">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <p className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {contact.social.cards.find((card) => card.key === 'tiktok')?.label}
            </p>
          </a>
        </div>
      </Section>
    </div>
  )
}
