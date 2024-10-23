import styles from "./ActionBtn.module.css";

function ActionBtn({ children, myOnClick }) {
    return (
        <button onClick={myOnClick} className={styles.ActionBtn}>
            {children}
        </button>
    );
}

export default ActionBtn;
