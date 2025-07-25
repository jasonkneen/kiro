export default function Resources() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">资源库</h1>
        <p className="mt-4 text-lg text-gray-600">
          标准、工具和学习材料的精选集合
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">标准和规范</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">EARS (Easy Approach to Requirements Syntax)</h3>
            <p className="text-gray-600">
              一种结构化的需求编写格式，帮助创建清晰、可测试的需求文档。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">行业标准</h3>
            <p className="text-gray-600">
              需求工程、系统设计和项目规划的相关行业标准和最佳实践。
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">推荐工具</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">文档工具</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Markdown编辑器</li>
              <li>版本控制系统</li>
              <li>协作平台</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">设计工具</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>架构设计工具</li>
              <li>流程图软件</li>
              <li>原型设计工具</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 