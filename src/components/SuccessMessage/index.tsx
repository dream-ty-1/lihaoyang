import React from 'react';
import { Result, Typography, Space, Card } from 'antd';
import { CheckCircleFilled, ClockCircleOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const SuccessMessage: React.FC = () => {
  return (
    <div className="success-message glass-effect" style={{ 
      padding: '20px', 
      textAlign: 'center',
      animation: 'fadeInScale 0.5s ease-out'
    }}>
      <Result
        icon={<CheckCircleFilled style={{ 
          color: '#52c41a', 
          fontSize: '96px',
          filter: 'drop-shadow(0 0 20px rgba(82, 196, 26, 0.4))',
          animation: 'pulse 2s infinite'
        }} />}
        title={
          <Text style={{ 
            color: '#fff', 
            fontSize: '32px', 
            fontWeight: 600,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            background: 'linear-gradient(45deg, #52c41a, #87d068)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '0 20px'
          }}>
            文件上传成功
          </Text>
        }
        style={{
          background: 'transparent',
          padding: '32px 0'
        }}
      />
      
      <Space direction="vertical" size={24} style={{ width: '100%' }}>
        <Card className="glass-effect success-card-progress" style={{ 
          background: 'rgba(82, 196, 26, 0.15)',
          borderColor: '#52c41a',
          boxShadow: '0 4px 12px rgba(82, 196, 26, 0.2)',
          transform: 'translateY(0)',
          transition: 'all 0.3s ease'
        }}>
          <Space align="start">
            <ClockCircleOutlined style={{ 
              color: '#52c41a', 
              fontSize: '28px',
              marginTop: '3px',
              animation: 'spin 10s linear infinite'
            }} />
            <div>
              <Text strong style={{ 
                color: '#fff', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '18px',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                处理进度
              </Text>
              <Paragraph style={{ 
                color: 'var(--text-color)', 
                margin: 0,
                fontSize: '14px'
              }}>
                文件已进入处理队列，预计需要 1-3 分钟完成处理
              </Paragraph>
            </div>
          </Space>
        </Card>

        <Card className="glass-effect success-card-security" style={{ 
          background: 'rgba(24, 144, 255, 0.15)',
          borderColor: 'var(--primary-color)',
          boxShadow: '0 4px 12px rgba(24, 144, 255, 0.2)',
          transform: 'translateY(0)',
          transition: 'all 0.3s ease'
        }}>
          <Space align="start">
            <SafetyCertificateOutlined style={{ 
              color: 'var(--primary-color)', 
              fontSize: '28px',
              marginTop: '3px',
              filter: 'drop-shadow(0 0 8px rgba(24, 144, 255, 0.3))'
            }} />
            <div>
              <Text strong style={{ 
                color: '#fff', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '18px',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                安全保障
              </Text>
              <Paragraph style={{ 
                color: 'var(--text-color)', 
                margin: 0,
                fontSize: '14px'
              }}>
                文件已加密存储，全程SSL安全传输，符合等保三级要求
              </Paragraph>
            </div>
          </Space>
        </Card>

        <Paragraph style={{ 
          color: 'var(--text-color)',
          fontSize: '14px',
          marginBottom: 0,
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          处理完成后，系统将通过消息中心通知您
        </Paragraph>
      </Space>

      <style>
        {`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              filter: drop-shadow(0 0 20px rgba(82, 196, 26, 0.4));
            }
            50% {
              transform: scale(1.1);
              filter: drop-shadow(0 0 30px rgba(82, 196, 26, 0.6));
            }
            100% {
              transform: scale(1);
              filter: drop-shadow(0 0 20px rgba(82, 196, 26, 0.4));
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .success-card-progress:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px rgba(82, 196, 26, 0.3) !important;
          }

          .success-card-security:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px rgba(24, 144, 255, 0.3) !important;
          }
        `}
      </style>
    </div>
  );
};

export default SuccessMessage; 