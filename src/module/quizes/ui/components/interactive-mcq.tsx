import { useState } from "react";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { Steps, Typography, Radio, Button, Space } from "antd";

interface InteractiveMCQProps {
  MCQs: DetailedQuestion[];
}

export const InteractiveMCQ: React.FC<InteractiveMCQProps> = ({ MCQs }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const currentQuestion = MCQs[currentStep];

  const handleOptionSelect = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentStep]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < MCQs.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <div style={{ padding: "16px" }}>
      <Typography.Title level={3}>Interactive MCQ</Typography.Title>
      <Steps direction="vertical" size="small" current={currentStep} onChange={setCurrentStep}>
        {MCQs.map((_, index) => (
          <Steps.Step
            key={index}
            title={`Question ${index + 1}`}
            description={selectedAnswers[index] ? `Answered: ${selectedAnswers[index]}` : "Not answered"}
          />
        ))}
      </Steps>

      <div style={{ marginTop: "24px" }}>
        <Typography.Title level={5}>{`Question ${currentStep + 1}: ${currentQuestion.question}`}</Typography.Title>

        <Radio.Group
          value={selectedAnswers[currentStep]}
          onChange={(e) => handleOptionSelect(e.target.value)}
          style={{ display: "block" }}
        >
          <Space direction="vertical">
            <Radio value="A">{currentQuestion.optionA}</Radio>
            <Radio value="B">{currentQuestion.optionB}</Radio>
            <Radio value="C">{currentQuestion.optionC}</Radio>
            <Radio value="D">{currentQuestion.optionD}</Radio>
          </Space>
        </Radio.Group>

        <div style={{ marginTop: "16px" }}>
          <Button type="primary" disabled={currentStep === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button type="primary" disabled={!isAnswered} onClick={handleNext} style={{ marginLeft: 8 }}>
            {currentStep === MCQs.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};
