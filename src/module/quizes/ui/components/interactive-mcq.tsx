import React from "react";
import { Timeline, Radio, Typography, Space, Form, TimelineProps, Button, Statistic, Col, Row, Card, Progress } from "antd";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { FieldTimeOutlined, FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import useFullScreen from "@/helper/hooks/useFullScreen";
interface InteractiveMCQProps {
  MCQs: DetailedQuestion[];
  title: string;
  time: number;
  timeFormat?: string;
}

export const InteractiveMCQ: React.FC<InteractiveMCQProps> = ({ MCQs, title, time, timeFormat = "mm:ss" }) => {
  const form = Form.useFormInstance();
  const questionData = Form.useWatch("questionData", form);

  const { isFullScreen, setIsFullScreen } = useFullScreen();
  const handleFullScreen = () => setIsFullScreen(!isFullScreen);

  const items: TimelineProps["items"] = MCQs.map((question, index) => ({
    children: (
      <div key={index}>
        <Form.Item name={["questionData", index, "questionIds"]} initialValue={question.id} noStyle>
          <Typography.Title level={5}>
            {`${index + 1}. `} {question.question}
          </Typography.Title>
        </Form.Item>

        <Form.Item name={["questionData", index, "answer"]}>
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="a">a. {question.optionA}</Radio>
              <Radio value="b">b. {question.optionB}</Radio>
              <Radio value="c">c. {question.optionC}</Radio>
              <Radio value="d">d. {question.optionD}</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </div>
    ),
    color: questionData?.[index]?.answer ? "blue" : "gray",
    pending: !questionData?.[index]?.answer,
  }));

  return (
    <Col
      xxl={18}
      xl={20}
      lg={20}
      md={24}
      sm={24}
      xs={24}
      style={{
        margin: "auto",
      }}
    >
      <Card
        title={
          <Row>
            <Col span={8}>
              <Typography.Title level={4}>{title}</Typography.Title>
            </Col>
            <Col span={8}>
              <Progress
                percent={+((questionData?.filter((q: any) => q.answer).length / MCQs.length) * 100).toFixed(1)}
                style={{ width: 200 }}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic.Countdown
                title={<FieldTimeOutlined style={{ fontSize: 16, color: "black" }} />}
                value={Date.now() + time}
                format={timeFormat}
                valueStyle={{ fontSize: 16 }}
              />
            </Col>
          </Row>
        }
        extra={
          <Button
            type="primary"
            onClick={handleFullScreen}
            icon={isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          >
            {isFullScreen ? "Exit Full Screen" : "0 Distraction Mode"}
          </Button>
        }
        actions={[
          <Button type="primary" onClick={form.submit} style={{ marginTop: 16 }}>
            Submit
          </Button>,
        ]}
        styles={{ actions: { justifyContent: "start" } }}
        style={{
          padding: 8,
          position: isFullScreen ? "fixed" : "static",
          width: isFullScreen ? "100vw" : "auto",
          zIndex: isFullScreen ? 100 : "auto",
          top: isFullScreen ? 0 : "auto",
          left: isFullScreen ? 0 : "auto",
        }}
      >
        <Timeline items={items} />
      </Card>
    </Col>
  );
};
