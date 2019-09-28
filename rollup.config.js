import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "./src/index.js",
    output: {
      file: "./dist/bundle.js",
      name: "bundle",
      format: "esm"
    },
    plugins: [
      // replace({
      //   "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      // }),
      resolve(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"]
      }),
      commonjs()
    ],
    external: ["react"]
  }
];
