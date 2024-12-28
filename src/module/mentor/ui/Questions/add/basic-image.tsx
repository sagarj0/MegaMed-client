import { Form, message, Space, Typography, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AddQuestionsProps } from "./type";

interface Props {
  forName: string;
  formKey: keyof AddQuestionsProps;
}

export const UploadImage: React.FC<Props> = (props) => {
  const form = Form.useFormInstance<AddQuestionsProps>();
  const { forName, formKey } = props;

  const file = Form.useWatch(formKey, form);

  const beforeUpload = (file: File) => {
    //accept only image/* file with size less than 5MB

    const isJpgOrPng = file.type.startsWith("image/");
    if (!isJpgOrPng) {
      message.error("Only image files are allowed!");
      return false;
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error("Image must be smaller than 5MB!");
      return false;
    }
    form.setFieldValue(formKey, file);
    return false;
  };

  const onRemove = () => form.resetFields([formKey]);

  return (
    <Upload
      accept="image/*"
      multiple={false}
      maxCount={1}
      beforeUpload={beforeUpload}
      onRemove={onRemove}
      listType="picture-card"
      children={
        !file ? (
          <Space direction="vertical">
            <UploadOutlined />
            <Typography.Text type="secondary" style={{ fontSize: 10 }}>
              {`Upload Image for ${forName} below 5MB `}
            </Typography.Text>
          </Space>
        ) : null
      }
      style={{ height: "fit-content" }}
    />
  );
};
