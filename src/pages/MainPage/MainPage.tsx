import { useState } from 'react';
import mainStyles from './MainPage.module.css';
import { UserCard } from '../../components/UserCard';

//* Display main page with search bar and team members
export function MainPage() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={mainStyles.container}>
            <h1>Команда организации</h1>
            <h4>
                Владельцы команд могут добавлять участников в команду своей
                организации, добавляя их адреса электронной почты. У них должна
                быть учетная запись на сайте.
            </h4>
            {/* Search bar */}
            <div>
                <h4 className={mainStyles.searchLabel}>
                    Введите e-mail участника
                </h4>
                <section className={mainStyles.searchBarContainer}>
                    <input
                        className={mainStyles.search}
                        type='search'
                        placeholder='example@gmail.com'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </section>
            </div>
            <section className={mainStyles.usersContainer}>
                <UserCard
                    user={{
                        id: 0,
                        name: 'name',
                        email: 'qwerty@email.com',
                        address: { city: 'moscow' },
                    }}
                />
                <UserCard
                    user={{
                        id: 0,
                        name: 'name',
                        email: 'qwerty@email.com',
                        address: { city: 'moscow' },
                    }}
                />
                <UserCard
                    user={{
                        id: 0,
                        name: 'name',
                        email: 'qwerty@email.com',
                        address: { city: 'moscow' },
                    }}
                />
                <UserCard
                    user={{
                        id: 0,
                        name: 'name',
                        email: 'qwerty@email.com',
                        address: { city: 'moscow' },
                    }}
                />
            </section>
        </div>
    );
}
