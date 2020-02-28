import React, { useState } from 'react';
import styled from 'styled-components';
import { InfiniteScroll } from 'react-simple-infinite-scroll';

import User from './User';
import useFetch from './hooks/useFetch';

const UserList = () => {
  const [pageToFetch, setPageToFetch] = useState(1);

  const [{ data, total_pages: totalPages }, loading] = useFetch({
    method: 'get',
    url: `https://reqres.in/api/users?page=${pageToFetch}`,
    infiniteScroll: true,
  });

  const hasMoreUsers = pageToFetch < totalPages;

  return (
    <Root>
      <Title>Users</Title>
      <InfiniteScroll
        hasMore={hasMoreUsers}
        onLoadMore={() => setPageToFetch(pageToFetch + 1)}
        threshold={100}
        isLoading={loading}
      >
        {data
          && data.map(
            ({
              avatar,
              first_name: firstName,
              last_name: lastName,
              ...user
            }) => (
              <User
                key={user.id}
                firstName={firstName}
                lastName={lastName}
                avatar={avatar}
              />
            ),
          )}
      </InfiniteScroll>
      {!hasMoreUsers && <span>No more users to load..</span>}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  height: 100%;
  overflow: auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default UserList;
