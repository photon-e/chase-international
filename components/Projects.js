import Image from 'next/image';

const projectImages = [
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Construction site with cranes'
  },
  {
    src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern building structure'
  },
  {
    src: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Construction workers in action'
  },
  {
    src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Industrial materials and equipment'
  },
  {
    src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Infrastructure development project'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092921461-eab10380f636?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engineering and project planning'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Selected works</p>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">Projects Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A snapshot of the quality, precision, and professionalism behind every engagement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((image) => (
            <figure
              key={image.src}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={450}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
