import { Logo } from '../../components/Logo';
import styles from './Footer.styles.module.scss';
import IconArrowUp from '../../assets/icons/arrowUp.svg?react';
import IconArrowUpDark from '../../assets/icons/arrowUp-dark.svg?react';
import { useTheme } from '../../context/ThemeContext';

const footerLinks = [
  {
    href: 'https://github.com/nikassafronovs',
    label: 'GITHUB',
  },
  {
    href: 'www.linkedin.com/in/mykyta-brengach',
    label: 'CONTACTS',
  },
  {
    href: 'https://github.com/nikassafronovs/phone-catalog-react-typescript',
    label: 'RIGHTS',
  },
];

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <>
      <footer className={styles.footer}>
        <Logo />

        <nav className={styles.nav}>
          {footerLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.backToTop}>
          <span className={styles.backText}>Back to top</span>

          <button
            type="button"
            className={styles.backToUp}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            {theme === 'dark' ? <IconArrowUpDark /> : <IconArrowUp />}
          </button>
        </div>
      </footer>
    </>
  );
};
