import styles from '../../styles/Button.module.css'

const Button = ({ children, ...restProps }) => {
    return (
        <button className={styles.toggle} {...restProps}>
            {children}
        </button>
    );
};

export default Button;