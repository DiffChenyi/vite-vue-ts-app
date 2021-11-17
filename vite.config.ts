import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
	plugins: [vue()],
	resolve: {// vue文件引用别名定义
		alias: {
			'@': path.join(__dirname, 'src')
		}
	},
	server: {
		port: 8080,
		open: false,
		cors: true,
		proxy: {
			'/api': {
				target: 'http://jsonplaceholder.typicode.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
