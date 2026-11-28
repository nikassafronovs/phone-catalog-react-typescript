import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.styles.module.scss';
import HomeIcon from '../../assets/icons/Home.svg?react';
import HomeIconDark from '../../assets/icons/Home-dark.svg?react';
import ArrowRight from '../../assets/icons/VectorRight.svg?react';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

type BreadcrumbItem = {
  title: string;
  path?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export const BreadCrumbs: React.FC<Props> = ({ items }) => {
  const { theme } = useTheme();

  return (
    <nav className={styles.breadcrumbs} aria-label="BreadCrumbs">
      <Link to="/" aria-label="Go to homepage" className={styles.homeLink}>
        {theme === 'dark' ? <HomeIconDark /> : <HomeIcon />}
      </Link>

      {items.map(item => (
        <React.Fragment key={item.title}>
          <ArrowRight className={styles.arrow} />

          {item.path ? (
            <Link to={item.path} className={styles.link}>
              {item.title}
            </Link>
          ) : (
            <span className={styles.current}>{item.title}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
