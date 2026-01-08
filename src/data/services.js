import { StrategyIcon, InfrastructureIcon, DevelopmentIcon, AnalyticsIcon } from '../components/Icons';

export const services = [
  { 
    num: '01', 
    title: 'Strategy', 
    desc: 'Comprehensive research, discovery, and strategic planning for sustainable business transformation. We help you navigate complexity with clarity.', 
    Icon: StrategyIcon,
    features: [
      'Market Research & Analysis',
      'Competitive Positioning',
      'Growth Strategy',
      'Digital Transformation Roadmaps',
    ],
  },
  { 
    num: '02', 
    title: 'Infrastructure', 
    desc: 'Robust database architecture, systems design, and technical infrastructure solutions built for scale, security, and performance.', 
    Icon: InfrastructureIcon,
    features: [
      'Database Architecture',
      'Cloud Migration',
      'System Integration',
      'Security Implementation',
    ],
  },
  { 
    num: '03', 
    title: 'Development', 
    desc: 'Custom software development and web platform engineering using modern technologies and best practices.', 
    Icon: DevelopmentIcon,
    features: [
      'Web Applications',
      'API Development',
      'Platform Engineering',
      'Performance Optimization',
    ],
  },
  { 
    num: '04', 
    title: 'Analytics', 
    desc: 'Data analytics, reporting systems, and business intelligence solutions that turn raw data into actionable insights.', 
    Icon: AnalyticsIcon,
    features: [
      'Data Visualization',
      'KPI Dashboards',
      'Predictive Analytics',
      'Automated Reporting',
    ],
  },
];

export const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Understanding Your Vision',
    description: 'We begin by deeply understanding your business, challenges, and objectives through comprehensive stakeholder interviews and market analysis.',
    duration: '1-2 weeks',
    deliverables: ['Stakeholder Interviews', 'Market Analysis', 'Competitive Audit', 'Goals Definition'],
  },
  {
    num: '02',
    title: 'Strategy',
    subtitle: 'Crafting the Blueprint',
    description: 'Our team develops a comprehensive strategy tailored to your unique needs, incorporating data-driven insights and industry best practices.',
    duration: '2-3 weeks',
    deliverables: ['Strategic Roadmap', 'Technical Architecture', 'Resource Planning', 'Risk Assessment'],
  },
  {
    num: '03',
    title: 'Execute',
    subtitle: 'Bringing Ideas to Life',
    description: 'With a clear strategy in place, we execute with precision, maintaining transparent communication and agile methodologies throughout.',
    duration: '4-12 weeks',
    deliverables: ['Development Sprints', 'Quality Assurance', 'Progress Reports', 'Stakeholder Reviews'],
  },
  {
    num: '04',
    title: 'Optimize',
    subtitle: 'Continuous Improvement',
    description: 'Post-launch, we monitor performance, gather insights, and continuously optimize to ensure sustainable growth and maximum ROI.',
    duration: 'Ongoing',
    deliverables: ['Performance Analytics', 'A/B Testing', 'Iterative Updates', 'Growth Strategy'],
  },
];
