import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { SubscribeNewsletter } from 'features/subscribe-newsletter';
import styles from './main-layout.module.css';

export const MainLayout = () => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}><Outlet /></main>
    <SubscribeNewsletter />
    <Footer />
  </div>
);
