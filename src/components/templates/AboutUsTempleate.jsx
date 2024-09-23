import React from "react";
import styles from "./AboutUs.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const AboutUsTempleate = () => {
  const teamMembers = [
    { name: "John Smith", role: "CEO", image: "/images/john-smith2.jpg" },
    { name: "Jane Doe", role: "CTO", image: "/images/jane-doe.jpg" },
    { name: "Alice Johnson", role: "COO", image: "/images/alice-johnson.jpg" },
  ];

  return (
    <div className={styles.aboutUs}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>درباره ما</h1>
      </div>

      <section className={styles.section}>
        <h2>داستان ما</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی شامل حروفچینی
          دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
          مورد استفاده قرار گیرد.
        </p>
      </section>

      <div className={styles.image}>
        <img src="/images/a man.jpg" />
      </div>

      <section className={styles.section}>
        <h2>شعار ما</h2>
        <blockquote className={styles.mission}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط
        </blockquote>
      </section>

      <section className={styles.section}>
        <h2>تیم ما</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.teamMember}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div>
                <a href="#">
                  <span>
                    <FaInstagram />
                  </span>
                </a>
                <a href="#">
                  <span>
                    <FaGithub />
                  </span>
                </a>
                <a href="#">
                  <span>
                    <MdEmail />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsTempleate;
