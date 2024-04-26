import React, { useState } from "react";
import { IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SideDialog from './dialog'
import { UPDATEUSER } from '../graphhql/Mutation/useMutationUpdateUser';

import { useMutation } from "@apollo/client";

function RowAction({ selectedRow }) {
  const [open, setOpen] = useState(false);

  const [updateUser] = useMutation(UPDATEUSER, {
    awaitRefetchQueries: true,
    refetchQueries: ["getUsers"],
    onCompleted: (data) => {
      if (data) {
        if (data?.updateUser?.success) {
          alert("User update successful")
        } else {
          alert(`issue ${data?.updateUser?.message}`);
        }
      }
    },
  });

  const handleDelete = () => {
    updateUser({
      variables: {
        user: {
          ...selectedRow,
          isDeleted: true
        }
      }
    });
  }

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <SideDialog open={open} setOpen={setOpen} selectedRow={selectedRow} />
    </Box>
  )
}

export default RowAction