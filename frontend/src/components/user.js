import React, { useEffect, useState } from 'react'
import { GET_USERS } from '../graphhql/Queries/useQueryUser';
import { useLazyQuery } from '@apollo/client';

function User() {
  const [allUser, setAllUser] = useState([])
  const [getALlUser, { data }] = useLazyQuery(GET_USERS, {
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    getALlUser()
  }, [getALlUser])


  useEffect(() => {
    if (data) {
      setAllUser(data.getUsers.res)
    }
  }, [data])

  console.log('allUser', allUser)
  return <>All User</>
}

export default User