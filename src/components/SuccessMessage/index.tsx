import React from 'react';
import { Result, Typography, Space, Card } from 'antd';
import { CheckCircleFilled, ClockCircleOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

// 定义主题色
const THEME = {
  primary: '#9254de',  // 紫色
  success: '#9254de',  // 紫色
  background: '#141414', // 深色背景
  border: '#303030',    // 边框颜色
  text: '#fff',         // 文字颜色
  textSecondary: 'rgba(255, 255, 255, 0.65)' // 次要文字颜色
};

const SuccessMessage: React.FC = () => {
  return (
    <div className="success-message" style={{ 
      padding: '20px', 
      textAlign: 'center',
      animation: 'fadeInScale 0.5s ease-out',
      background: THEME.background,
      border: `1px solid ${THEME.border}`,
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
    }}>
      <Result
        icon={<CheckCircleFilled style={{ 
          color: THEME.success, 
          fontSize: '96px',
          filter: `drop-shadow(0 0 20px ${THEME.success}80)`,
          animation: 'pulse 2s infinite'
        }} />}
        title={
          <Text style={{ 
            fontSize: '32px', 
            fontWeight: 600,
            color: THEME.success,
            textShadow: `0 2px 8px ${THEME.success}40`,
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
        <Card className="success-card-progress" style={{ 
          background: `${THEME.success}10`,
          borderColor: THEME.border,
          boxShadow: `0 4px 12px ${THEME.success}20`,
          transform: 'translateY(0)',
          transition: 'all 0.3s ease'
        }}>
          <Space align="start">
            <ClockCircleOutlined style={{ 
              color: THEME.success, 
              fontSize: '28px',
              marginTop: '3px',
              animation: 'spin 10s linear infinite'
            }} />
            <div>
              <Text strong style={{ 
                color: THEME.text, 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '18px'
              }}>
                处理进度
              </Text>
              <Paragraph style={{ 
                color: THEME.textSecondary, 
                margin: 0,
                fontSize: '14px'
              }}>
                文件已进入处理队列，预计需要 1-3 分钟完成处理
              </Paragraph>
            </div>
          </Space>
        </Card>

        <Card className="success-card-security" style={{ 
          background: `${THEME.success}10`,
          borderColor: THEME.border,
          boxShadow: `0 4px 12px ${THEME.success}20`,
          transform: 'translateY(0)',
          transition: 'all 0.3s ease'
        }}>
          <Space align="start">
            <SafetyCertificateOutlined style={{ 
              color: THEME.success, 
              fontSize: '28px',
              marginTop: '3px',
              filter: `drop-shadow(0 0 8px ${THEME.success}40)`
            }} />
            <div>
              <Text strong style={{ 
                color: THEME.text, 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '18px'
              }}>
                安全保障
              </Text>
              <Paragraph style={{ 
                color: THEME.textSecondary, 
                margin: 0,
                fontSize: '14px'
              }}>
                文件已加密存储，全程SSL安全传输，符合等保三级要求
              </Paragraph>
            </div>
          </Space>
        </Card>

        <Paragraph style={{ 
          color: THEME.textSecondary,
          fontSize: '14px',
          marginBottom: 0
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
              filter: drop-shadow(0 0 20px ${THEME.success}40);
            }
            50% {
              transform: scale(1.1);
              filter: drop-shadow(0 0 30px ${THEME.success}60);
            }
            100% {
              transform: scale(1);
              filter: drop-shadow(0 0 20px ${THEME.success}40);
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
            box-shadow: 0 8px 20px ${THEME.success}30 !important;
          }

          .success-card-security:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px ${THEME.success}30 !important;
          }
        `}
      </style>
    </div>
  );
};

export default SuccessMessage; 