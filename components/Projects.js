import Image from 'next/image';

const projectImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092921461-eab10380f636?auto=format&fit=crop&w=1200&q=80'
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="center reveal">
          <h2 className="section-title">Projects Gallery</h2>
          <p className="section-sub">A glimpse of the quality and professionalism we bring to every engagement.</p>
        </div>
        <div className="projects-grid">
          {projectImages.map((src) => (
            <figure key={src} className="project-item reveal">
              <Image src={src} alt="Construction project" width={600} height={420} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
