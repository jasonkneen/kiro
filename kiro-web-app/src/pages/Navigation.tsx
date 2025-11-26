import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Navigation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">完整导航索引</h1>
        <p className="mt-4 text-lg text-gray-600">
          基于您的需求、经验水平和当前目标的多种导航方式
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 快速开始路径</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">规范驱动开发新手</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <Link to="/methodology" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  方法论概述
                </Link>
                <span className="text-gray-500"> - 理解基础</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  简单功能示例
                </Link>
                <span className="text-gray-500"> - 看实际应用</span>
              </li>
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  需求模板
                </Link>
                <span className="text-gray-500"> - 自己尝试</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  流程指南
                </Link>
                <span className="text-gray-500"> - 学习完整工作流</span>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">准备创建第一个规范</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  需求模板
                </Link>
                <span className="text-gray-500"> - 从这里开始</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  需求阶段指南
                </Link>
                <span className="text-gray-500"> - 详细说明</span>
              </li>
              <li>
                <Link to="/resources" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  EARS标准
                </Link>
                <span className="text-gray-500"> - 格式参考</span>
              </li>
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  提示策略
                </Link>
                <span className="text-gray-500"> - 获得更好的AI帮助</span>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">与AI系统协作</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  提示策略
                </Link>
                <span className="text-gray-500"> - 核心沟通技巧</span>
              </li>
              <li>
                <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  AI决策框架
                </Link>
                <span className="text-gray-500"> - 理解AI推理</span>
              </li>
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  最佳实践
                </Link>
                <span className="text-gray-500"> - 避免常见错误</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  故障排除
                </Link>
                <span className="text-gray-500"> - 修复问题</span>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">从规范实施</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  实施指南
                </Link>
                <span className="text-gray-500"> - 系统执行任务</span>
              </li>
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  质量保证
                </Link>
                <span className="text-gray-500"> - 维护代码质量</span>
              </li>
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  任务模板
                </Link>
                <span className="text-gray-500"> - 构建实施计划</span>
              </li>
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  实施故障排除
                </Link>
                <span className="text-gray-500"> - 处理实施问题</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 按内容类型</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">核心方法论</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/methodology" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  方法论概述
                </Link>
                <span className="text-gray-500"> - 哲学和方法</span>
              </li>
              <li>
                <Link to="/methodology" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  何时使用
                </Link>
                <span className="text-gray-500"> - 决策框架</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  流程指南
                </Link>
                <span className="text-gray-500"> - 三阶段工作流</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  工作流程图
                </Link>
                <span className="text-gray-500"> - 可视化流程</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">逐步指南</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  需求阶段
                </Link>
                <span className="text-gray-500"> - 将想法转化为需求</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  设计阶段
                </Link>
                <span className="text-gray-500"> - 创建技术架构</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  任务阶段
                </Link>
                <span className="text-gray-500"> - 分解为实施步骤</span>
              </li>
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  实施指南
                </Link>
                <span className="text-gray-500"> - 执行计划</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">模板和工具</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  需求模板
                </Link>
                <span className="text-gray-500"> - EARS格式结构</span>
              </li>
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  设计模板
                </Link>
                <span className="text-gray-500"> - 全面设计框架</span>
              </li>
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  任务模板
                </Link>
                <span className="text-gray-500"> - 实施计划格式</span>
              </li>
              <li>
                <Link to="/templates" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  检查清单
                </Link>
                <span className="text-gray-500"> - 质量验证检查清单</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">真实示例</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  简单功能规范
                </Link>
                <span className="text-gray-500"> - 基本功能示例</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  复杂系统规范
                </Link>
                <span className="text-gray-500"> - 大型系统示例</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  案例研究
                </Link>
                <span className="text-gray-500"> - 成功故事和经验</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  故障排除示例
                </Link>
                <span className="text-gray-500"> - 常见错误</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI协作</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  提示策略
                </Link>
                <span className="text-gray-500"> - 核心沟通方法</span>
              </li>
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  提示模板
                </Link>
                <span className="text-gray-500"> - 即用型模式</span>
              </li>
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  最佳实践
                </Link>
                <span className="text-gray-500"> - 有效技巧</span>
              </li>
              <li>
                <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  AI决策框架
                </Link>
                <span className="text-gray-500"> - AI如何做出选择</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">参考资料</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/resources" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  EARS标准
                </Link>
                <span className="text-gray-500"> - 需求语法参考</span>
              </li>
              <li>
                <Link to="/resources" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  工具和资源
                </Link>
                <span className="text-gray-500"> - 推荐工具</span>
              </li>
              <li>
                <Link to="/resources" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  工具集成
                </Link>
                <span className="text-gray-500"> - 设置和配置</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎭 按用户角色</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">开发者</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>从这里开始：</strong>
              <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                简单功能示例
              </Link>
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  实施指南
                </Link>
                <span className="text-gray-500"> - 系统执行规范</span>
              </li>
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  质量保证
                </Link>
                <span className="text-gray-500"> - 维护代码质量</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  故障排除
                </Link>
                <span className="text-gray-500"> - 修复常见问题</span>
              </li>
              <li>
                <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  AI推理
                </Link>
                <span className="text-gray-500"> - 理解AI决策</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">项目经理</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>从这里开始：</strong>
              <Link to="/methodology" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                方法论概述
              </Link>
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>
                <Link to="/methodology" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  何时使用
                </Link>
                <span className="text-gray-500"> - 决策框架</span>
              </li>
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  流程指南
                </Link>
                <span className="text-gray-500"> - 三阶段工作流</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  案例研究
                </Link>
                <span className="text-gray-500"> - 成功故事</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  复杂系统示例
                </Link>
                <span className="text-gray-500"> - 大型项目示例</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">技术负责人</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>从这里开始：</strong>
              <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                流程指南
              </Link>
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>
                <Link to="/process" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  设计阶段
                </Link>
                <span className="text-gray-500"> - 架构和技术决策</span>
              </li>
              <li>
                <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  AI决策框架
                </Link>
                <span className="text-gray-500"> - 决策洞察</span>
              </li>
              <li>
                <Link to="/examples" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  复杂系统规范
                </Link>
                <span className="text-gray-500"> - 高级示例</span>
              </li>
              <li>
                <Link to="/execution" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  质量保证
                </Link>
                <span className="text-gray-500"> - 质量标准</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI从业者</h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>从这里开始：</strong>
              <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                AI推理
              </Link>
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>
                <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  决策框架
                </Link>
                <span className="text-gray-500"> - 系统决策制定</span>
              </li>
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  提示策略
                </Link>
                <span className="text-gray-500"> - 有效沟通</span>
              </li>
              <li>
                <Link to="/prompting" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  最佳实践
                </Link>
                <span className="text-gray-500"> - 高级技巧</span>
              </li>
              <li>
                <Link to="/ai-reasoning" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  思维过程
                </Link>
                <span className="text-gray-500"> - 推理示例</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 搜索和交叉引用</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            这个综合索引提供了多种方式来导航规范驱动开发指南，基于您的需求、经验水平和当前目标。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">使用提示</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>如果您是新手，从"快速开始路径"开始</li>
              <li>如果您有特定角色，查看"按用户角色"部分</li>
              <li>如果您需要特定类型的内容，使用"按内容类型"</li>
              <li>所有链接都指向相应的详细文档</li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/content-coverage"
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors"
            >
              查看内容覆盖
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/validation-report"
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            >
              查看验证报告
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/templates"
              className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              浏览模板库
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 