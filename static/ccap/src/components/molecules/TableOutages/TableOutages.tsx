"use client";

import { FilterIcon, LucideTriangleAlert } from "lucide-react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_TableOptions,
} from "material-react-table";

import React, { useMemo } from "react";

import "./TableOutages.styles.scss";
import { TableOutagesProps } from "./TableOutages.types";
import { IOutageProps } from "@/src/types/global.types";
import { isoToDateTime, toTitleCase } from "../../../lib/utils";

const TableOutages: React.FC<TableOutagesProps> = ({
  loading = true,
  outageData,
  onRowClick,
}) => {
  const columns = useMemo<MRT_ColumnDef<IOutageProps>[]>(
    () => [
      {
        accessorKey: "compliance",
        header: "Compliance",
        Cell: ({ cell }): React.ReactNode => {
          return cell.getValue<boolean>() ? null : <LucideTriangleAlert />;
        },
      },
      {
        accessorKey: "incidentId",
        header: "Incident ID",
      },
      {
        accessorKey: "region",
        header: "Region",
      },
      {
        accessorKey: "severity",
        header: "ACMA",
        Cell: ({ cell }): React.ReactNode =>
          toTitleCase(cell.getValue<string>()),
      },
      {
        accessorKey: "causeOfOutage",
        header: "Cause of outage",
      },
      {
        accessorKey: "communicationId",
        header: "Comms records",
        Cell: ({ row }): React.ReactNode => (
          <a href={`#`} rel="noreferrer">
            View comms record
          </a>
        ),
      },
      {
        accessorKey: "identifiedAt",
        header: "Identified at",
        Cell: ({ cell }): React.ReactNode =>
          isoToDateTime(cell.getValue<string>()),
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );

  const tableProps = useMemo<MRT_TableOptions<IOutageProps>>(
    () => ({
      columns,
      data: outageData?.OUTAGES || [],
      enableColumnActions: false,
      enableDensityToggle: false,
      enableFullScreenToggle: false,
      enableHiding: false,
      state: {
        isLoading: loading,
      },
      muiTableBodyRowProps: ({ row }) => ({
        onClick: () => {
          if (onRowClick) {
            onRowClick(row.original.incidentId);
          }
        },
        sx: { cursor: "pointer" },
      }),
      renderTopToolbarCustomActions: () => (
        <div className="records__label">
          <FilterIcon />
          Filters
        </div>
      ),
    }),
    [columns, outageData?.OUTAGES, loading, onRowClick]
  );

  return <MaterialReactTable {...tableProps} />;
};

export default TableOutages;
