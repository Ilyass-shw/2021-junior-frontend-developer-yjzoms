import React from 'react';
import Table from 'react-bootstrap/Table';
import { useAppSelector } from '../../app/hooks';

const CostsTable: React.FC = () => {
  const CostsList = useAppSelector((state) => state.Costs.costsList);
  return (
    <Table bordered hover>
      <thead className="costs-table-head">
        <tr>
          <th>Name</th>
          <th className="text-end">Net</th>
          <th className="text-end">Tax</th>
          <th className="text-end">Gross</th>
        </tr>
      </thead>
      <tbody>
        {CostsList.map((item) => (
          <tr key={item.id}>
            <td>{`Item ${item.id}`}</td>
            <td className="text-end">{item.net.toFixed(2)}</td>
            <td className="text-end">{item.tax.toFixed(2)}</td>
            <td className="text-end">{item.gross.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CostsTable;
