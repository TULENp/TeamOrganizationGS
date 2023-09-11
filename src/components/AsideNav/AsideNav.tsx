import asideStyles from './AsideNav.module.css';
import {
    IconCalendar,
    IconHome,
    IconHost,
    IconOffers,
    IconRequest,
} from '../../constants/images';
import { SupportCard } from '../SupportCard';

//*Display Aside navigation panel
export function AsideNav() {
    return (
        <aside>
            <div className={asideStyles.container}>
                <div className={asideStyles.navItem}>
                    <img src={IconHome} alt='Рабочий стол' />
                    <h2 className={asideStyles.title}>Рабочий стол</h2>
                </div>
                <div className={asideStyles.navItem}>
                    <img src={IconOffers} alt='Вакансии' />
                    <h2 className={asideStyles.title}>Вакансии</h2>
                </div>
                <div className={asideStyles.navItem}>
                    <img src={IconRequest} alt='Заявки' />
                    <h2 className={asideStyles.title}>Заявки</h2>
                </div>
                <div className={asideStyles.navItem}>
                    <img src={IconCalendar} alt='Календарь' />
                    <h2 className={asideStyles.title}>Календарь</h2>
                </div>
                <div className={asideStyles.navItem}>
                    <img src={IconHost} alt='Организация' />
                    <h2
                        className={
                            (asideStyles.title, asideStyles.selectedTitle)
                        }
                    >
                        Организация
                    </h2>
                </div>
            </div>
            <SupportCard />
        </aside>
    );
}
