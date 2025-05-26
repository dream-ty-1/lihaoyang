import React, { useState } from 'react';
import { Modal, Upload, message, Progress, Space, Typography } from 'antd';
import { InboxOutlined, FileOutlined, CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import SuccessMessage from '../SuccessMessage/index';

const { Dragger } = Upload;
const { Text } = Typography;

interface UploadModalProps {
  visible: boolean;
  onClose: () => void;
}

interface FileStatus {
  name: string;
  progress: number;
  status: 'uploading' | 'done' | 'error';
}

const UploadModal: React.FC<UploadModalProps> = ({ visible, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentFile, setCurrentFile] = useState<FileStatus | null>(null);
  const [uploadHistory, setUploadHistory] = useState<FileStatus[]>([]);

  // 文件类型和大小验证
  const isValidFile = (file: File) => {
    // 允许的文件类型
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/plain'
    ];

    // 检查文件类型
    if (!allowedTypes.includes(file.type)) {
      message.error('只支持 Office 文档、PDF 和文本文件');
      return false;
    }

    // 检查文件大小（最大 50MB）
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      message.error('文件大小不能超过 50MB');
      return false;
    }

    return true;
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    showUploadList: false,
    customRequest({ file, onSuccess, onProgress }: any) {
      const fileObj = file as File;
      
      // 创建新的文件状态
      setCurrentFile({
        name: fileObj.name,
        progress: 0,
        status: 'uploading'
      });

      // 模拟分块上传过程
      let progress = 0;
      const interval = setInterval(() => {
        try {
          progress += Math.random() * 10;
          if (progress > 100) {
            progress = 100;
            clearInterval(interval);
            
            // 模拟上传完成
            setTimeout(() => {
              onSuccess("ok", null);
              setCurrentFile(prev => prev ? { ...prev, status: 'done', progress: 100 } : null);
              setUploadHistory(prev => [...prev, { name: fileObj.name, progress: 100, status: 'done' }]);
              setShowSuccess(true);
              
              // 5秒后关闭弹窗
              setTimeout(() => {
                onClose();
                setShowSuccess(false);
                setCurrentFile(null);
              }, 5000);
            }, 500);
          } else {
            onProgress({ percent: progress });
            setCurrentFile(prev => prev ? { ...prev, progress } : null);
          }
        } catch (error) {
          clearInterval(interval);
          setCurrentFile(prev => prev ? { ...prev, status: 'error', progress: 0 } : null);
          message.error('上传失败，请重试');
        }
      }, 200);
    },
    beforeUpload(file: File) {
      // 检查文件名中是否包含"内部"字样
      if (!file.name.includes('内部')) {
        message.error('请上传内部文件');
        return false;
      }

      // 验证文件类型和大小
      return isValidFile(file);
    },
  };

  // 渲染上传历史记录
  const renderUploadHistory = () => {
    if (uploadHistory.length === 0) return null;

    return (
      <div style={{ marginTop: '20px', padding: '10px', background: 'rgba(0,0,0,0.02)', borderRadius: '8px' }}>
        <Text strong style={{ display: 'block', marginBottom: '10px' }}>上传历史</Text>
        {uploadHistory.map((file, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            <Space>
              <FileOutlined />
              <Text>{file.name}</Text>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
            </Space>
          </div>
        ))}
      </div>
    );
  };

  // 渲染当前上传进度
  const renderCurrentProgress = () => {
    if (!currentFile) return null;

    return (
      <div style={{ marginTop: '20px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <LoadingOutlined spin={currentFile.status === 'uploading'} />
            <Text>{currentFile.name}</Text>
          </Space>
          <Progress 
            percent={Math.round(currentFile.progress)} 
            status={currentFile.status === 'error' ? 'exception' : undefined}
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
          />
        </Space>
      </div>
    );
  };

  return (
    <Modal
      title="智能文件助手"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={500}
      maskClosable={false}
      closable={!currentFile || currentFile.status === 'done'}
      className="glass-effect"
    >
      {!showSuccess ? (
        <>
          <div style={{ marginBottom: 20 }}>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>
              我是您的智能秘书，可自动整理文件！
            </Text>
            <Text type="secondary" style={{ display: 'block', textAlign: 'center' }}>
              请上传工作文档以提高服务精度 (支持 Office、PDF 等格式，最大 50MB)
            </Text>
          </div>
          <Dragger {...uploadProps} style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px dashed var(--border-color)'
          }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ color: 'var(--primary-color)' }} />
            </p>
            <p className="ant-upload-text" style={{ color: 'var(--text-color)' }}>
              点击或拖拽文件到此区域上传
            </p>
            <p className="ant-upload-hint" style={{ color: 'var(--text-color-secondary)' }}>
              支持单个或批量上传，严格遵守数据安全规范
            </p>
          </Dragger>
          {renderCurrentProgress()}
          {renderUploadHistory()}
        </>
      ) : (
        <SuccessMessage />
      )}
    </Modal>
  );
};

export default UploadModal; 