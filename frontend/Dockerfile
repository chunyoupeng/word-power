FROM node:latest

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝前端项目文件
COPY . .

# 构建项目
RUN npm run build

# 安装 serve 用于服务静态文件
RUN npm install -g serve

# 暴露端口
EXPOSE 3000

# 运行 serve 服务
CMD ["serve", "-s", "dist"]