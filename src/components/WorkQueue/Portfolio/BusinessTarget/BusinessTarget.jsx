import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

import * as SC from '../Portfolio.styled';

export const BusinessTarget = ({ title, data, currency, target, bars }) => {
  const chartData = data.map((item) => ({
    ...item,
    remaining: target - item.actualValue,
  }));

  const actualValue = data[0].actualValue;

  const percentage = Math.round((actualValue / target) * 100);
  const round = (actualValue / 1000000).toFixed(1);
  const targetInMillions = Math.floor(target / 1_000_000);

  const renderActualLabel = (props) => {
    const { viewBox } = props;
    const { x, y } = viewBox;

    return (
      <g transform={`translate(${x}, ${y + 45})`}>
        <text
          x={-5}
          y={5}
          textAnchor="middle"
          fill="#3fb37f"
          fontSize={12}
          fontWeight={700}
        >
          {percentage} %
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
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 50, left: 0, bottom: 25 }}
          >
            <XAxis type="number" domain={[0, target]} hide />
            <YAxis type="category" dataKey="name" hide />

            {bars.map((bar) => (
              <Bar key={bar.dataKey} {...bar} />
            ))}

            <ReferenceLine
              x={actualValue}
              stroke="transparent"
              label={renderActualLabel}
            />
          </BarChart>
        </ResponsiveContainer>
        <SC.TargetValue>{`${currency}${targetInMillions}M`}</SC.TargetValue>
      </SC.ChartWrapper>
    </>
  );
};
