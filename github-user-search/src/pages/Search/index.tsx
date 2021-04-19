import React, { useState } from 'react';
import './styles.scss';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';
import ButtonIcon from '../../core/assets/components/ButtonIcon';
import ImageLoader from '../../core/assets/components/Loaders/ImageLoader';
import InfoLoader from '../../core/assets/components/Loaders/InfoLoader';
import UserDetails from './components/UserDetails';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsloading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsloading(true)
        makeRequest({url: `users/${search}`})        
        .then(response => setUserData(response.data))
        .catch(() => {
            alert('Não achou!')
        })
        .finally(() => {
            setIsloading(false);
        })
    }

    return (
        <div className="search-container">
            <div className="search-content">
                <h1 className="search-title">
                    Encontre um perfil Github
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control search-text"
                        type="text"
                        placeholder="Usuário Github"
                        required
                        onChange={handleChange}
                    />
                    <ButtonIcon text="Encontrar" />
                </form>
            </div>
            {isLoading ? (
                <div className="content-loaders">
                    <ImageLoader />
                    <InfoLoader />
                </div>
            ): ( <>
                   { userData && ( <UserDetails user={userData} />)} 
                 </>
            )}
            
            
        </div>
    )
}

export default Search;