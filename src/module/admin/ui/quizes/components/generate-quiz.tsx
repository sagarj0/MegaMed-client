import { Button, Col, Form, Row } from "antd";
import { SaveQuizProps } from "../add/type";
import useGenerateQuiz from "@/module/admin/hooks/useGenerateQuiz";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hook";
import { setData } from "@/module/admin/service/quizes/generate/reducer";
import { RenderQuiz } from "../add/render-quiz";

export const GenerateQuiz: React.FC = () => {
  const dispatch = useAppDispatch();

  //to reset the data when the component is mounted
  useEffect(() => {
    dispatch(setData(null));
  }, []);

  const { type, subject, unit, chapter, pageSize } = Form.useWatch<SaveQuizProps>([]) || {};

  const isButtonDisabled =
    type === undefined ||
    (type === "subject" && subject === undefined) ||
    (type === "unit" && unit === undefined) ||
    (type === "chapter" && chapter === undefined);

  const value = type === "subject" ? subject : type === "unit" ? unit : type === "chapter" ? chapter : undefined;
  const { data, handleGenerate, isLoading } = useGenerateQuiz({ type, value, pageSize });

  return (
    <Row>
      <Col sm={{ offset: 4 }} md={{ offset: 3 }} lg={{ offset: 2 }}>
        <Row style={{ marginBlock: 32 }}>
          <Button type="primary" disabled={isButtonDisabled} onClick={handleGenerate} loading={isLoading}>
            Generate Quiz
          </Button>
        </Row>
      </Col>
      {data && <RenderQuiz data={data} />}
    </Row>
  );
};
