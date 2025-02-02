import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";

import pkgJson from "./package.json" assert { type: "json" };

const devDeps = Object.keys(pkgJson.devDependencies || {});
const peerDeps = Object.keys(pkgJson.peerDependencies || {});

const externalDeps = [...devDeps, ...peerDeps];

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: "src/index.ts",
    external: externalDeps,
    output: [
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  // Declaration Bundle
  {
    input: "src/index.ts",
    external: externalDeps,
    output: [
      {
        file: "dist/types/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts()],
  },
];

export default config;
