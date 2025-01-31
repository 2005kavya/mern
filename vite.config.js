import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default {
    optimizeDeps: {
        include: ['swiper']
    },
    css: {
        preprocessorOptions: {
            css: {
                additionalData: '@import "swiper/swiper-bundle.min.css";'
            }
        }
    }
};