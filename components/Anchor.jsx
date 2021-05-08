import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '~/styles/anchor.module.css'

const Anchor = ({ href, children }) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} ${styles.selected}`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default Anchor
