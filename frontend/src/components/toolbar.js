import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SideDialog from './dialog'

function ToolbarAction() {
  const [open, setOpen] = useState(false);


  return (
    <div style={{
      display: 'flex',

    }}>
      <Button variant="contained" onClick={() => { setOpen(true) }}>Add User</Button>
      <SideDialog open={open} setOpen={setOpen} />
    </div >
  )
}

export default ToolbarAction