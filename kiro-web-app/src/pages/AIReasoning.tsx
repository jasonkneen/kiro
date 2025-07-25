export default function AIReasoning() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI推理</h1>
        <p className="mt-4 text-lg text-gray-600">
          了解AI在规范开发过程中的决策框架和思维过程
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">决策框架</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">需求分析框架</h3>
            <p className="text-gray-600 mb-4">
              AI使用系统化的方法来分析和验证需求，包括清晰性检查、完整性分析、一致性验证和可行性评估。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">优先级标准：</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>用户影响严重性（关键、高、中、低）</li>
                <li>技术可行性（立即、中等、复杂、不确定）</li>
                <li>依赖关系（基础、独立、依赖、可选）</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">设计决策框架</h3>
            <p className="text-gray-600 mb-4">
              AI评估架构选项时使用加权因素：可维护性(30%)、可扩展性(25%)、可靠性(20%)、开发速度(15%)、安全性(10%)。
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">思维过程示例</h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">案例：用户认证系统</h3>
            <p className="text-blue-800 text-sm">
              <strong>需求澄清：</strong>什么类型的认证？用户角色？安全要求？集成需求？<br/>
              <strong>假设验证：</strong>Web应用需要会话管理，现代安全标准需要HTTPS<br/>
              <strong>优先级：</strong>基本用户名/密码认证（关键），密码重置功能（高），社交登录（中）
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">技术选择：JWT vs 基于会话</h3>
            <p className="text-green-800 text-sm">
              <strong>上下文分析：</strong>单一Web应用，需要跨页面加载的用户会话<br/>
              <strong>评估：</strong>无状态性、安全性、实现复杂度、浏览器支持<br/>
              <strong>决策：</strong>基于会话的认证（更高安全性，更简单的单服务器部署）
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 