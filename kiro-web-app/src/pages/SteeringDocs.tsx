import { useState } from 'react'

const steeringDocs = [
  {
    title: '项目标准',
    content: `
# 项目标准

## 代码质量标准
- 所有代码必须通过linting检查
- 遵循项目的代码风格指南
- 包含适当的注释和文档
- 使用有意义的变量和函数名称

## 测试要求
- 所有新功能必须包含单元测试
- 测试覆盖率应达到80%以上
- 集成测试用于关键用户流程
- 端到端测试用于主要功能

## 文档标准
- README文件必须是最新的
- API文档必须完整且准确
- 代码注释必须清晰且有用
- 变更日志必须及时更新

## 安全实践
- 所有用户输入必须验证
- 敏感数据必须加密
- 遵循OWASP安全指南
- 定期进行安全审计
    `
  },
  {
    title: 'Git工作流',
    content: `
# Git工作流

## 分支策略
- main: 生产就绪代码
- develop: 开发分支
- feature/*: 功能分支
- hotfix/*: 紧急修复分支

## 提交消息格式
\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

## 类型
- feat: 新功能
- fix: 错误修复
- docs: 文档更改
- style: 代码风格更改
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具变动

## 代码审查
- 所有PR必须经过审查
- 至少需要一个批准
- 自动化测试必须通过
- 代码覆盖率不能降低
    `
  },
  {
    title: '前端标准',
    content: `
# 前端开发标准

## 技术栈
- React 18+
- TypeScript
- Tailwind CSS
- Vite构建工具

## 组件规范
- 使用函数组件和Hooks
- 组件必须是可重用的
- 使用TypeScript接口定义props
- 遵循单一职责原则

## 状态管理
- 使用React Context进行全局状态
- 本地状态使用useState
- 复杂状态使用useReducer
- 避免过度使用全局状态

## 样式指南
- 使用Tailwind CSS类
- 遵循移动优先设计
- 确保可访问性
- 保持一致的视觉层次

## 性能优化
- 使用React.memo优化渲染
- 懒加载组件和路由
- 优化图片和资源
- 监控包大小
    `
  },
  {
    title: 'API设计',
    content: `
# API设计标准

## RESTful原则
- 使用HTTP动词（GET, POST, PUT, DELETE）
- 使用名词复数形式作为资源
- 返回适当的HTTP状态码
- 使用嵌套资源表示关系

## 响应格式
\`\`\`json
{
  "success": true,
  "data": {
    // 响应数据
  },
  "message": "操作成功",
  "timestamp": "2024-01-01T00:00:00Z"
}
\`\`\`

## 错误处理
- 使用标准HTTP状态码
- 提供详细的错误信息
- 包含错误代码和消息
- 记录所有错误

## 版本控制
- 使用URL版本控制（/api/v1/）
- 向后兼容性
- 弃用通知
- 版本迁移指南

## 认证和授权
- 使用JWT令牌
- 实现角色基础访问控制
- 令牌过期和刷新
- 安全的密码存储
    `
  },
  {
    title: '开发环境',
    content: `
# 开发环境配置

## 必需工具
- Node.js 18+
- npm或yarn
- Git
- VS Code（推荐）

## 环境变量
\`\`\`bash
# 开发环境
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://localhost/dev_db
API_BASE_URL=http://localhost:8000

# 生产环境
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://prod_host/prod_db
API_BASE_URL=https://api.example.com
\`\`\`

## 本地开发
1. 克隆仓库
2. 安装依赖: npm install
3. 设置环境变量
4. 启动开发服务器: npm run dev
5. 运行测试: npm test

## 数据库设置
- 使用Docker运行本地数据库
- 运行迁移脚本
- 填充测试数据
- 配置连接池

## 调试工具
- 使用Chrome DevTools
- 启用React Developer Tools
- 使用Redux DevTools（如果适用）
- 配置日志记录
    `
  }
]

export default function SteeringDocs() {
  const [activeDoc, setActiveDoc] = useState(0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">项目指导文档</h1>
        <p className="mt-4 text-lg text-gray-600">
          项目开发的标准、规范和最佳实践
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 侧边栏导航 */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">指导文档</h2>
            <nav className="space-y-2">
              {steeringDocs.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDoc(index)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeDoc === index
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {doc.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* 主内容区域 */}
        <div className="lg:col-span-3">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {steeringDocs[activeDoc].title}
            </h2>
            <div className="prose prose-sm max-w-none">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 p-4 rounded-lg overflow-x-auto">
                {steeringDocs[activeDoc].content}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 