import { Link, useLocation } from 'react-router-dom';
import styles from './MenuBase.module.scss';

interface MenuBaseProps {
    children: React.ReactNode;
    to: string;
}

export default function MenuBase({ children, to}: MenuBaseProps) {
    const local = useLocation();

    return(
        <Link className={styles.linkMenu} to={to}>
            {children}
        </Link>
    )
}