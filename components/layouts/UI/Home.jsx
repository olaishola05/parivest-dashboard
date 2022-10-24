import React from 'react'
import Dashboard from './Dashboard'
import { Typography, Card, Col, Row } from 'antd';

const { Title } = Typography;

function Home() {
  return (
    <div>
      <Dashboard>
        <Title>Welcome to Admin Dashboard</Title>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </Dashboard>
    </div>
  )
}

export default Home