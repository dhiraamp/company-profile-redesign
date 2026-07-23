export default function SectionTitle({ subtitle, title, center }) {
  return (
    <div className={`mb-4 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <h5 className="font-bold text-primary uppercase tracking-[0.2em] text-sm mb-2.5">
          {subtitle}
        </h5>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-dark leading-[1.2]">
          {title}
        </h2>
      )}
    </div>
  )
}
