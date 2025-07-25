export default function Commands() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kiro 命令</h1>
        <p className="mt-4 text-lg text-gray-600">
          Kiro支持的命令和自动化功能
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">创建指导文档</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">命令用法</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code className="text-sm text-gray-700">
                Create steering documents for [项目描述]
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">示例</h3>
            <div className="space-y-2">
              <div className="bg-blue-50 p-3 rounded">
                <code className="text-sm text-blue-800">
                  Create steering documents for a React TypeScript e-commerce application
                </code>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <code className="text-sm text-green-800">
                  Create steering documents for a Python Django REST API with PostgreSQL
                </code>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <code className="text-sm text-purple-800">
                  Create steering documents for a Node.js microservices architecture
                </code>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">创建过程</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">1. 项目分析</h4>
                <p className="text-sm text-gray-600">
                  首先分析项目需求并确定需要哪些指导文档：
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                  <li>前端项目：包含项目标准、Git工作流、前端标准、开发环境</li>
                  <li>后端/API项目：包含项目标准、Git工作流、API设计、开发环境</li>
                  <li>全栈项目：包含所有核心文档加技术特定文档</li>
                  <li>库/包项目：包含项目标准、Git工作流、文档标准</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">2. 文档创建策略</h4>
                <p className="text-sm text-gray-600">
                  使用模板和指南创建指导文档：
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                  <li>项目标准文档 - 适应代码质量标准到项目语言/框架</li>
                  <li>Git工作流文档 - 调整分支命名和提交消息格式</li>
                  <li>前端标准文档 - 自定义特定框架（React/Vue/Angular）</li>
                  <li>API设计文档 - 适应REST/GraphQL标准到项目需求</li>
                  <li>开发环境文档 - 自定义项目的技术栈</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">3. 内容定制指南</h4>
                <p className="text-sm text-gray-600">
                  根据项目类型进行特定调整：
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                  <li>语言/框架特定适应：JavaScript/TypeScript、Python、Java、Go、Rust</li>
                  <li>项目规模适应：小项目、团队项目、企业级</li>
                  <li>领域特定考虑：电商、医疗、金融、开源</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">质量检查清单</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                <li>所有文档都有适当的包含逻辑前置部分</li>
                <li>指南是具体和可操作的，不是通用的</li>
                <li>为复杂概念提供了示例</li>
                <li>文档之间没有冲突的标准</li>
                <li>包含安全和性能考虑</li>
                <li>文档涵盖完整的开发生命周期</li>
                <li>文件引用格式正确且有效</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">其他命令</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">上下文命令</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-sm text-gray-700">#File</code>
                <p className="text-xs text-gray-600 mt-1">获取特定文件</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-sm text-gray-700">#Folder</code>
                <p className="text-xs text-gray-600 mt-1">获取特定文件夹</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-sm text-gray-700">#Problems</code>
                <p className="text-xs text-gray-600 mt-1">查看当前文件的问题</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-sm text-gray-700">#Terminal</code>
                <p className="text-xs text-gray-600 mt-1">查看终端输出</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-sm text-gray-700">#Git Diff</code>
                <p className="text-xs text-gray-600 mt-1">查看Git差异</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-sm text-gray-700">#Codebase</code>
                <p className="text-xs text-gray-600 mt-1">扫描整个代码库</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 