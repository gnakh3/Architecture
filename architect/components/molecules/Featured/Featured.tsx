import Link from "next/link";
import styles from "./Featured.module.css";

type FeaturedItem = {
  number: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const featuredItems: FeaturedItem[] = [
  {
    number: "1",
    title: "Project Del Sol",
    href: "/projects",
    imageSrc: "/Images/DelSol.png",
    imageAlt: "Project Del Sol",
  },
  {
    number: "2",
    title: "228B Tower",
    href: "/projects",
    imageSrc: "/Images/Tower.png",
    imageAlt: "228B Tower",
  },
  {
    number: "3",
    title: "Le Prototype",
    href: "/projects",
    imageSrc: "/Images/Prototype.png",
    imageAlt: "Le Prototype",
  },
];

export default function Featured() {
  return (
    <section className={styles.featured} aria-labelledby="featured-title">
      <div className={styles.headerRow}>
        <h2 id="featured-title" className={styles.heading}>
          Featured
        </h2>

        <Link className={styles.seeAll} href="/projects">
          See All <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {featuredItems.map((item) => (
          <article key={item.number} className={styles.card}>
            <img className={styles.cardImage} src={item.imageSrc} alt={item.imageAlt} />

            <div className={styles.overlay} />

            <div className={styles.bigNumber} aria-hidden="true">
              {item.number}
            </div>

            <div className={styles.cardText}>
              <h3 className={styles.title}>{item.title}</h3>
              <Link className={styles.subLink} href={item.href}>
                View All Projects
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
