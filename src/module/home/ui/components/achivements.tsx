import React from "react";
import { Row, Col, Typography, Avatar, Button } from "antd";
import { Ribbon } from "@/component/icons/ribbon";
import { Medal } from "@/component/icons/medal";
// import { useNavigate } from "react-router-dom";

// Sample Data
const achievements: {
  name: string;
  mbbsRank?: number;
  bdsRank?: number;
  bscNursinRank?: number;
  photo: string;
}[] = [
  {
    name: "Krirtika Shriwastav",
    mbbsRank: 71,
    photo: "/kritika-shriwastav.jpg",
  },
  {
    name: "Narayan Neupane",
    mbbsRank: 81,
    photo: "/narayan-neupane.jpg",
  },
  {
    name: "Binaya Luitel",
    mbbsRank: 87,
    photo: "/binaya-luitel.jpg",
  },
  {
    name: "Sangam Pokhrel",
    mbbsRank: 21,
    photo: "/sangam-pokhrel.jpg",
  },
  {
    name: "Samiksha Adhiakri",
    mbbsRank: 69,
    bdsRank: 18,
    photo: "/samiksha-adhikari.jpg",
  },
  {
    name: "Suajata Thakur",
    mbbsRank: 15,
    bdsRank: 12,
    photo: "/sujata-thakur.jpg",
  },
  {
    name: "Suraj Paneru",
    mbbsRank: 136,
    bdsRank: 21,
    photo: "/suraj-paneru.jpg",
  },
  {
    name: "Dipika Acharya",
    mbbsRank: 172,
    bdsRank: 85,
    bscNursinRank: 4,
    photo: "/dipika-acharya.jpg",
  },
  {
    name: "Garima Sharma",
    mbbsRank: 103,
    photo: "/garima-sharma.jpg",
  },
  {
    name: "Sanu Krishna Yadav",
    mbbsRank: 147,
    photo: "/sanu-krishna-yadav.jpg",
  },
  {
    name: "Alisha Pokhrel",
    mbbsRank: 96,
    bdsRank: 70,
    bscNursinRank: 9,
    photo: "/alisha-pokhrel.jpg",
  },
].sort((a, b) => (a.mbbsRank || 0) - (b.mbbsRank || 0));

export const AchievementSection: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <Row style={{ width: "100%", paddingBlock: 24 }}>
      <Typography.Title level={2} style={{ marginBottom: 20, color: "var(--primary-color)", textAlign: "center", width: "100%" }}>
        Making Dreams Come True
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center", width: "100%", marginBottom: 30 }}>
        Our students have been making us proud with their achievements. We are proud to have been a part of their journey to
        success.
      </Typography.Paragraph>
      <Row justify="center" align={"middle"} gutter={[16, 16]} style={{ width: "100%", paddingBlock: 30 }}>
        {achievements.map((student, index) => (
          <Col key={index} span={6}>
            <Row justify={"center"}>
              <div style={{ position: "relative", width: "fit-content" }}>
                <Avatar size={120} src={student.photo} alt={student.name} />
                <Ribbon style={{ position: "absolute", bottom: -35, left: -15 }} />
              </div>
            </Row>
            <Row align={"middle"} justify={"center"}>
              <div style={{ position: "relative", width: "fit-content" }}>
                <Medal style={{ position: "absolute", top: 10, left: -35 }} />
                <Col>
                  {student.mbbsRank ? (
                    <Typography.Title level={5} style={{ marginTop: 10, marginBottom: 2, textAlign: "center" }}>
                      MBBS Rank {student.mbbsRank}
                    </Typography.Title>
                  ) : null}
                  {student.bdsRank ? (
                    <Typography.Title level={5} style={{ marginBlock: 0, textAlign: "center" }}>
                      BDS Rank {student.bdsRank}
                    </Typography.Title>
                  ) : null}
                  {student.bscNursinRank ? (
                    <Typography.Title level={5} style={{ marginBlock: 0, textAlign: "center" }}>
                      BSc Nursing Rank {student.bscNursinRank}
                    </Typography.Title>
                  ) : null}
                  <Typography.Text strong style={{ textAlign: "center", display: "inline-block", marginTop: 10, width: "100%" }}>
                    {student.name}
                  </Typography.Text>
                </Col>
              </div>
            </Row>
          </Col>
        ))}
      </Row>
      <Row justify={"center"} style={{ width: "100%" }}>
        <Button type="primary" style={{ marginTop: 30 }}>
          Explore About Our Legacy
        </Button>
      </Row>
    </Row>
  );
};
