import { memo } from "react";
import { IBean } from "./beanCard.interface";
import styles from './beanCard.module.scss'

interface IProps {
    cardData: IBean
}

type isExist = 'Yes' | 'No'

const BeanCard = memo(({ cardData }: IProps) => {
    
    const getWord = (item: boolean): isExist => {
        if (!item) {
            return 'No'
        } else {
            return 'Yes'
        }
    }

    

    return (
        <div style={{ backgroundColor: cardData.backgroundColor }} className={styles.body}>
            <img src={cardData.imageUrl} alt="" />
            <div className={styles.cardContent}>
                <p>{cardData.description}</p>
                <div className={styles.features}>
                    <div><span>Sugar: </span>{getWord(cardData.sugarFree)}</div>
                    <div><span>Gluten: </span>{getWord(cardData.glutenFree)}</div>
                    <div><span>Seasonal: </span>{getWord(cardData.seasonal)}</div>
                    <div><span>Kosher: </span>{getWord(cardData.kosher)}</div>
                    <div><span>Flavor: </span>{cardData.flavorName}</div>
                </div>
            </div>
        </div>
    )
});

export default BeanCard;
