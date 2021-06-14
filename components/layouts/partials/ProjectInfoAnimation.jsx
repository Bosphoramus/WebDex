import styles from '~/styles/infoAnimation.module.css'

export default function ProjectInfoAnimation() {
    return (
            <div className={`${styles.container}`}>
                <h1 className={`${styles.brandText}`}><span>Web</span><span className={`${styles.redBrandText}`}>Dex</span></h1>
            </div>
    )
}
