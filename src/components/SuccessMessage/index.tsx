import React from 'react';
import { Result, Typography, Space, Card } from 'antd';
import { CheckCircleFilled, ClockCircleOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const SuccessMessage: React.FC = () => {
  return (
    <div className="success-message glass-effect" style={{ padding: '20px', textAlign: 'center' }}>
      <Result
        icon={<CheckCircleFilled style={{ 
          color: '#52c41a', 
          fontSize: '84px',
          filter: 'drop-shadow(0 0 10px rgba(82, 196, 26, 0.3))'
        }} />}
        title={
          <Text style={{ 
            color: '#fff', 
            fontSize: '28px', 
            fontWeight: 600,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            文件上传成功
          </Text>
        }
        style={{
          background: 'transparent',
          padding: '24px 0'
        }}
      />
      
      <Space direction="vertical" size={24} style={{ width: '100%' }}>
        <Card className="glass-effect" style={{ background: 'rgba(82, 196, 26, 0.1)' }}>
          <Space align="start">
            <ClockCircleOutlined style={{ 
              color: '#52c41a', 
              fontSize: '24px',
              marginTop: '3px'
            }} />
            <div>
              <Text strong style={{ 
                color: '#fff', 
                display: 'block', 
                marginBottom: '4px',
                fontSize: '16px'
              }}>
                处理进度
              </Text>
              <Paragraph style={{ 
                color: 'var(--text-color-secondary)', 
                margin: 0,
                fontSize: '14px'
              }}>
                文件已进入处理队列，预计需要 1-3 分钟完成处理
              </Paragraph>
            </div>
          </Space>
        </Card>

        <Card className="glass-effect" style={{ background: 'rgba(24, 144, 255, 0.1)' }}>
          <Space align="start">
            <SafetyCertificateOutlined style={{ 
              color: 'var(--primary-color)', 
              fontSize: '24px',
              marginTop: '3px'
            }} />
            <div>
              <Text strong style={{ 
                color: '#fff', 
                display: 'block', 
                marginBottom: '4px',
                fontSize: '16px'
              }}>
                安全保障
              </Text>
              <Paragraph style={{ 
                color: 'var(--text-color-secondary)', 
                margin: 0,
                fontSize: '14px'
              }}>
                文件已加密存储，全程SSL安全传输，符合等保三级要求
              </Paragraph>
            </div>
          </Space>
        </Card>

        <Paragraph style={{ 
          color: 'var(--text-color-secondary)',
          fontSize: '13px',
          marginBottom: 0
        }}>
          处理完成后，系统将通过消息中心通知您
        </Paragraph>
      </Space>
    </div>
  );
};

export default SuccessMessage; 