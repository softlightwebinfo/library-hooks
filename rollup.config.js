import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import compiler from '@ampproject/rollup-plugin-closure-compiler';

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs"
        },
        {
            file: packageJson.module,
            format: "esm"
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({useTsconfigDeclarationDir: true}),
        postcss({
            extensions: ['.css']
        }),
        compiler(),
    ],
};
