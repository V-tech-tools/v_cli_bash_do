import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import strip from '@rollup/plugin-strip'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// Bundle Config Data
import { isProduction, name, formats, banner, footer } from './config/bundle.cfg.js'

// Rollup Config
const buildConfig = {
  input: path.resolve(__dirname, `./source/index.js`),
  treeshake: 'smallest',
  output: [
    // 3 Versions output
    ...formats.map((format) => ({
      file: `./dist/${name}.${format}.js`,
      name,
      banner,
      footer,
      format,
      sourcemap: isProduction,
      minifyInternalExports: isProduction,
      sanitizeFileName: isProduction,
      generatedCode: {
        arrowFunctions: true,
        constBindings: true,
        conciseMethodProperty: true,
        objectShorthand: true,
        parameterDestructuring: true,
        reservedNamesAsProps: true,
        stickyRegExp: true,
        templateString: true
      }
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

export default buildConfig
