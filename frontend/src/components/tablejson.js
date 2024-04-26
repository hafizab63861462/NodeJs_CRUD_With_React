const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 150,
  },
  {
    accessorKey: 'job',
    header: 'Job',
    size: 150,
  },
  {
    accessorKey: 'department',
    header: 'Departmet',
    size: 200,
  },
  {
    accessorKey: 'salary',
    header: 'Salary',
    size: 150,
  },
  {
    accessorKey: 'hireDate',
    header: 'Hire Dtae',
    size: 150,
    Cell: ({ row }) => {
      return <>{row?.original?.hireDate?.split('T')?.[0]}</>
    }
  },
]
export default columns
