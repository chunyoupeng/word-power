# 使用 Node 官方镜像
FROM node:latest

# 创建并设置工作目录
WORKDIR /app

# 安装应用依赖
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# 拷贝应用源代码到工作目录
COPY . .

# 构建应用（如果需要）
# RUN npm run build

# 暴露端口
EXPOSE 3001

# 运行应用
CMD ["npm", "start"]