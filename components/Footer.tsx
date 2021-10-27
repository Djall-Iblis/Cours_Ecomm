import Link from "next/link";
import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Next js app powered</p>
            <div className={styles.footer__left}>
                <a href="https://github.com/bsisic/styles-ecomm.git">by @Djall-Iblis</a>
            </div>
        </footer>
    )
}
