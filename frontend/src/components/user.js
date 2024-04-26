import React, { useEffect, useState } from 'react'
import { GET_USERS } from '../graphhql/Queries/useQueryUser';
import { useLazyQuery } from '@apollo/client';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import columns from './tablejson'
import ToolbarAction from './toolbar'

function User() {
  const [allUser, setAllUser] = useState([])
  const [getALlUser, { data, loading }] = useLazyQuery(GET_USERS, {
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

  const table = useMaterialReactTable({
    columns,
    data: allUser,
    enableRowSelection: true,
    state: {
      isLoading: loading,
      showProgressBars: loading,
      isSaving: loading,
    },
    renderTopToolbarCustomActions: () => (
      <ToolbarAction />
    ),

  });

  return (
    <MaterialReactTable table={table} />
  )
}

export default User