export default function Prompting() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">提示策略</h1>
        <p className="mt-4 text-lg text-gray-600">
          与AI协作的有效沟通技巧和最佳实践
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">核心策略</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">提供清晰上下文</h3>
            <p className="text-gray-600">
              在提示中包含项目背景、技术栈、约束条件和目标，帮助AI理解你的具体需求。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">使用结构化格式</h3>
            <p className="text-gray-600">
              采用EARS格式描述需求，明确指定验收标准和成功指标，使AI能够生成更准确的规范。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">迭代精炼</h3>
            <p className="text-gray-600">
              基于AI的反馈调整和细化你的需求，通过多轮对话逐步完善规范文档。
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">提示模板示例</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">需求分析提示</h3>
            <pre className="text-sm text-gray-700 bg-white p-3 rounded border">
{`我需要为我的电商网站创建一个用户注册功能。请按照规范驱动开发方法，帮我：

1. 分析需求并创建EARS格式的需求文档
2. 设计技术架构和数据模型
3. 分解为具体的实现任务

约束条件：
- 使用React + Node.js技术栈
- 需要邮箱验证
- 支持密码强度检查`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
} 