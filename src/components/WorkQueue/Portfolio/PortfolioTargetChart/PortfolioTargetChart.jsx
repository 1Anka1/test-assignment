import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import * as SC from '../Portfolio.styled';

export const PortfolioTargetChart = ({ title, data, target, bars, type }) => {
  const actual = data[0].green;
  const difference = Number((target - actual).toFixed(2));

  const renderLossLabel = ({ viewBox }) => {
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

  const renderLossActual = ({ viewBox }) => {
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
          fill="#fff"
          fontSize={10}
          fontWeight={700}
        >
          {actual}%
        </text>
        <polygon points="-8,0 8,0 0,-8" fill="#3fb37f" />
      </g>
    );
  };

  const renderRetentionLabel = ({ viewBox }) => {
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
            x={3}
            y={3}
            textAnchor="middle"
            fill="#fff"
            fontSize={12}
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
            fontSize={8}
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
      <SC.Label>{title}</SC.Label>

      <SC.ChartWrapper>
        <ResponsiveContainer width="100%" height={80}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" hide />

            {bars.map((bar) => (
              <Bar key={bar.dataKey} {...bar} />
            ))}

            <ReferenceLine
              x={target}
              stroke="transparent"
              label={type === 'loss' ? renderLossLabel : renderRetentionLabel}
            />

            {type === 'loss' && (
              <ReferenceLine
                x={actual}
                stroke="transparent"
                label={renderLossActual}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </SC.ChartWrapper>
    </>
  );
};
