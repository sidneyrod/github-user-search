import React, { useState } from 'react';
import { User } from '../../types/user';
import { makeRequest } from '../../utils/request';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import './styles.css';

function Search() {
  const [userInfo, setUserInfo] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (search: string) => {
    makeRequest({ url: `/${search}` })
      .then(response => {
        setUserInfo(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="search-container">
      <Form onSearch={handleSearch} />
      {
        userInfo && (
          <UserInfo user={userInfo} isLoading={false} />
        )
      }
    </div>
  );
}

export default Search;