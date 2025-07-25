export default function ContentCoverage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">内容覆盖总结</h1>
        <p className="mt-4 text-lg text-gray-600">
          Kiro项目中所有重要内容的完整覆盖情况
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ 已包含的内容</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">核心指南内容</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-medium text-green-900">方法论</h4>
                <ul className="text-sm text-green-800 mt-1">
                  <li>• 方法论概述</li>
                  <li>• 何时使用规范驱动开发</li>
                  <li>• 轻量级规范</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-medium text-green-900">流程指南</h4>
                <ul className="text-sm text-green-800 mt-1">
                  <li>• 需求阶段</li>
                  <li>• 设计阶段</li>
                  <li>• 任务阶段</li>
                  <li>• 工作流程图</li>
                  <li>• 变更管理</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-medium text-green-900">AI推理</h4>
                <ul className="text-sm text-green-800 mt-1">
                  <li>• 决策框架</li>
                  <li>• 思维过程示例</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-medium text-green-900">提示策略</h4>
                <ul className="text-sm text-green-800 mt-1">
                  <li>• 核心策略</li>
                  <li>• 最佳实践</li>
                  <li>• 提示模板</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-medium text-green-900">执行指南</h4>
                <ul className="text-sm text-green-800 mt-1">
                  <li>• 实施指南</li>
                  <li>• 质量保证</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-medium text-green-900">资源库</h4>
                <ul className="text-sm text-green-800 mt-1">
                  <li>• 标准和规范</li>
                  <li>• 工具推荐</li>
                  <li>• 工具集成指南</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">模板和示例</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-medium text-blue-900">模板</h4>
                <ul className="text-sm text-blue-800 mt-1">
                  <li>• 需求模板 (EARS格式)</li>
                  <li>• 设计模板</li>
                  <li>• 任务模板</li>
                  <li>• 快速规范模板</li>
                  <li>• 微规范模板</li>
                  <li>• 检查清单</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-medium text-blue-900">示例</h4>
                <ul className="text-sm text-blue-800 mt-1">
                  <li>• 简单功能规范</li>
                  <li>• 复杂系统规范</li>
                  <li>• 案例研究</li>
                  <li>• 故障排除示例</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">系统文档</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-medium text-purple-900">Kiro系统</h4>
                <ul className="text-sm text-purple-800 mt-1">
                  <li>• 系统能力</li>
                  <li>• 响应风格</li>
                  <li>• 工作流模式</li>
                  <li>• 质量标准</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-medium text-purple-900">项目指导</h4>
                <ul className="text-sm text-purple-800 mt-1">
                  <li>• 项目标准</li>
                  <li>• Git工作流</li>
                  <li>• 前端标准</li>
                  <li>• API设计</li>
                  <li>• 开发环境</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">命令和自动化</h3>
            <div className="bg-yellow-50 p-3 rounded">
              <h4 className="font-medium text-yellow-900">Kiro命令</h4>
              <ul className="text-sm text-yellow-800 mt-1">
                <li>• 创建指导文档命令</li>
                <li>• 上下文命令 (#File, #Folder, #Problems, #Terminal, #Git Diff, #Codebase)</li>
                <li>• MCP集成支持</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">验证和导航</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-3 rounded">
                <h4 className="font-medium text-indigo-900">验证报告</h4>
                <ul className="text-sm text-indigo-800 mt-1">
                  <li>• 完整性审查</li>
                  <li>• 要求验证矩阵</li>
                  <li>• 覆盖分析</li>
                  <li>• 质量保证</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-3 rounded">
                <h4 className="font-medium text-indigo-900">导航索引</h4>
                <ul className="text-sm text-indigo-800 mt-1">
                  <li>• 快速开始路径</li>
                  <li>• 按内容类型分类</li>
                  <li>• 按用户角色分类</li>
                  <li>• 搜索和交叉引用</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 覆盖统计</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">14</div>
            <div className="text-sm text-gray-600">主要页面</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">文档文件</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">内容覆盖</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 内容组织</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">分层信息架构</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>概念层</strong> - 高级方法论和哲学</li>
              <li><strong>流程层</strong> - 逐步工作流和程序</li>
              <li><strong>实践层</strong> - 模板、示例和实际操作指导</li>
              <li><strong>参考层</strong> - 资源、故障排除和高级主题</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">用户导向设计</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>新手路径</strong> - 从基础概念到实际应用</li>
              <li><strong>角色特定</strong> - 开发者、项目经理、技术负责人、AI从业者</li>
              <li><strong>内容类型</strong> - 方法论、指南、模板、示例、资源</li>
              <li><strong>快速参考</strong> - 检查清单、导航索引、验证报告</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 使用建议</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2">开始使用</h3>
            <ol className="text-sm text-green-800 space-y-1">
              <li>1. 从"首页"了解整体概览</li>
              <li>2. 查看"导航索引"找到适合您的路径</li>
              <li>3. 根据角色选择相应的学习路径</li>
              <li>4. 使用模板开始您的第一个规范</li>
            </ol>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">深入学习</h3>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. 阅读"方法论"理解核心概念</li>
              <li>2. 学习"流程指南"掌握三阶段方法</li>
              <li>3. 研究"AI推理"了解决策过程</li>
              <li>4. 实践"提示策略"提高AI协作效果</li>
            </ol>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-900 mb-2">实际应用</h3>
            <ol className="text-sm text-purple-800 space-y-1">
              <li>1. 使用"模板"创建规范文档</li>
              <li>2. 参考"示例"学习最佳实践</li>
              <li>3. 查看"系统文档"了解Kiro功能</li>
              <li>4. 使用"命令"自动化工作流程</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
} 