import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv, ProxyOptions } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue()],
    base: "/",
    server: {
      port: parseInt(env.PORT),
      proxy: mfeProxy("/vue-child", 8081),
    },
    preview: { port: parseInt(env.PORT) },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});

function mfeProxy(path: string, port: number | string) {
  const vitePaths = ["/src", "/node_modules", "/@vite", "/@fs", "/@id"];
  const proxies = {} as Record<string, ProxyOptions>;

  vitePaths.forEach((vitePath) => {
    proxies[`${path}${vitePath}`] = {
      target: `http://localhost:${port}`,
      changeOrigin: true,
    };
  });

  return proxies;
}
