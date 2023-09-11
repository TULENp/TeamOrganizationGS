import {
    IconArrow,
    IconFavicon,
    IconFavorite,
    IconLanguage,
    IconLogo,
    IconMessage,
    ImgAvatar,
} from '../../constants/images';
import styles from './Header.module.css';

//* Display header with logo and nav to favorites, messages and profile
export function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={IconFavicon} alt='logo' />
                <img src={IconLogo} alt='Goodsurfing' />
                <img src={IconLanguage} alt='lang' />
            </div>

            <div className={styles.logo}>
                <img src={IconFavorite} alt='favorite' />
                <img src={IconMessage} alt='message' />
                <div className={styles.profile}>
                    <h4>Евгений</h4>
                    <img
                        className={styles.avatar}
                        src={ImgAvatar}
                        alt='avatar'
                    />
                    <img src={IconArrow} alt='arrow' />
                </div>
            </div>
        </header>
    );
}
