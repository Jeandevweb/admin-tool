import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

const folders = fs.readdirSync("./src", { withFileTypes: true });
const fileNames = folders
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);
const filePaths = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
);

const resolveAlias = {
	'public': '/public',
	...filePaths,
}

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(process.env);
  return defineConfig({
    base: process.env.VITE_URL_BASENAME,
    plugins: [react()],
    optimizeDeps: {
      exclude: ["react-icons"],
    },
    resolve: {
      alias: resolveAlias,
    },
  });
};
