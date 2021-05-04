import styles from '~/styles/presentationAnimation.module.css'

export default function ProjectPresentationAnimation() {
    return (
        <div>
            <div className={`${styles.container}`}>
                <h1 className={`${styles.brandText}`}><span>Web</span><span className={`${styles.redBrandText}`}>Dex</span></h1>
            </div>
        </div>
    )
}
