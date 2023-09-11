import cardStyles from './UserCard.module.css';
import { TUser } from '../../types';

interface UserCardProps {
    user: TUser;
}

//* Display user card with avatar, email, name and city
export function UserCard({ user }: UserCardProps) {
    return (
        <article className={cardStyles.cardWrapper}>
            <div className={cardStyles.cardContent}>
                {/* avatar */}
                <img
                    className={cardStyles.avatar}
                    // hardcode
                    src='/public/favicon.svg'
                    alt='avatar'
                />
                {/* info */}
                <div className={cardStyles.text}>
                    <h5>{user.email}</h5>
                    <h4>{user.name}</h4>
                    <h5>{user.address.city}</h5>
                </div>
            </div>
        </article>
    );
}
