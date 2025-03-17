import { Card } from "antd";
import { commonCardStyle } from "../dashboard-layout";
// import { Pie } from "@ant-design/plots";

export const SubjectWiseProgress: React.FC = () => {
  // const physicsData = [
  //   { item: "Right", count: 4, percent: 0.4 },
  //   { item: "Wrong", count: 6, percent: 0.6 },
  // ];

  // const chemistryData = [
  //   { item: "Right", count: 8, percent: 0.6 },
  //   { item: "Wrong", count: 2, percent: 0.4 },
  // ];

  // const mathData = [
  //   { item: "Right", count: 6, percent: 0.6 },
  //   { item: "Wrong", count: 4, percent: 0.4 },
  // ];

  return (
    <Card
      style={commonCardStyle}
      styles={{
        body: {
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 16,
          padding: 0,
        },
      }}
    >
      {/* <Row> */}
      {/* <Col span={24} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 0, flexDirection: "column" }}> */}
      {/* <Pie
        {...{
          data: physicsData,
          appendPadding: 10,
          autoFit: true,
          angleField: "percent",
          colorField: "item",
          innerRadius: 0.6,
          color: ["#28a745", "#dc3545"],
          legend: false,
          label: {
            type: "inner",
            offset: "-30%",
            content: "{value}",
            style: {
              textAlign: "center",
              fontSize: 14,
            },
          },
          annotations: [
            {
              type: "text",
              style: {
                text: "Physics\n10",
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

      <Pie
        {...{
          data: chemistryData,
          appendPadding: 10,
          autoFit: true,
          angleField: "percent",
          colorField: "item",
          innerRadius: 0.6,
          color: ["#28a745", "#dc3545"],
          legend: false,
          label: {
            type: "inner",
            offset: "-30%",
            content: "{value}",
            style: {
              textAlign: "center",
              fontSize: 14,
            },
          },
          annotations: [
            {
              type: "text",
              style: {
                text: "Chemistry\n10",
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

      <Pie
        {...{
          data: mathData,
          appendPadding: 10,
          autoFit: true,
          angleField: "percent",
          colorField: "item",
          innerRadius: 0.6,
          legend: false,
          color: ["#28a745", "#dc3545"],
          label: {
            type: "inner",
            offset: "-30%",
            content: "{value}",
            style: {
              textAlign: "center",
              fontSize: 14,
            },
          },
          annotations: [
            {
              type: "text",
              style: {
                text: "Maths\n10",
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
      /> */}
      {/* </Col> */}
      {/* // </Row> */}
    </Card>
  );
};
