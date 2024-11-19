import { Form, Typography } from "antd";
import React from "react";
import { config } from "../../util/config";

const { Text } = Typography;

const FormDebug: React.FC = () => {
  const form = Form.useFormInstance();

  return (
    config.appMode === "LOCAL" && (
      <Form.Item noStyle shouldUpdate>
        {() => (
          <Text>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Text>
        )}
      </Form.Item>
    )
  );
};

export default FormDebug;
