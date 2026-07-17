import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero/PageHero.jsx";
import { events } from "../data/events.js";
import styles from "./Events.module.css";

const galleryItems = events.flatMap((e) =>
  e.partners.map((p) => ({
    ...p,
    category: e.category,
    year: e.year,
    event: e.title,
  }))
);

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const years = [
    ...new Set(
      events
        .filter((e) => e.category === filter)
        .map((e) => e.year)
    ),
  ].sort((a, b) => b.localeCompare(a));

  const shown = galleryItems.filter((item) => {
    if (filter === "All") return true;
    if (item.category !== filter) return false;
    if (selectedYear !== "All" && item.year !== selectedYear) return false;
    return true;
  });

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e) => e.key === "Escape" && setLightbox(null);

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const changeCategory = (category) => {
    setFilter(category);
    setSelectedYear("All");
    setShowDropdown(false);
  };

  return (
    <>
      <Helmet>
        <title>Events — Global Unibridge</title>
      </Helmet>

      <PageHero heading="Event">
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Events</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">

          <div className={styles.filterContainer}>
            <div className={styles.filters}>

              <button
                className={`${styles.filter} ${filter === "All" ? styles.filterActive : ""}`}
                onClick={() => changeCategory("All")}
              >
                All
              </button>

              {["NAFSA", "ICEF", "EDUCATIONAL"].map((category) => (
                <div key={category} className={styles.dropdownWrapper}>
                  <button
                    className={`${styles.filter} ${filter === category ? styles.filterActive : ""}`}
                    onClick={() => {
                      if (filter !== category) {
                        changeCategory(category);
                      }
                      setShowDropdown(showDropdown === category ? false : category);
                    }}
                  >
                    <>
                      <span>{category}</span>
                      {/* <span className={styles.arrow}>▼</span> */}
                    </>
                  </button>

                  {showDropdown === category && (
                    <div className={styles.dropdown}>
                      {/* <button
                        onClick={() => {
                          setSelectedYear("All");
                          setShowDropdown(false);
                        }}
                      >
                        All
                      </button> */}

                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setShowDropdown(false);
                          }}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {shown.length === 0 ? (
            <p className={styles.empty}>No events found.</p>
          ) : (
            <div className={styles.grid}>
              {shown.map((item, i) => (
                <button
                  key={i}
                  className={styles.tile}
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                  />

                  <span className={styles.overlay}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <line x1="16.5" y1="16.5" x2="21" y2="21" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          )}

        </div>
      </section>

      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          <figure
            className={styles.lightboxFigure}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.logo}
              alt={lightbox.name}
              className={styles.lightboxImg}
            />

            <figcaption className={styles.lightboxCaption}>
              <strong>{lightbox.name}</strong>
              <span>{lightbox.event}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}