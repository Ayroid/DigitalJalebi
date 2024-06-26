// Using Table Component from Shared UI Components to render the table

import PropTypes from "prop-types";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const UserTable = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <Table>
        {/* TABLE HEADER- Displays Column Names */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* TABLE BODY- Displays Data */}
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} style={{ textAlign: "left" }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="text-center">No data available</div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* PAGINATION */}
      <div className="flex gap-5 justify-center mt-5">
        <Button
          onClick={() => {
            table.getCanPreviousPage() && table.previousPage();
          }}
          style={{
            width: "100px",
            background: !table.getCanPreviousPage() && "white",
            color: !table.getCanPreviousPage() && "black",
            border: !table.getCanPreviousPage() && "1px solid black",
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            table.getCanNextPage() && table.nextPage();
          }}
          style={{
            width: "100px",
            background: !table.getCanNextPage() && "white",
            color: !table.getCanNextPage() && "black",
            border: !table.getCanNextPage() && "1px solid black",
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};

UserTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default UserTable;
