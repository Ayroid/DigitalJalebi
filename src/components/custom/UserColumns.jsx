// Array of columns for the UserTable component

export const columns = [
  {
    accessorKey: "S.No",
    header: "S.No",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "profilePic",
    header: "Profile Pic",
    cell: ({ row }) => {
      const { image } = row.original;
      return (
        <div className="profileImageDiv">
          <img className="profileImage" src={image} alt="Profile Pic" />
        </div>
      );
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
    cell: ({ row }) => {
      const { phone } = row.original;
      const countryCode = phone.slice(0, phone.indexOf(" ")) + " ";
      let phoneNumber = phone.slice(phone.indexOf(" ") + 1).replace(/ /g, "");
      phoneNumber = phoneNumber.slice(0, 5) + " " + phoneNumber.slice(5);
      return <div>{countryCode + phoneNumber}</div>;
    },
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => {
      const { gender } = row.original;
      return <div>{gender.charAt(0).toUpperCase() + gender.slice(1)}</div>;
    },
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
