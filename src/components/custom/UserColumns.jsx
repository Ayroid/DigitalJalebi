// Array of columns for the UserTable component

export const columns = [
  {
    accessorKey: "profilePic",
    header: "Profile Pic",
    cell: ({ row }) => {
      const { image } = row.original;
      return <img className="profileImage" src={image} alt="Profile Pic" />;
    },
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
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
