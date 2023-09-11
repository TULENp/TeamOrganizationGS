import cardStyles from './SupportCard.module.css';
import { ImgAvatar } from '../../constants/images';

//*Display card with tech support
export function SupportCard() {
    return (
        <article className={cardStyles.container}>
            <img className={cardStyles.avatar} src={ImgAvatar} alt='аватар' />
            <h3 className={cardStyles.info}>Евгений</h3>
            <h4 className={cardStyles.info}>
                Ваш персональный помощник по работе с системой
            </h4>
            <a href='http://t.me/TULENp' target='_blank' className={cardStyles.button}>
                <h3 className={cardStyles.buttonText}>Написать</h3>
            </a>
            <h4 className={cardStyles.info}>E-mail support@goodsurfing.org</h4>
        </article>
    );
}
