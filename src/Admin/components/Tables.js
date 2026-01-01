import React from 'react';
import { NavLink } from 'react-router-dom';

export const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Employee' },
  { key: 'complaintDate', title: 'Complaint Date' },
  { key: 'Status', title: 'Status' },
  { key: 'delete', title: 'Delete' },
  { key: 'details', title: 'Detail' },
];

export const data = [
  { id: 1, name: 'Amit Yadav', age: 25, complaintDate: '12-1-2024', Status: 'pending/solved', delete: '', details: '' },
];

export const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto w-[90%] m-auto">


      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center">
                  {column.key === 'delete' ? (
                    <span className='text-red-600 cursor-pointer' >
                      <i className="bi bi-trash me-2"></i>
                      {/* Delete */}
                    </span>
                  ) : column.key === 'details' ? (
                    <NavLink  to={`/details/${row.id}`}>
                      <p className='text-blue-600' >View </p>
                    </NavLink>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
