import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

import * as SC from '../Portfolio.styled';

export const BusinessTarget = ({
  title,
  actual = 8100000,
  target = 12000000,
  currency = '$',
}) => {
  const data = [
    {
      name: 'target',
      actualValue: actual,
      remaining: target - actual,
      targetValue: target,
    },
  ];

  const percentage = Math.round((actual / target) * 100);
  const round = (data[0].actualValue / 1000000).toFixed(1);

  const renderActualLabel = (props) => {
    const { viewBox } = props;
    const { x, y } = viewBox;

    return (
      <g transform={`translate(${x}, ${y + 45})`}>
        <text
          x={-5}
          y={0}
          textAnchor="middle"
          fill="#3fb37f"
          fontSize={12}
          fontWeight={700}
        >
          SDASD {percentage}
        </text>

        <text
          x={-5}
          y={-20}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize={10}
          fontWeight={700}
        >
          {`${currency}${round}M`}
        </text>
      </g>
    );
  };

  return (
    <>
      <SC.Label>{title}</SC.Label>
      <SC.ChartWrapper>
        <ResponsiveContainer width="100%" height={70}>
          <BarChart
            data={data}
            layout="vertical"
            stackOffset="none"
            barCategoryGap={0}
            margin={{ top: 5, right: 50, left: 0, bottom: 25 }}
          >
            <XAxis type="number" domain={[0, data[0].targetValue]} hide />
            <YAxis type="category" dataKey="name" hide />

            <Bar
              dataKey="actualValue"
              stackId="a"
              fill="#3868ba"
              radius={[0, 25, 25, 0]}
              barSize={20}
            />

            <Bar
              dataKey="remaining"
              stackId="a"
              fill="#313954"
              radius={[0, 25, 25, 0]}
              barSize={20}
            />

            <ReferenceLine
              x={actual}
              stroke="transparent"
              label={renderActualLabel}
            />
          </BarChart>
        </ResponsiveContainer>
        <SC.TargetValue>{`${target}M`}</SC.TargetValue>
      </SC.ChartWrapper>
    </>
  );
};

// const data = [
//   {
//     name: 'target',
//     target: 100,
//   },
// ];

// export const BusinessTarget = () => {
//   const renderBelowActual = (props) => {
//     const { viewBox } = props;
//     const { x, y } = viewBox;

//     return (
//       <g transform={`translate(${x}, ${y + 45})`}>
//         <text
//           x={0}
//           y={12}
//           textAnchor="middle"
//           fill="#3fb37f"
//           fontSize={10}
//           fontWeight={700}
//         >
//           ff%
//         </text>

//         <text
//           x={-5}
//           y={-20}
//           textAnchor="middle"
//           fill="#FFFF"
//           fontSize={10}
//           fontWeight={700}
//         >
//           ff%
//         </text>
//       </g>
//     );
//   };

//   return (
//     <>
//       <SC.Label>NEW BUSINESS TARGET</SC.Label>
//       <SC.ChartWrapper>
//         <ResponsiveContainer width="100%" height={80}>
//           <BarChart
//             data={data}
//             layout="vertical"
//             radius={25}
//             margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
//           >
//             <XAxis type="number" domain={[0, 100]} hide />
//             <YAxis type="category" dataKey="name" hide />
//             <Bar
//               dataKey="green"
//               stackId="a"
//               fill="#3868ba"
//               radius={[0, 25, 25, 0]}
//             />
//             <Bar
//               dataKey="target"
//               stackId="a"
//               fill="#313954"
//               radius={[0, 25, 25, 0]}
//             />

//             {/* <ReferenceLine
//               x={actual}
//               stroke="transparent"
//               label={renderBelowActual}
//             /> */}
//           </BarChart>
//         </ResponsiveContainer>
//       </SC.ChartWrapper>
//     </>
//   );
// };
