import React, { useState } from "react";
import { IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SideDialog from './dialog'

function RowAction({ selectedRow }) {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => console.info('Delete')}>
        <DeleteIcon />
      </IconButton>
      <SideDialog open={open} setOpen={setOpen} selectedRow={selectedRow} />
    </Box>
  )
}

export default RowAction