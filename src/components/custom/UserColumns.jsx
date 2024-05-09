export const columns = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "completeName",
    header: "Complete Name",
    cell: ({ row }) => {
      const { firstName, maidenName, lastName } = row.original;
      const completeName = `${firstName} ${maidenName} ${lastName}`;
      return <div>{completeName}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "companyName",
    header: "Company",
    cell: ({ row }) => {
      const { company } = row.original;
      return <div>{company.name}</div>;
    },
  },
];
