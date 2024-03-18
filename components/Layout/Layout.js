import { getCurrentYear } from '../../util';

import styles from './Layout.module.scss';

export default function Layout ({ Page, props }) {
    return (
        <div className={styles.container}>
            <Page {...props} />

            <footer className={styles.footer}>
                <span className={styles.copyright}>
                    Copyright &copy; {getCurrentYear()} Ariel Pettyjohn 
                </span>
            </footer>
        </div>
    );
}