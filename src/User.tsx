import React from 'react';
import styled from 'styled-components';

interface UserProps {
  avatar: string;
  firstName: string;
  lastName: string;
}

const User: React.FunctionComponent<UserProps> = ({
  avatar,
  firstName,
  lastName,
}): React.ReactElement => (
  <Root>
    <Avatar src={avatar} />
    <Name>{`${firstName} ${lastName}`}</Name>
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 300px;
  height: 150px;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Name = styled.span``;

export default User;
