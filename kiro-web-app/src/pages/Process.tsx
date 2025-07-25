export default function Process() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">流程指南</h1>
        <p className="mt-4 text-lg text-gray-600">
          三阶段开发流程的详细步骤说明：需求 → 设计 → 任务
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">阶段1：需求收集</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            将模糊的功能想法转化为清晰、可测试的需求。使用EARS格式定义验收标准，识别边缘情况和约束。
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>捕获表达价值和目的的用户故事</li>
            <li>使用EARS格式定义验收标准</li>
            <li>识别边缘情况和约束</li>
            <li>验证完整性和可行性</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">阶段2：设计文档</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            创建全面的技术实现计划。研究技术方法和约束，定义系统架构和组件交互。
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>研究技术方法和约束</li>
            <li>定义系统架构和组件交互</li>
            <li>指定数据模型和接口</li>
            <li>规划错误处理和测试策略</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">阶段3：任务规划</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            将设计分解为可操作的、顺序的实现步骤。定义明确的目标和完成标准。
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>将设计元素转换为特定的编码任务</li>
            <li>对任务进行排序以支持增量进度</li>
            <li>定义明确的目标和完成标准</li>
            <li>引用需求以确保可追溯性</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 