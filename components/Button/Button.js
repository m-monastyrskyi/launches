const Button = ({ children, ...restProps }) => {
    return (
        <button className={'pure-button pure-button-primary'} {...restProps}>
            {children}
        </button>
    );
};

export default Button;