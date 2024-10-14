import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  
import path from 'path';  
import copy from 'rollup-plugin-copy'; // 引入 copy 插件  

export default defineConfig({  
  plugins: [  
    react(),  
    copy({  
      targets: [  
        { src: 'src/manifest.json', dest: 'dist' },
        { src: 'src/service-worker.js', dest: 'dist' }, // 将 manifest.json 从 src 复制到 dist  
        // { src: 'public', dest: 'dist' }, 
      ],  
      hook: 'writeBundle' // 在打包完成后执行  
    })  
  ],  
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, 'src'),  
      '@components': path.resolve(__dirname, 'src/components'),  
    },  
  },  
  build: {  
    rollupOptions: {  
      output: {  
        entryFileNames: 'assets/js/[name].js',  
        chunkFileNames: 'assets/js/[name].js',  
        assetFileNames: 'assets/[name].[ext]',  
      }  
    }  
  }  
});