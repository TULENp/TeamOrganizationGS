import cardStyles from './UserCard.module.css';
import { TUser } from '../../types';
import { IconCross, ImgUserPic } from '../../constants/images';

interface UserCardProps {
    user: TUser;
    onClick?: () => void;
    inTeam?: boolean;
}

//* Display user card with avatar, email, name, city and "remove" icon button
export function UserCard({ user, onClick, inTeam }: UserCardProps) {
    return (
        <article className={cardStyles.cardWrapper}>
            <div className={cardStyles.cardContent}>
                {/* avatar */}
                <img
                    className={cardStyles.avatar}
                    // hardcode
                    src={ImgUserPic}
                    alt='avatar'
                />
                {/* info */}
                <div className={cardStyles.text}>
                    <h5>{user.email}</h5>
                    <h4>{user.name}</h4>
                    <h5>{user.address.city}</h5>
                </div>
            </div>
            {/* remove button */}
            {inTeam && (
                <img
                    src={IconCross}
                    alt='close'
                    className={cardStyles.cross}
                    onClick={onClick}
                />
            )}
        </article>
    );
}
