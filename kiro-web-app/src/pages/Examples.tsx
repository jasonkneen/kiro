export default function Examples() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">示例和案例</h1>
        <p className="mt-4 text-lg text-gray-600">
          真实案例和完整规范示例，展示规范驱动开发的实际应用
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">简单功能示例</h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">用户认证系统</h3>
            <p className="text-blue-800 text-sm mb-3">
              完整的用户登录、注册和会话管理功能规范示例。
            </p>
            <div className="bg-white p-3 rounded border">
              <h4 className="font-medium text-gray-900 mb-2">需求示例：</h4>
              <pre className="text-xs text-gray-700">
{`### 需求1
**用户故事：** 作为用户，我希望能够登录系统，以便访问我的账户。

#### 验收标准
1. 当提供正确凭据时，系统应验证用户身份
2. 当提供错误凭据时，系统应显示错误信息
3. 当登录失败5次时，系统应临时锁定账户15分钟`}
              </pre>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">数据验证功能</h3>
            <p className="text-green-800 text-sm">
              表单验证和数据处理功能的规范示例。
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">复杂系统示例</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">电商平台</h3>
            <p className="text-gray-600">
              包含产品目录、购物车、支付处理和订单管理的完整电商系统规范。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">API设计</h3>
            <p className="text-gray-600">
              RESTful API的完整设计规范，包括端点定义、数据模型和错误处理。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 