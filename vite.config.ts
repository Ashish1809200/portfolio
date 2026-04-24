import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  // Fallback to avoid 'base.invalid' error if env is missing
  const targetUrl = env.VITE_OLLAMA_URL || 'http://127.0.0.1:11434';

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api/chat': {
          target: targetUrl,
          changeOrigin: true,          
          rewrite: (path) => path.replace(/^\/api\/chat/, ''),
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
          },
          headers: {
            'Authorization': `Bearer ${env.VITE_OLLAMA_API_KEY}`,
          }
        },
      },
    },
  };
});