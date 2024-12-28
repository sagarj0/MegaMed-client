import React, { useEffect } from "react";
import { Timeline, Radio, Typography, Space, Form, TimelineProps, Button, Statistic, Col, Card, Skeleton, FloatButton, Row } from "antd";
import { CheckCircleFilled, CloseCircleFilled, FieldTimeOutlined, FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import useFullScreen from "@/helper/hooks/useFullScreen";
import { QuizDataTypeKeys, UpdateScoreKey, UpdateScoreProps } from "../type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setTimeCompleted, setStarted, resetQuizReducer, setScoreValue } from "@/store/reducers/quiz-helper/reducer";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { config } from "@/util/config";
import useResponsiveDevice from "@/helper/hooks/use-responsive";
import useBeforeUnload from "@/helper/hooks/useBeforeUnload";
import useAuthHook from "@/module/auth/hook/useAuthHook";
import { renderImage } from "./render-image";

interface InteractiveMCQProps {
  MCQs: DetailedQuestion[];
  title: string;
  time: number;
  timeFormat?: string;
  isLoading?: boolean;
}

export const InteractiveMCQ: React.FC<InteractiveMCQProps> = ({ MCQs, title, time, timeFormat = "mm:ss", isLoading }) => {
  useAuthHook({ checkIsPaid: true });

  const dispatch = useAppDispatch();
  const { md, sm, xs } = useResponsiveDevice();
  const { timeCompleted, started, startedTime, isScoreChecked, score } = useAppSelector((state) => state.QuizHelper);

  useBeforeUnload({ isActive: started && !isScoreChecked });
  useEffect(() => {
    dispatch(resetQuizReducer());
  }, []);

  const form = Form.useFormInstance<UpdateScoreProps>();
  const questionData = Form.useWatch(UpdateScoreKey.questionData, form);
  const { toogleFullScreen, isFullScreen } = useFullScreen();

  const checkScore = () => {
    const firstUnansweredIndex = questionData?.findIndex((question: any) => !question.answer);
    if (firstUnansweredIndex !== -1) {
      const timelineItem = document.querySelectorAll(".ant-timeline-item")[firstUnansweredIndex] as HTMLElement;
      if (timelineItem) timelineItem.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const obtainedScore = questionData?.reduce((acc, question) => (question.answer === question.correctAnswer ? acc + 1 : acc), 0);
    form.setFieldValue(UpdateScoreKey.score, obtainedScore);
    dispatch(setScoreValue(obtainedScore));
    form.submit();
  };

  const renderOptions = (question: DetailedQuestion, index: number) =>
    ["a", "b", "c", "d"].map((option) => (
      <Radio key={option} value={option}>
        {option}. {question[`option${option.toUpperCase()}` as keyof DetailedQuestion]}{" "}
        {renderImage(question[`${option}Image` as keyof DetailedQuestion] as string, "Option Image")}{" "}
        {isScoreChecked && (
          <>
            {questionData?.[index]?.correctAnswer === option ? (
              <CheckCircleFilled style={{ color: "green" }} />
            ) : (
              questionData?.[index]?.answer === option && <CloseCircleFilled style={{ color: "red" }} />
            )}
          </>
        )}
      </Radio>
    ));

  const items: TimelineProps["items"] = MCQs?.map((question, index) => ({
    children: (
      <div key={index}>
        <Skeleton loading={!started} active={isLoading} paragraph={{ rows: 4 }}>
          <Form.Item name={[UpdateScoreKey.questionData, index, QuizDataTypeKeys.questionId]} initialValue={question.id} noStyle>
            <Typography.Title level={5}>{`${index + 1}. ${question.question}`}</Typography.Title>
            {renderImage(question.qImage, "Question Image")}
          </Form.Item>
          <Form.Item
            name={[UpdateScoreKey.questionData, index, QuizDataTypeKeys.correctAnswer]}
            initialValue={question.correctAnswer}
            noStyle
            hidden
          />
          <Form.Item name={[UpdateScoreKey.questionData, index, QuizDataTypeKeys.answer]}>
            <Radio.Group disabled={isScoreChecked}>
              <Space direction="vertical">{renderOptions(question, index)}</Space>
            </Radio.Group>
          </Form.Item>
          {question.explanation && isScoreChecked && <Typography.Paragraph strong>Explanation: {question.explanation}</Typography.Paragraph>}
        </Skeleton>
      </div>
    ),
    color: !isScoreChecked
      ? questionData?.[index]?.answer
        ? "blue"
        : "gray"
      : questionData?.[index]?.answer === question.correctAnswer
        ? "green"
        : "red",
    pending: !questionData?.[index]?.answer,
  }));

  const renderExtra = () => (
    <Space size="small" wrap style={{ width: "100%", justifyContent: "flex-end" }}>
      {config.appMode === "LOCAL" && <Button onClick={() => dispatch(resetQuizReducer())}>Reset</Button>}
      <Button type="primary" disabled={started} onClick={() => dispatch(setStarted(true))}>
        Start Quiz
      </Button>
      <Button type="default" onClick={toogleFullScreen} icon={isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}>
        {isFullScreen ? "Exit Full" : "0 Distraction"}
      </Button>
    </Space>
  );

  const renderTimer = () => (
    <Statistic.Countdown
      title={<FieldTimeOutlined style={{ fontSize: 20, color: "black" }} />}
      value={started && !isScoreChecked ? startedTime + time : 0}
      format={timeFormat}
      valueStyle={{ fontSize: 16 }}
      onFinish={() => dispatch(setTimeCompleted(true))}
      valueRender={(value) => (timeCompleted ? "Time Completed" : value)}
    />
  );

  return (
    <Col xxl={18} xl={20} lg={20} md={24} sm={24} xs={24} style={{ margin: isFullScreen ? 0 : "auto" }}>
      <Card
        loading={isLoading}
        title={
          <Row align={"middle"}>
            <Col lg={15}>
              <Space size="large" wrap>
                <Typography.Title level={4} style={{ whiteSpace: "break-spaces" }}>
                  {title}
                </Typography.Title>
                {isScoreChecked && <Statistic title="Score" value={score} suffix={`/ ${MCQs?.length}`} />}
                {isFullScreen ? <FloatButton style={{ width: 80, height: 80 }} description={renderTimer()} /> : renderTimer()}
              </Space>
            </Col>
            <Col lg={9}>{renderExtra()}</Col>
          </Row>
        }
        actions={[
          <Button type="default" disabled={!started || isScoreChecked} onClick={checkScore}>
            Submit and Check
          </Button>,
        ]}
        styles={{ header: { flexWrap: "wrap" }, actions: { width: "fit-content" } }}
        style={{
          padding: isFullScreen || md ? 0 : 8,
          paddingInline: isFullScreen && !md && !sm && !xs ? 100 : 8,
          position: isFullScreen ? "fixed" : "static",
          width: isFullScreen ? "100vw" : "auto",
          height: isFullScreen ? "100vh" : "auto",
          zIndex: isFullScreen ? 1000 : "auto",
          inset: isFullScreen ? 0 : "auto",
          overflow: isFullScreen ? "auto" : "initial",
        }}
      >
        <Timeline items={items} />
      </Card>
    </Col>
  );
};
