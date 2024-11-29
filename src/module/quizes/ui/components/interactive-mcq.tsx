import React from "react";
import { Timeline, Radio, Typography, Space, Form, TimelineProps, Button, Statistic, Col, Card, Progress, Skeleton } from "antd";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { FieldTimeOutlined, FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import useFullScreen from "@/helper/hooks/useFullScreen";
interface InteractiveMCQProps {
  MCQs: DetailedQuestion[];
  title: string;
  time: number;
  timeFormat?: string;
  isLoading?: boolean;
}

export const InteractiveMCQ: React.FC<InteractiveMCQProps> = ({ MCQs, title, time, timeFormat = "mm:ss", isLoading }) => {
  const [started, setStarted] = React.useState(false);
  const [timeCompleted, setTimeCompleted] = React.useState(false);

  const form = Form.useFormInstance();
  const questionData = Form.useWatch("questionData", form);

  const { isFullScreen, setIsFullScreen } = useFullScreen();
  const handleFullScreen = () => setIsFullScreen(!isFullScreen);

  const items: TimelineProps["items"] = MCQs.map((question, index) => ({
    children: (
      <div key={index}>
        <Skeleton loading={!started} active={isLoading} paragraph={{ rows: 4 }}>
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
        </Skeleton>
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
        loading={isLoading}
        title={
          <Space size={"large"}>
            <Typography.Title level={4}>{title}</Typography.Title>
            <Progress
              percent={+((questionData?.filter((q: any) => q.answer).length / MCQs.length) * 100).toFixed(1)}
              style={{ width: 200 }}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
            <Statistic.Countdown
              title={<FieldTimeOutlined style={{ fontSize: 16, color: "black" }} />}
              value={started ? Date.now() + time : 0}
              format={timeFormat}
              valueStyle={{ fontSize: 16 }}
              onFinish={() => setTimeCompleted(true)}
              valueRender={(value) => (timeCompleted ? "Time Completed" : value)}
            />
          </Space>
        }
        extra={
          <Space size={"small"}>
            <Button type="primary" disabled={started} onClick={() => setStarted(true)}>
              Start Quiz
            </Button>
            <Button
              type="default"
              onClick={handleFullScreen}
              icon={isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            >
              {isFullScreen ? "Exit Full Screen" : "0 Distraction Mode"}
            </Button>
          </Space>
        }
        actions={[
          <Button type="primary" disabled={timeCompleted || !started} onClick={form.submit} style={{ marginTop: 16 }}>
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
