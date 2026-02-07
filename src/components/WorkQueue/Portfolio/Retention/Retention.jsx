import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

import * as SC from '../Portfolio.styled';
const data = [
  {
    name: 'retention',
    green: 20,
    yellow: 55,
    red: 25,
  },
];

export const RetentionTarget = () => {
  const target = 88;

  const renderAboveTarget = (props) => {
    const { viewBox } = props;
    const { x, y } = viewBox;

    return (
      <>
        <g transform={`translate(${x + 5}, ${y - 6})`}>
          <text
            x={0}
            y={3}
            textAnchor="middle"
            fill="#4a5366"
            fontSize={12}
            fontWeight={700}
          >
            TG: 85-90%
          </text>
        </g>

        <g transform={`translate(${x + 5}, ${y + 23})`}>
          <text
            x={0}
            y={3}
            textAnchor="middle"
            fill="#fff"
            fontSize={16}
            fontWeight={700}
          >
            {target}%
          </text>
        </g>

        <g transform={`translate(${x + 5}, ${y + 45})`}>
          <text
            x={0}
            y={12}
            textAnchor="middle"
            fill="#3fb37f"
            fontSize={10}
            fontWeight={700}
          >
            ON TARGET
          </text>
          <polygon points="-8,0 8,0 0,-8" fill="#3fb37f" />
        </g>
      </>
    );
  };

  return (
    <>
      <SC.Label>PORTFOLIO LOSS RATIO TARGET</SC.Label>
      <SC.ChartWrapper>
        <ResponsiveContainer width="100%" height={80}>
          <BarChart
            data={data}
            layout="vertical"
            radius={25}
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" hide />
            <Bar
              dataKey="red"
              stackId="a"
              fill="#d62828"
              radius={[25, 0, 0, 25]}
            />

            <Bar dataKey="yellow" stackId="a" fill="#f0c45c" />
            <Bar
              dataKey="green"
              stackId="a"
              fill="#3fb37f"
              radius={[0, 25, 25, 0]}
            />
            <ReferenceLine
              x={target}
              stroke="transparent"
              label={renderAboveTarget}
            />
          </BarChart>
        </ResponsiveContainer>
      </SC.ChartWrapper>
    </>
  );
};
