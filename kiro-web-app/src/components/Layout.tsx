import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Home, 
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
  ChevronDown,
  ChevronRight
} from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

interface NavigationGroup {
  title: string
  items: NavigationItem[]
  icon: React.ComponentType<{ className?: string }>
}

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

const navigationGroups: NavigationGroup[] = [
  {
    title: '快速开始',
    icon: Home,
    items: [
      { 
        name: '首页概览', 
        href: '/', 
        icon: Home,
        description: '了解Kiro规范驱动开发指南'
      },
      { 
        name: '导航索引', 
        href: '/navigation', 
        icon: Map,
        description: '按角色和需求查找内容'
      },
      { 
        name: '内容覆盖', 
        href: '/content-coverage', 
        icon: BarChart3,
        description: '查看完整内容覆盖情况'
      }
    ]
  },
  {
    title: '核心指南',
    icon: BookOpen,
    items: [
      { 
        name: '方法论', 
        href: '/methodology', 
        icon: BookOpen,
        description: '规范驱动开发的核心概念'
      },
      { 
        name: '流程指南', 
        href: '/process', 
        icon: GitBranch,
        description: '三阶段开发流程详解'
      },
      { 
        name: 'AI推理', 
        href: '/ai-reasoning', 
        icon: Brain,
        description: 'AI决策框架和思维过程'
      },
      { 
        name: '提示策略', 
        href: '/prompting', 
        icon: MessageSquare,
        description: '与AI协作的沟通技巧'
      },
      { 
        name: '执行指南', 
        href: '/execution', 
        icon: Play,
        description: '从规范到实现的实践指导'
      }
    ]
  },
  {
    title: '实践工具',
    icon: ClipboardList,
    items: [
      { 
        name: '模板库', 
        href: '/templates', 
        icon: ClipboardList,
        description: '即用型模板和检查清单'
      },
      { 
        name: '示例案例', 
        href: '/examples', 
        icon: FileText,
        description: '真实案例和完整规范示例'
      },
      { 
        name: '资源库', 
        href: '/resources', 
        icon: Library,
        description: '标准、工具和学习材料'
      }
    ]
  },
  {
    title: '系统文档',
    icon: Settings,
    items: [
      { 
        name: 'Kiro系统', 
        href: '/system-docs', 
        icon: Settings,
        description: 'AI助手的系统提示和指导'
      },
      { 
        name: '项目指导', 
        href: '/steering-docs', 
        icon: FolderOpen,
        description: '项目开发的标准和规范'
      },
      { 
        name: '命令工具', 
        href: '/commands', 
        icon: Command,
        description: 'Kiro命令和自动化功能'
      }
    ]
  },
  {
    title: '质量保证',
    icon: CheckCircle,
    items: [
      { 
        name: '验证报告', 
        href: '/validation-report', 
        icon: CheckCircle,
        description: '规范流程指南的验证结果'
      }
    ]
  }
]

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['快速开始']))
  const location = useLocation()

  const toggleGroup = (groupTitle: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(groupTitle)) {
      newExpanded.delete(groupTitle)
    } else {
      newExpanded.add(groupTitle)
    }
    setExpandedGroups(newExpanded)
  }

  const isGroupActive = (group: NavigationGroup) => {
    return group.items.some(item => location.pathname === item.href)
  }

  const isItemActive = (href: string) => {
    return location.pathname === href
  }

  const NavigationGroupComponent = ({ group }: { group: NavigationGroup }) => {
    const isExpanded = expandedGroups.has(group.title)
    const isActive = isGroupActive(group)

    return (
      <div className="space-y-1">
        <button
          onClick={() => toggleGroup(group.title)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive 
              ? 'bg-primary-50 text-primary-700' 
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center">
            <group.icon className="mr-2 h-4 w-4" />
            {group.title}
          </div>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        
        {isExpanded && (
          <div className="ml-6 space-y-1">
            {group.items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  isItemActive(item.href)
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    {item.description && (
                      <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-80 flex-col bg-white min-h-0">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 flex-shrink-0">
            <h1 className="text-lg font-semibold text-gray-900">Kiro 指南</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-4 min-h-0">
            {navigationGroups.map((group) => (
              <NavigationGroupComponent key={group.title} group={group} />
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 min-h-0">
          <div className="flex h-16 items-center px-4 border-b border-gray-200 flex-shrink-0">
            <h1 className="text-lg font-semibold text-gray-900">Kiro 规范驱动开发指南</h1>
          </div>
          <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-4 min-h-0">
            {navigationGroups.map((group) => (
              <NavigationGroupComponent key={group.title} group={group} />
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80">
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-lg font-semibold text-gray-900">Kiro 指南</h1>
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 