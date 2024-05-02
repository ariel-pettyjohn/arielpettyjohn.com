import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

export default function Layout ({ Page, props }) {
    return (
        <div className={styles.container}>
            <Page {...props} />

            <Footer />
        </div>
    );
}