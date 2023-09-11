import React from 'react';
import mainStyles from './MainPage.module.css';
import { UserCard } from '../../components/UserCard';

export function MainPage() {
    return (
        <div>
            <h1>mainpage</h1>
            <UserCard
                user={{
                    id: 0,
                    name: 'name',
                    email: 'qwerty@email.com',
                    address: { city: 'moscow' },
                }}
            />
        </div>
    );
}
