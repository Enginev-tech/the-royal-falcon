import type { ReactNode } from 'react'

type ParallaxHeight = 'sm' | 'md' | 'lg'

type ParallaxSectionProps = {
  id?: string
  title?: string
  subtitle?: string
  children?: ReactNode
  imageSrc?: string
  videoSrc?: string
  height?: ParallaxHeight | (string & {})
}

const heightClass: Record<ParallaxHeight, string> = {
  sm: 'min-h-[30vh]',
  md: 'min-h-[45vh]',
  lg: 'min-h-[60vh]',
}

const parallaxImageClass: Record<string, string> = {
  '/parallax/para-1.png': 'parallax-img-1',
  '/parallax/para-2.png': 'parallax-img-2',
  '/parallax/para-3.png': 'parallax-img-3',
  '/parallax/para-4.png': 'parallax-img-4',
  '/parallax/para-5.png': 'parallax-img-5',
  '/parallax/para-6.png': 'parallax-img-6',
  '/parallax/para-7.png': 'parallax-img-7',
  '/parallax/para-8.png': 'parallax-img-8',
  '/parallax/para-9.png': 'parallax-img-9',
  '/parallax/muppie-parallax.png': 'parallax-img-muppie',
}

export function ParallaxSection(props: ParallaxSectionProps) {
  const h = heightClass[props.height as ParallaxHeight] ?? heightClass.md

  // For images: use CSS background with fixed attachment for true parallax
  if (props.imageSrc && !props.videoSrc) {
    const imageClass = parallaxImageClass[props.imageSrc] ?? ''
    return (
      <section
        id={props.id}
        className={`relative ${h} parallax-section parallax-fade ${imageClass}`}
      >
        <div className="absolute inset-0 image-overlay" aria-hidden />

        {(props.title || props.subtitle || props.children) && (
          <div className="relative container-main py-14 md:py-20 flex items-center h-full z-20">
            <div className="max-w-4xl">
              {props.title ? <h2 className="text-2xl md:text-4xl tracking-widest">{props.title}</h2> : null}
              {props.subtitle ? (
                <p className="mt-3 text-sm md:text-base text-[var(--muted-foreground)] max-w-3xl">
                  {props.subtitle}
                </p>
              ) : null}
              {(props.title || props.subtitle) && <div className="mt-6 gradient-line" />}
              {props.children ? <div className="mt-10">{props.children}</div> : null}
            </div>
          </div>
        )}
      </section>
    )
  }

  // For videos: keep existing approach
  return (
    <section id={props.id} className={`relative overflow-hidden ${h} parallax-fade`}>
      <div className="absolute inset-0" aria-hidden>
        {props.videoSrc ? (
          <video
            className="w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src={props.videoSrc}
          />
        ) : null}
        <div className="absolute inset-0 image-overlay" />
      </div>

      <div className="relative container-main py-14 md:py-20 z-20">
        {(props.title || props.subtitle) && (
          <div className="max-w-4xl">
            {props.title ? <h2 className="text-2xl md:text-4xl tracking-widest">{props.title}</h2> : null}
            {props.subtitle ? (
              <p className="mt-3 text-sm md:text-base text-[var(--muted-foreground)] max-w-3xl">
                {props.subtitle}
              </p>
            ) : null}
            <div className="mt-6 gradient-line" />
          </div>
        )}

        {props.children ? <div className="mt-10">{props.children}</div> : null}
      </div>
    </section>
  )
}
