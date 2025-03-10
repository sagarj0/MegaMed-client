import React, { useEffect } from "react";
import { Timeline, Radio, Typography, Space, Form, TimelineProps, Button, Statistic, Col, Card, Skeleton, FloatButton, Row } from "antd";
import { CheckCircleFilled, CloseCircleFilled, FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import useFullScreen from "@/helper/hooks/useFullScreen";
import { QuizDataTypeKeys, UpdateScoreKey, UpdateScoreProps } from "@/module/student/ui/quizes/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setTimeCompleted, setStarted, resetQuizReducer, setScoreValue } from "@/store/reducers/quiz-helper/reducer";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { config } from "@/util/config";
import useResponsiveDevice from "@/helper/hooks/use-responsive";
import useBeforeUnload from "@/helper/hooks/useBeforeUnload";
import { renderImage } from "@/component/render-image";
import { properCase } from "@/helper/proper-case";

interface InteractiveMCQProps {
  MCQs: DetailedQuestion[];
  title: string;
  time: number;
  isLoading?: boolean;
}

export const InteractiveMCQ: React.FC<InteractiveMCQProps> = ({ MCQs, title, time, isLoading }) => {
  const dispatch = useAppDispatch();
  const { md, sm, xs } = useResponsiveDevice();
  const { timeCompleted, started, startedTime, isScoreChecked, score } = useAppSelector((state) => state.QuizHelper);

  useBeforeUnload({ isActive: started && !isScoreChecked });
  useEffect(() => {
    dispatch(resetQuizReducer());
  }, []);

  const form = Form.useFormInstance<UpdateScoreProps>();
  const questionData = Form.useWatch(UpdateScoreKey.answers, form);
  const { toogleFullScreen, isFullScreen } = useFullScreen();

  const checkScore = () => {
    const firstUnansweredIndex = questionData?.findIndex((question) => !question.choosedAnswer);
    if (firstUnansweredIndex !== -1) {
      const timelineItem = document.querySelectorAll(".ant-timeline-item")[firstUnansweredIndex] as HTMLElement;
      if (timelineItem) timelineItem.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const obtainedScore = questionData?.reduce((acc, question) => (question.choosedAnswer === question.correctAnswer ? acc + 1 : acc), 0);
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
              questionData?.[index]?.choosedAnswer === option && <CloseCircleFilled style={{ color: "red" }} />
            )}
          </>
        )}
      </Radio>
    ));

  const items: TimelineProps["items"] = MCQs?.map((question, index) => ({
    children: (
      <div key={index}>
        <Skeleton loading={!started} active={isLoading} paragraph={{ rows: 4 }}>
          <Form.Item name={[UpdateScoreKey.answers, index, QuizDataTypeKeys.questionId]} initialValue={question.id} noStyle>
            <Typography.Title level={5}>{`${index + 1}. ${question.question}`}</Typography.Title>
            {renderImage(question.qImage, "Question Image")}
          </Form.Item>
          <Form.Item name={[UpdateScoreKey.answers, index, QuizDataTypeKeys.correctAnswer]} initialValue={question.correctAnswer} noStyle hidden />
          <Form.Item name={[UpdateScoreKey.answers, index, QuizDataTypeKeys.choosedAnswer]}>
            <Radio.Group disabled={isScoreChecked}>
              <Space direction="vertical">{renderOptions(question, index)}</Space>
            </Radio.Group>
          </Form.Item>
          {question.explanation && isScoreChecked && <Typography.Paragraph strong>Explanation: {question.explanation}</Typography.Paragraph>}
        </Skeleton>
      </div>
    ),
    color: !isScoreChecked
      ? questionData?.[index]?.choosedAnswer
        ? "blue"
        : "gray"
      : questionData?.[index]?.choosedAnswer === question.correctAnswer
      ? "green"
      : "red",
    pending: !questionData?.[index]?.choosedAnswer,
    style: { textAlign: "left" },
  }));

  const renderExtra = () => (
    <Space wrap style={{ width: "100%", justifyContent: "flex-end" }}>
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
      value={started && !isScoreChecked ? startedTime + time : 0}
      valueStyle={{ fontSize: 16 }}
      onFinish={() => dispatch(setTimeCompleted(true))}
    />
  );

  return (
    <Col span={24} style={{ margin: isFullScreen ? 0 : "auto" }}>
      <Card
        loading={isLoading}
        title={
          <Row align={"middle"} justify={"space-between"} wrap={false}>
            <Col>
              <Space wrap>
                <Typography.Title level={5} style={{ whiteSpace: "break-spaces" }}>
                  {properCase(title)}
                </Typography.Title>
                {isScoreChecked && <Statistic title="Score" value={score} suffix={`/ ${MCQs?.length}`} />}
                {isFullScreen ? <FloatButton style={{ width: 80, height: 80 }} description={renderTimer()} /> : renderTimer()}
              </Space>
            </Col>
            <Col>{renderExtra()}</Col>
          </Row>
        }
        actions={[
          <Button type="default" disabled={!started || isScoreChecked} onClick={checkScore}>
            Submit and Check
          </Button>,
          timeCompleted && (
            <Typography.Title level={5} type="danger">
              TIME'S UP
            </Typography.Title>
          ),
        ]}
        styles={{ header: { flexWrap: "wrap" } }}
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
