import { useEffect, useState } from 'react';
import { TUser } from '../../types';
import mainStyles from './MainPage.module.css';
import { GetUsers } from '../../services/requests';
import { UserCard } from '../../components/UserCard';
import { EMAIL_REGEX } from '../../constants';
import { IconPlus } from '../../constants/images';
import { AsideNav } from '../../components/AsideNav';

//* Display main page with search bar, found users, team members
export function MainPage() {
    const [searchValue, setSearchValue] = useState('');
    const [searchUsers, setSearchUsers] = useState<TUser[]>([]);
    const [team, setTeam] = useState<TUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        let debounce: number | null = null;

        function handleSearchChange(value: string) {
            if (debounce) {
                clearTimeout(debounce); // Clear the previous timeout
            }
            // Set a new debounce timeout
            debounce = setTimeout(() => {
                if (value) {
                    getUsers(value);
                }
            }, 500);
        }

        if (searchValue) {
            setIsLoading(true);
            handleSearchChange(searchValue);
        } else {
            setIsLoading(false);
        }

        // Clear the debounce timeout on unmount
        return () => {
            if (debounce) {
                clearTimeout(debounce);
            }
        };
    }, [searchValue]);

    async function getUsers(email: string) {
        const users = await GetUsers(email);
        setSearchUsers(users);
        setIsLoading(false);
    }

    function addUser() {
        const user = searchUsers.find((user) => searchValue === user.email);
        if (user) {
            // If user is found
            if (!team.find((user) => searchValue === user.email)) {
                // If user is not in the team yet, add them to the team
                setTeam((prev) => [...prev, user]);
            }
            setSearchValue('');
        }
    }

    function removeUser(id: number) {
        // Remove a user from the team by filtering out their ID
        setTeam((prev) => prev.filter((user) => user.id !== id));
    }

    function saveTeam() {
        console.log('Команда организации\n', team);
    }

    return (
        <div className={mainStyles.pageContainer}>
            <AsideNav />
            <div className={mainStyles.container}>
                <h1>Команда организации</h1>
                <h4>
                    Владельцы команд могут добавлять участников в команду своей
                    организации, добавляя их адреса электронной почты. У них
                    должна быть учетная запись на сайте.
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
                        {/* Add user button */}
                        <button
                            className={mainStyles.button}
                            onClick={addUser}
                            disabled={!EMAIL_REGEX.test(searchValue)}
                        >
                            <img src={IconPlus} alt='plus' />
                            <h4 className={mainStyles.buttonText}>
                                Добавить участника
                            </h4>
                        </button>
                    </section>
                </div>
                {isLoading ? (
                    <h2 className={mainStyles.loading}>Загрузка</h2>
                ) : (
                    searchValue &&
                    (searchUsers.length ? (
                        // List of found users
                        <section className={mainStyles.searchResultsContainer}>
                            <div className={mainStyles.searchResults}>
                                {searchUsers.map((user) => (
                                    <div
                                        onClick={() =>
                                            setSearchValue(user.email)
                                        }
                                        key={user.id}
                                    >
                                        <UserCard user={user} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : (
                        <h2>Пользователь с такой почтой не найден</h2>
                    ))
                )}

                {/* List of team (added members) */}
                {team.length ? (
                    <section className={mainStyles.usersContainer}>
                        {team.map((user) => (
                            <UserCard
                                user={user}
                                key={user.id}
                                onClick={() => removeUser(user.id)}
                                inTeam
                            />
                        ))}
                    </section>
                ) : (
                    <h1>В команде на данный момент нет участников</h1>
                )}
                {/* Save team button */}
                {team.length !== 0 && (
                    <button className={mainStyles.button} onClick={saveTeam}>
                        <h4 className={mainStyles.buttonText}>Сохранить</h4>
                    </button>
                )}
            </div>
        </div>
    );
}
