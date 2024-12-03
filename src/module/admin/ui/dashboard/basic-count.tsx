import React from "react";
import type { StatisticProps } from "antd";
import { Card, Statistic } from "antd";
import CountUp from "react-countup";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp style={{ fontSize: 20 }} duration={2} end={value as number} separator="," />
);

interface CountCardProps {
  isLoading: boolean;
  title: string;
  value: number;
  childrenCount?: Record<string, number>[];
}

const CountCard: React.FC<CountCardProps> = (props) => {
  const { isLoading, title, value, childrenCount } = props;

  return (
    <Card
      loading={isLoading}
      title={title}
      style={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      {childrenCount?.map((item) => (
        <Card.Grid hoverable={false} style={{ width: "33.33%", padding: "1em" }}>
          <Statistic key={Object.keys(item)[0]} title={Object.keys(item)[0]} value={item[Object.keys(item)[0]]} formatter={formatter} />
        </Card.Grid>
      ))}
      {childrenCount ? (
        <Card.Grid hoverable={false} style={{ width: "33.33%", padding: "1em" }}>
          <Statistic title="Total" value={value} formatter={formatter} />
        </Card.Grid>
      ) : (
        <Statistic value={value} formatter={formatter} />
      )}
    </Card>
  );
};

export default CountCard;
