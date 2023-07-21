import React from 'react';

export default function Table1() {
  let TableData = [
    {
        id:1,
        crowdSize:'0:00 - 14:59',
        video1:21,
        video2:2,
        total:23
       },
       {
        id:2,
        crowdSize:'15:00 - 29:59',
        video1:0,
        video2:0,
        total:0
       },
       {
        id:3,
        crowdSize:'30:00 - 44:59',
        video1:2,
        video2:12,
        total:14
       },
       {
        id:4,
        crowdSize:'45:00 - 59:59',
        video1:5,
        video2:6,
        total:11
       },
       {
        id:5,
        crowdSize:'60:00 - 74:59',
        video1:7,
        video2:5,
        total:12
       },
       {
        id:6,
        crowdSize:'75:00 - 89:59',
        video1:3,
        video2:2,
        total:5
       },
       {
        id:7,
        crowdSize:'90:00 - 104:59',
        video1:'n/a',
        video2:4,
        total:4
       },

  ];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Crowd Size</th>
            <th scope="col">Video 1</th>
            <th scope="col">Video 2</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((record, index) => (
            <tr key={index} className="table-row">
              <td>{record.crowdSize}</td>
              <td>{record.video1}</td>
              <td>{record.video2}</td>
              <td className="total">
                <b>{record.total}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
