import { usePopupClosed } from '../../hooks/usePopupClosed';
import styles from './select.module.scss'

export interface IItem {
    value: string,
    key: string | boolean,
}

interface IProps {
    options: IItem[],
    defaultValue: IItem,
    label: string,
    handleClick: (val: IItem) => void
}

const Select = ({ options, label, defaultValue, handleClick }: IProps) => {
    const visible = usePopupClosed(false)

    return (
        <div ref={visible.ref} className={styles.wrapper}>
            <div className={styles.label}>
                <h4>{label}:</h4>
            </div>
            <div onClick={() => visible.setIsComponentVisible(!visible.isComponentVisible)} className={styles.body}>
                <div>{defaultValue.value}</div>
            </div>
            {
                visible.isComponentVisible && (
                    <div className={styles.list}>
                        {
                            options.map((item) => (
                                <div onClick={(e) => handleClick(item)} key={item.value} className={styles.item}>{item.value}</div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
};

export default Select;
