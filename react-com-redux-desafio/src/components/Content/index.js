import React from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '../Loading';
import { LoginForm } from '../LoginForm';
import { Photos } from '../Photos';

export function Content() {
  const { token, user } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;

  if (loading) return <Loading />;
  if (user.data && user.data.username) return <Photos />;
  else return <LoginForm />;
}
