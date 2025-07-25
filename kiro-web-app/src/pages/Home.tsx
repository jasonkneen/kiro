import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  GitBranch, 
  Brain, 
  MessageSquare, 
  Play, 
  Library, 
  FileText, 
  ClipboardList,
  Settings,
  Command,
  FolderOpen,
  CheckCircle,
  Map,
  BarChart3,
  ArrowRight,
  Users,
  Target,
  Zap
} from 'lucide-react'

const quickStartGroups = [
  {
    title: '🚀 快速开始',
    description: '新用户从这里开始',
    items: [
      {
        name: '导航索引',
        description: '按角色和需求查找内容',
        href: '/navigation',
        icon: Map,
        color: 'bg-blue-50 text-blue-700 border-blue-200'
      },
      {
        name: '内容覆盖',
        description: '查看完整内容覆盖情况',
        href: '/content-coverage',
        icon: BarChart3,
        color: 'bg-green-50 text-green-700 border-green-200'
      }
    ]
  },
  {
    title: '📚 核心指南',
    description: '掌握规范驱动开发',
    items: [
      {
        name: '方法论',
        description: '规范驱动开发的核心概念',
        href: '/methodology',
        icon: BookOpen,
        color: 'bg-purple-50 text-purple-700 border-purple-200'
      },
      {
        name: '流程指南',
        description: '三阶段开发流程详解',
        href: '/process',
        icon: GitBranch,
        color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
      },
      {
        name: 'AI推理',
        description: 'AI决策框架和思维过程',
        href: '/ai-reasoning',
        icon: Brain,
        color: 'bg-pink-50 text-pink-700 border-pink-200'
      }
    ]
  },
  {
    title: '🛠️ 实践工具',
    description: '即用型模板和资源',
    items: [
      {
        name: '模板库',
        description: '即用型模板和检查清单',
        href: '/templates',
        icon: ClipboardList,
        color: 'bg-orange-50 text-orange-700 border-orange-200'
      },
      {
        name: '示例案例',
        description: '真实案例和完整规范示例',
        href: '/examples',
        icon: FileText,
        color: 'bg-teal-50 text-teal-700 border-teal-200'
      }
    ]
  }
]

const features = [
  {
    icon: Target,
    title: '系统化方法',
    description: '三阶段规范驱动开发流程，确保项目质量和一致性'
  },
  {
    icon: Brain,
    title: 'AI协作优化',
    description: '专门的提示策略和推理框架，提升与AI的协作效率'
  },
  {
    icon: Users,
    title: '角色导向',
    description: '针对不同角色（开发者、项目经理、技术负责人）的专门指导'
  },
  {
    icon: Zap,
    title: '即用型工具',
    description: '丰富的模板、示例和检查清单，快速上手实践'
  }
]

const benefits = [
  {
    title: '提高开发效率',
    description: '通过系统化的规范流程，减少返工和沟通成本'
  },
  {
    title: '保证代码质量',
    description: '详细的需求分析和设计文档，确保实现质量'
  },
  {
    title: '增强团队协作',
    description: '清晰的文档和标准，促进团队成员间的有效沟通'
  },
  {
    title: '降低项目风险',
    description: '全面的规划和验证，减少项目失败的可能性'
  }
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Kiro 规范驱动开发指南
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          系统化的规范驱动开发方法论，结合AI协作的最佳实践，帮助您构建高质量的软件项目
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/navigation"
            className="btn-primary inline-flex items-center"
          >
            开始探索
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/methodology"
            className="btn-secondary inline-flex items-center"
          >
            了解方法论
            <BookOpen className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">快速导航</h2>
          <p className="text-gray-600">根据您的需求选择合适的学习路径</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {quickStartGroups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{group.description}</p>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block p-3 rounded-lg border transition-all hover:shadow-md ${item.color}`}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs opacity-80 mt-0.5">{item.description}</div>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">核心特性</h2>
          <p className="text-gray-600">为什么选择Kiro规范驱动开发指南</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="card">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">使用收益</h2>
          <p className="text-gray-600">采用规范驱动开发方法带来的实际价值</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">准备开始您的规范驱动开发之旅？</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从导航索引开始，找到最适合您的学习路径，或者直接查看我们的模板库开始实践
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/navigation"
              className="btn-primary inline-flex items-center"
            >
              查看导航索引
              <Map className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/templates"
              className="btn-secondary inline-flex items-center"
            >
              浏览模板库
              <ClipboardList className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 