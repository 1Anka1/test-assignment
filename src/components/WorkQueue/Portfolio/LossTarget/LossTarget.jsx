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
    name: 'loss',
    green: 48.2,
    yellow: 20,
    red: 31.8,
  },
];

export const LossTarget = () => {
  const target = 55;
  const actual = data[0].green;
  const difference = Number((target - actual).toFixed(2));

  const renderAboveTarget = (props) => {
    const { viewBox } = props;
    const { x, y } = viewBox;

    return (
      <g transform={`translate(${x}, ${y - 6})`}>
        <text
          x={0}
          y={-5}
          textAnchor="middle"
          fill="#4a5366"
          fontSize={10}
          fontWeight={700}
        >
          TG:{target}%
        </text>

        <polygon points="-8,0 8,0 0,8" fill="#4a80ff" />
      </g>
    );
  };

  const renderBelowActual = (props) => {
    const { viewBox } = props;
    const { x, y } = viewBox;

    return (
      <g transform={`translate(${x}, ${y + 45})`}>
        <text
          x={0}
          y={12}
          textAnchor="middle"
          fill="#3fb37f"
          fontSize={10}
          fontWeight={700}
        >
          {difference}%
        </text>

        <text
          x={-5}
          y={-20}
          textAnchor="middle"
          fill="#FFFF"
          fontSize={10}
          fontWeight={700}
        >
          {actual}%
        </text>

        <polygon points="-8,0 8,0 0,-8" fill="#3fb37f" />
      </g>
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
              dataKey="green"
              stackId="a"
              fill="#3fb37f"
              radius={[25, 0, 0, 25]}
            />
            <Bar dataKey="yellow" stackId="a" fill="#f0c45c" />
            <Bar
              dataKey="red"
              stackId="a"
              fill="#d62828"
              radius={[0, 25, 25, 0]}
            />
            <ReferenceLine
              x={target}
              stroke="transparent"
              label={renderAboveTarget}
            />

            <ReferenceLine
              x={actual}
              stroke="transparent"
              label={renderBelowActual}
            />
          </BarChart>
        </ResponsiveContainer>
      </SC.ChartWrapper>
    </>
  );
};
