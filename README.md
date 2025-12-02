# 🧠 智能计划助手 (Smart Planning Assistant)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![Node.js 16+](https://img.shields.io/badge/node.js-16+-green.svg)](https://nodejs.org/)
[![Vue 3](https://img.shields.io/badge/vue-3-brightgreen.svg)](https://vuejs.org/)
[![MySQL 8.0](https://img.shields.io/badge/mysql-8.0-orange.svg)](https://www.mysql.com/)

> 基于行为科学研究的智能任务规划系统，为您提供真正个性化、科学化的日程安排

## ✨ 项目特色

### 🧩 多维度任务量化
- **基础属性**: 紧迫性、重要性、预估耗时
- **心理属性**: 认知负荷、能量消耗、内在动机
- **行为属性**: 执行承诺度、启动门槛、拖延倾向

### 🎯 智能优化算法
```python
# 多目标优化：Q = α·C + β·S + γ·(1-L) + δ·E + ε·B
Q = α·完成优先级 + β·计划稳定性 + γ·(1-认知负荷) + δ·能量平衡 + ε·行为因素
```

### 🚀 四种优化策略
- **效率优先型**: 最大化高重要性任务完成率
- **健康平衡型**: 最小化每日总能量消耗峰值  
- **心流促进型**: 最大化连续工作时段
- **动机维持型**: 平衡高低愉悦度任务分布

## 🏗️ 系统架构

### 微服务架构
```mermaid
graph TB
    A[Web前端] --> B[API网关]
    C[iOS App] --> B
    D[Android App] --> B
    
    B --> E[用户服务]
    B --> F[任务管理服务]
    B --> G[计划生成服务]
    B --> H[数据分析服务]
    B --> I[认证服务]
    
    E --> J[用户数据库]
    F --> K[任务数据库]
    G --> L[算法引擎]
    H --> M[分析数据库]
```

### 技术栈
| 领域         | 技术选型                            |
| ------------ | ----------------------------------- |
| **前端**     | Vue 3 + TypeScript + Pinia + Vite   |
| **移动端**   | React Native + TypeScript           |
| **后端**     | Python + FastAPI, Node.js + Express |
| **算法**     | Python + NumPy + SciPy + C++        |
| **数据库**   | MySQL + Redis + MongoDB             |
| **基础设施** | Docker + Kubernetes + AWS/Aliyun    |

## 🚀 快速开始

### 环境要求
- Python 3.9+
- Node.js 16+
- MySQL 8.0+
- Redis 6.0+
- Docker 20.0+

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/your-organization/smart-planning-assistant.git
cd smart-planning-assistant
```

2. **环境配置**
```bash
cp .env.example .env.development
# 编辑配置文件，设置数据库连接等参数
```

3. **启动基础设施**
```bash
cd deployments/docker
docker-compose -f docker-compose.dev.yml up -d
```

4. **安装依赖并启动服务**
```bash
# 后端服务
cd backend/user-service
pip install -r requirements.txt
python main.py

# Web前端
cd frontend/web-app
npm install
npm run dev
```

5. **访问应用**
- Web应用: http://localhost:3000
- API文档: http://localhost:8000/docs
- 监控面板: http://localhost:9090

### Docker部署
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📁 项目结构

```
smart-planning-assistant/
├── 📚 文档/           # 项目文档
├── 🔧 后端服务/       # 微服务架构后端
├── 🧠 算法引擎/       # 核心算法实现
├── 💻 前端应用/       # Web和移动端
├── 🗄️ 数据库/        # 数据库脚本和迁移
├── 🐳 部署配置/       # Docker和K8s配置
├── ⚙️ 基础设施/       # CI/CD和监控
└── 🧪 测试/          # 测试套件
```

## 🛠️ 开发指南

### 代码规范
- **Python**: 遵循 PEP 8
- **JavaScript/TypeScript**: 使用 ESLint + Prettier
- **Git**: 遵循 Conventional Commits
- **API**: 使用 OpenAPI 3.0 规范

### 测试要求
```bash
# 运行单元测试
pytest tests/unit/

# 运行集成测试  
pytest tests/integration/

# 测试覆盖率要求 > 80%
pytest --cov=./ --cov-report=html
```

### 提交规范
```
feat: 添加新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具变动
```

## 📊 API文档

完整的API文档可在以下位置找到：
- [REST API文档](./docs/接口设计文档.md)
- [OpenAPI规范](./docs/API文档/openapi.yaml)
- [在线API文档](http://localhost:8000/docs) (开发环境)

## 🧪 测试

### 测试策略
- **单元测试**: 核心业务逻辑
- **集成测试**: 服务间通信
- **E2E测试**: 完整用户流程
- **性能测试**: 算法和系统性能

### 运行测试
```bash
# 运行所有测试
./scripts/run-tests.sh

# 性能测试
./scripts/performance-test.sh
```

## 🔧 配置管理

### 环境配置
- `development`: 开发环境
- `staging`: 预生产环境  
- `production`: 生产环境

### 关键配置项
```env
# 数据库
DATABASE_URL=mysql://user:pass@host:port/db
REDIS_URL=redis://host:port

# JWT认证
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400

# 算法配置
ALGORITHM_STRATEGY=EFFICIENCY
COGNITIVE_THRESHOLD=0.7
```

## 📈 监控与运维

### 监控指标
- 应用性能: 响应时间、错误率、吞吐量
- 系统资源: CPU、内存、磁盘、网络
- 业务指标: 用户活跃度、任务完成率、算法准确率

### 日志系统
```python
import structlog

logger = structlog.get_logger()
logger.info("plan_generation_start", user_id=user_id, task_count=len(tasks))
```

## 🤝 贡献指南

我们欢迎社区贡献！请阅读：
- [贡献指南](./CONTRIBUTING.md)
- [行为准则](./CODE_OF_CONDUCT.md)

### 开发流程
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 支持

- 📧 邮箱: support@smartplanning.com
- 🐛 [问题反馈](https://github.com/your-organization/smart-planning-assistant/issues)
- 📖 [文档网站](https://docs.smartplanning.com)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

<div align="center">
智能计划助手 - 让每一天都高效而有意义 🚀
</div>

