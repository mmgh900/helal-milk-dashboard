'use client'
import { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
} from "@mui/material";

interface HelalTableProps {
  data: any[];
}

type Order = "asc" | "desc";

type HeadCell = {
  id: string;
  label: string;
  numeric: boolean;
};

function HelalTable({ data }: HelalTableProps) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");

  const columns = data?.length > 0 ? Object.keys(data[0]) : [];

  const headCells: HeadCell[] = columns.map((column) => ({
    id: column,
    label: column,
    numeric: typeof data[0][column] === "number",
  }));

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = orderBy
    ? [...data].sort((a, b) =>
      order === "asc"
        ? a[orderBy] < b[orderBy]
          ? -1
          : 1
        : b[orderBy] < a[orderBy]
          ? -1
          : 1
    )
    : data;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => handleSort(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row: any, index: any) => (
            <TableRow key={index}>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id} align={headCell.numeric ? "right" : "left"}>
                  {JSON.stringify(row[headCell.id])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HelalTable;