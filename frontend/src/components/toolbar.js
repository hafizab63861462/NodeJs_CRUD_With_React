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
      <p style={{ marginLeft: '10px' }}>If want to update anu user click on row</p>
      <SideDialog open={open} setOpen={setOpen} />
    </div >
  )
}

export default ToolbarAction