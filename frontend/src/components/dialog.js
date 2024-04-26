import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ADDUSER } from '../graphhql/Mutation/useMutationAddUser';
import { useMutation } from "@apollo/client";
import Button from '@mui/material/Button';

function SideDialog({ selectedRow, setOpen, open }) {
  const [userData, setUserData] = useState({
    name: '',
    job: '',
    department: '',
    salary: '',
    hiredate: '',
  });
  const [addUser] = useMutation(ADDUSER, {
    awaitRefetchQueries: true,
    refetchQueries: ["getUsers"],
    onCompleted: (data) => {
      if (data) {
        handleClose()
        if (data?.addUser?.success) {
          alert("User created successful")
        } else {
          alert(`issue ${data?.addUser?.message}`);
        }
      }
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({
      variables: {
        user: userData
      }
    });
  };

  const handleClose = () => {
    setOpen(false)
    setUserData({
      name: '',
      job: '',
      department: '',
      salary: '',
      hiredate: '',
    })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Add User"}
      </DialogTitle>
      <DialogContent>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="name">Job:</label>
          <input
            type="text"
            id="job"
            name="job"
            value={userData.job}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="name">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={userData.department}
            onChange={handleChange}
            required
          />
          <br />


          <label htmlFor="age">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={userData.salary}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="salary">Hiredate:</label>
          <input
            type="date"
            id="hiredate"
            name="hiredate"
            value={userData.hiredate}
            onChange={handleChange}
            required
          />
          <br />
          <DialogActions>
            <Button type="submit" onClick={() => { }}>Add</Button>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </form>

      </DialogContent>

    </Dialog>
  )

}

export default SideDialog