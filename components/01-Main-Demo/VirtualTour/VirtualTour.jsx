"use client";
import { useState } from "react";
import styles from "./VirtualCampusTour.module.css";

export default function VirtualCampusTour() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.banner}>
          <div className={styles.overlay}></div>

          <h2 className={styles.title}>VIRTUAL CAMPUS TOUR</h2>

          <button
            className={styles.playBtn}
            aria-label="Play video"
            onClick={() => setOpen(true)}
          >
            <span className={styles.playIcon}></span>
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div className={styles.lightbox} onClick={() => setOpen(false)}>
          <div
            className={styles.videoWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/0fjhB0Ujnc4?si=PqkKHz9UOVuF4jeW?autoplay=1" 
              title="Virtual Campus Tour"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>

            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
