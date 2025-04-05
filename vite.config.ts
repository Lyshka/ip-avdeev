import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/ip-avdeev/",
  resolve: {
    alias: {
      components: "/src/components",
      constants: "/src/constants",
      icons: "/src/icons",
      interfaces: "/src/interfaces",
      libs: "/src/libs",
      stores: "/src/stores",
      types: "/src/types",
    },
  },
});
