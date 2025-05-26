import React, { useEffect, useState } from 'react';
import { Layout, Menu, Typography, Row, Col, Card, Button, Divider, Space } from 'antd';
import { 
  HomeOutlined, 
  TeamOutlined, 
  GlobalOutlined, 
  SafetyCertificateOutlined,
  CloudServerOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  AppstoreOutlined,
  FileProtectOutlined,
  CustomerServiceOutlined,
  SolutionOutlined,
  BankOutlined,
  AuditOutlined
} from '@ant-design/icons';
import UploadModal from '../UploadModal/index';
import type { MenuProps } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const menuItems: MenuProps['items'] = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: '首页'
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: '产品服务',
    children: [
      {
        key: '2-1',
        icon: <CloudServerOutlined />,
        label: '智能数据管理',
      },
      {
        key: '2-2',
        icon: <FileProtectOutlined />,
        label: '数据安全服务',
      },
      {
        key: '2-3',
        icon: <AuditOutlined />,
        label: '合规咨询',
      }
    ]
  },
  {
    key: '3',
    icon: <SafetyCertificateOutlined />,
    label: '安全认证',
    children: [
      {
        key: '3-1',
        icon: <BankOutlined />,
        label: 'ISO27001认证',
      },
      {
        key: '3-2',
        icon: <SafetyCertificateOutlined />,
        label: '等保三级',
      }
    ]
  },
  {
    key: '4',
    icon: <TeamOutlined />,
    label: '关于我们',
    children: [
      {
        key: '4-1',
        icon: <SolutionOutlined />,
        label: '公司简介',
      },
      {
        key: '4-2',
        icon: <GlobalOutlined />,
        label: '发展历程',
      }
    ]
  },
  {
    key: '5',
    icon: <CustomerServiceOutlined />,
    label: '联系我们',
    children: [
      {
        key: '5-1',
        icon: <PhoneOutlined />,
        label: '服务热线',
      },
      {
        key: '5-2',
        icon: <MailOutlined />,
        label: '商务合作',
      },
      {
        key: '5-3',
        icon: <EnvironmentOutlined />,
        label: '公司地址',
      }
    ]
  }
];

const LandingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 页面加载3秒后显示弹窗
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    // 监听滚动事件
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout style={{ background: 'var(--background-dark)' }}>
      <Header className={`site-header glass-effect-dark ${isScrolled ? 'scrolled' : ''}`}>
        <div style={{ float: 'left', marginRight: '50px' }}>
          <img 
            src="/logo.svg" 
            alt="智能数据科技" 
            style={{ height: '40px', margin: '12px 0' }}
          />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          style={{ 
            lineHeight: '64px',
            background: 'transparent',
            borderBottom: 'none',
            color: 'var(--text-color)'
          }}
        />
      </Header>

      <Content className="site-content">
        {/* Hero Section */}
        <div className="hero-background" style={{ minHeight: '100vh' }}>
          <Row justify="center" align="middle" style={{ minHeight: '100vh', position: 'relative' }}>
            <Col xs={24} md={16} className="hero-content" style={{ textAlign: 'center' }}>
              <div className="fade-in" style={{ marginBottom: '48px' }}>
                <Title level={1} style={{ color: '#fff', fontSize: '48px', marginBottom: '24px' }}>
                  智能数据管理解决方案
                </Title>
                <Paragraph style={{ 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  fontSize: '20px',
                  marginBottom: '32px'
                }}>
                  为企业提供安全、高效、智能的数据管理服务
                  <br />
                  ISO27001信息安全认证 | 国家网络安全等级保护三级
                </Paragraph>
                <Space size="large">
                  <Button type="primary" size="large" ghost>
                    了解更多
                  </Button>
                  <Button type="primary" size="large">
                    立即体验
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>
        </div>

        {/* Features Section */}
        <div style={{ padding: '80px 50px', background: 'var(--background-dark)' }}>
          <Row gutter={[24, 24]} justify="center">
            <Col span={24} className="fade-in">
              <Title level={2} style={{ textAlign: 'center', color: '#fff', marginBottom: '48px' }}>
                核心优势
              </Title>
            </Col>
            <Col xs={24} sm={8} className="fade-in">
              <Card 
                className="feature-card glass-effect"
                bordered={false}
                title={
                  <Space>
                    <SafetyCertificateOutlined style={{ color: 'var(--primary-color)', fontSize: '24px' }} />
                    <span style={{ color: '#fff' }}>安全可靠</span>
                  </Space>
                }
              >
                <ul style={{ color: 'var(--text-color)', paddingLeft: '20px' }}>
                  <li>通过ISO27001认证</li>
                  <li>数据多重加密存储</li>
                  <li>全程SSL安全传输</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} sm={8} className="fade-in" style={{ animationDelay: '0.2s' }}>
              <Card 
                className="feature-card glass-effect"
                bordered={false}
                title={
                  <Space>
                    <CloudServerOutlined style={{ color: 'var(--primary-color)', fontSize: '24px' }} />
                    <span style={{ color: '#fff' }}>智能高效</span>
                  </Space>
                }
              >
                <ul style={{ color: 'var(--text-color)', paddingLeft: '20px' }}>
                  <li>AI智能分类管理</li>
                  <li>毫秒级响应速度</li>
                  <li>自动化工作流程</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} sm={8} className="fade-in" style={{ animationDelay: '0.4s' }}>
              <Card 
                className="feature-card glass-effect"
                bordered={false}
                title={
                  <Space>
                    <GlobalOutlined style={{ color: 'var(--primary-color)', fontSize: '24px' }} />
                    <span style={{ color: '#fff' }}>专业服务</span>
                  </Space>
                }
              >
                <ul style={{ color: 'var(--text-color)', paddingLeft: '20px' }}>
                  <li>7*24小时技术支持</li>
                  <li>专属解决方案</li>
                  <li>定期系统巡检</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Partners Section */}
        <div style={{ padding: '80px 50px', background: 'rgba(0,0,0,0.3)' }} className="glass-effect-dark">
          <Row gutter={[24, 48]} justify="center">
            <Col span={24} className="fade-in">
              <Title level={2} style={{ textAlign: 'center', color: '#fff' }}>
                合作伙伴
              </Title>
              <Paragraph style={{ textAlign: 'center', color: 'var(--text-color-secondary)' }}>
                已服务超过1000家企业客户，持续为企业提供专业的数据管理服务
              </Paragraph>
            </Col>
            {['银行', '证券', '保险', '制造业', '医疗', '教育'].map((industry, index) => (
              <Col key={index} xs={12} sm={8} md={4} className="fade-in" style={{ 
                animationDelay: `${index * 0.1}s` 
              }}>
                <Card 
                  className="glass-effect"
                  bordered={false}
                  style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)' }}
                >
                  <Text style={{ color: '#fff' }}>{industry}行业</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Contact Section */}
        <div style={{ padding: '80px 50px', background: 'var(--background-dark)' }}>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={8} className="fade-in">
              <Card className="glass-effect" bordered={false}>
                <Space direction="vertical" size="large">
                  <Space>
                    <PhoneOutlined style={{ color: 'var(--primary-color)', fontSize: '24px' }} />
                    <Text strong style={{ color: '#fff' }}>联系电话</Text>
                  </Space>
                  <Text style={{ color: 'var(--text-color)' }}>400-888-8888</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8} className="fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="glass-effect" bordered={false}>
                <Space direction="vertical" size="large">
                  <Space>
                    <MailOutlined style={{ color: 'var(--primary-color)', fontSize: '24px' }} />
                    <Text strong style={{ color: '#fff' }}>邮箱地址</Text>
                  </Space>
                  <Text style={{ color: 'var(--text-color)' }}>contact@smartdata.com</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8} className="fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="glass-effect" bordered={false}>
                <Space direction="vertical" size="large">
                  <Space>
                    <EnvironmentOutlined style={{ color: 'var(--primary-color)', fontSize: '24px' }} />
                    <Text strong style={{ color: '#fff' }}>公司地址</Text>
                  </Space>
                  <Text style={{ color: 'var(--text-color)' }}>北京市朝阳区科技园区88号智能大厦</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer style={{ 
        background: 'rgba(0,0,0,0.5)', 
        padding: '48px 24px 24px',
        color: 'var(--text-color)'
      }} className="glass-effect-dark">
        <Row justify="center" gutter={[48, 24]}>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }}>关于我们</Title>
            <Paragraph style={{ color: 'var(--text-color)' }}>
              智能数据科技致力于为企业提供专业的数据管理解决方案，
              拥有国家高新技术企业认证，为企业数字化转型提供强有力的支持。
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }}>资质认证</Title>
            <Space direction="vertical">
              <Text style={{ color: 'var(--text-color)' }}>ISO27001信息安全认证</Text>
              <Text style={{ color: 'var(--text-color)' }}>国家高新技术企业</Text>
              <Text style={{ color: 'var(--text-color)' }}>软件企业认定</Text>
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }}>联系我们</Title>
            <Space direction="vertical">
              <Text style={{ color: 'var(--text-color)' }}>电话：400-888-8888</Text>
              <Text style={{ color: 'var(--text-color)' }}>邮箱：contact@smartdata.com</Text>
              <Text style={{ color: 'var(--text-color)' }}>地址：北京市朝阳区科技园区88号智能大厦</Text>
            </Space>
          </Col>
        </Row>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <Paragraph style={{ 
          marginBottom: 0, 
          textAlign: 'center',
          color: 'var(--text-color-secondary)'
        }}>
          智能数据科技 © 2024 | 京ICP备12345678号-1 | 京公网安备11010502030000号
        </Paragraph>
      </Footer>

      <UploadModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </Layout>
  );
};

export default LandingPage; 