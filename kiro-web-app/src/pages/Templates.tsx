export default function Templates() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">模板库</h1>
        <p className="mt-4 text-lg text-gray-600">
          即用型模板和检查清单，帮助你快速开始规范驱动开发
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">需求模板</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">EARS格式需求模板</h3>
          <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
{`### 需求 [编号]
**用户故事：** 作为 [用户角色]，我希望 [功能描述]，以便 [价值/目的]。

#### 验收标准
1. WHEN [触发条件] THEN 系统 SHALL [预期行为]
2. WHEN [触发条件] THEN 系统 SHALL [预期行为]
3. IF [条件] THEN 系统 SHALL [预期行为]

#### 约束条件
- [技术约束]
- [业务约束]
- [性能约束]

#### 依赖关系
- [依赖的需求编号]
- [外部依赖]`}
          </pre>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">设计模板</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">系统设计文档模板</h3>
          <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
{`## 概述
[功能的高层次描述]

## 架构设计
[系统架构和组件交互]

## 数据模型
[数据结构和关系]

## 接口设计
[API端点或组件接口]

## 错误处理
[错误场景和处理策略]

## 测试策略
[测试方法和覆盖范围]`}
          </pre>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">任务模板</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">实施任务模板</h3>
          <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
{`- [ ] [任务编号]. [任务标题]
  - [具体实施步骤]
  - [具体实施步骤]
  - [具体实施步骤]
  - 编写单元测试
  - _需求：[相关需求编号]_

- [ ] [任务编号]. [任务标题]
  - [具体实施步骤]
  - [具体实施步骤]
  - 编写集成测试
  - _需求：[相关需求编号]_`}
          </pre>
        </div>
      </div>
    </div>
  )
} 