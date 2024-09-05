import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} A Greener Future. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;