export default function Methodology() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">方法论概述</h1>
        <p className="mt-4 text-lg text-gray-600">
          规范驱动开发是一种系统化的软件功能开发方法，强调充分规划、清晰文档化和结构化实现。
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">核心哲学</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">代码前的清晰性</h3>
            <p className="text-gray-600">
              规范驱动开发的基本原则是，清晰的思想和目标必须在实现之前。通过投资时间理解需求、设计解决方案和规划实现，
              我们减少不确定性，最小化返工，并增加正确构建事物的可能性。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">迭代精炼</h3>
            <p className="text-gray-600">
              规范流程的每个阶段都设计为迭代的。该方法鼓励在每个步骤进行精炼和验证，在问题修复成本较低时及早发现问题。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">文档作为沟通</h3>
            <p className="text-gray-600">
              规范不仅仅是规划文档，它们是沟通工具，可以协调利益相关者、保存决策理由，并为未来的维护和增强提供上下文。
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">三阶段方法</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-primary-700 font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">需求收集</h3>
            <p className="text-sm text-gray-600">
              将模糊的功能想法转化为清晰、可测试的需求。使用EARS格式定义验收标准，识别边缘情况和约束。
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-primary-700 font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">设计文档</h3>
            <p className="text-sm text-gray-600">
              创建全面的技术实现计划。研究技术方法和约束，定义系统架构和组件交互，指定数据模型和接口。
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-primary-700 font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">任务规划</h3>
            <p className="text-sm text-gray-600">
              将设计分解为可操作的、顺序的实现步骤。将设计元素转换为特定的编码任务，定义明确的目标和完成标准。
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">规范驱动开发的优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">降低风险和不确定性</h3>
            <p className="text-sm text-gray-600">
              通过实施前的充分规划，规范驱动开发显著降低了构建错误事物或遇到意外技术挑战的风险。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">提高质量和可维护性</h3>
            <p className="text-sm text-gray-600">
              通过规范流程开发的功能往往更健壮、测试更充分、维护性更好。清晰需求和深思熟虑设计的强调带来更好的架构决策。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">增强协作</h3>
            <p className="text-sm text-gray-600">
              规范为团队成员、利益相关者和未来维护者提供共同语言和共享理解，改善沟通并实现更有效的协作。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">更好的估算和规划</h3>
            <p className="text-sm text-gray-600">
              规范驱动开发中固有的详细规划使更准确的时间和资源估算成为可能，项目管理者可以做出更好的范围、时间线和资源分配决策。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 