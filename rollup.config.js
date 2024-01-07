import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import strip from '@rollup/plugin-strip'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// Bundle Config Data
import { isProduction, name, formats, baseBundleConfig } from './config/bundle.cfg.js'

// Rollup Config
const v_execute_cfg = {
  input: path.resolve(__dirname, `./source/index.js`),
  treeshake: 'smallest',
  output: [
    // 3 Versions output
    ...formats.map((format) => ({
      ...baseBundleConfig,
      file: `./dist/${name}.${format}.js`,
      format
      // experimentalMinChunkSize: 1000
    }))
  ],
  plugins: [
    resolve(),
    commonjs(),
    nodePolyfills(/* options */),
    ...(isProduction
      ? [
          terser({
            maxWorkers: 4,
            compress: {
              // booleans_as_integers: true,
              ecma: 2015
            }
          }),
          strip({
            //labels: ['unittest'],
            debugger: true
          })
        ]
      : [])
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ]
}

const v_cp_code_cfg = {
  input: path.resolve(__dirname, `./source/hof/cp.code.js`),
  treeshake: 'smallest',
  output: [
    {
      ...baseBundleConfig,
      file: `./dist/cp.code.js`,
      format: 'cjs'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    nodePolyfills(/* options */),
    ...(isProduction
      ? [
          terser({
            maxWorkers: 4,
            compress: {
              // booleans_as_integers: true,
              ecma: 2015
            }
          }),
          strip({
            //labels: ['unittest'],
            debugger: true
          })
        ]
      : [])
  ]
}

export default [v_execute_cfg, v_cp_code_cfg]
