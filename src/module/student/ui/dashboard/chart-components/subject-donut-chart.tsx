import { Pie } from "@ant-design/plots";

interface SubjectDonutChartProps {
  data: any;
  title: string;
  showLegend?: boolean;
  showTitle?: string;
  count: number;
}

export const SubjectDonutChart: React.FC<SubjectDonutChartProps> = (props) => {
  const { data, title, count } = props;

  return (
    <>
      <Pie
        {...{
          data: data,
          angleField: "percent",
          colorField: "item",
          innerRadius: 0.6,
          autoFit: true,
          height: 250,
          title: title,
          label: {
            type: "inner",
            offset: "-30%",
            content: "{value}",
            style: {
              textAlign: "center",
              fontSize: 14,
              width: "--webkit-fill-available",
            },
          },
          annotations: [
            {
              type: "text",
              style: {
                text: `Total\n${count}`,
                x: "50%",
                y: "50%",
                textAlign: "center",
                fontSize: 20,
                fontStyle: "bold",
              },
            },
          ],
          interactions: [{ type: "element-active" }],
        }}
      />
    </>
  );
};
