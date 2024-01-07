export const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) console.log('✨ Production BUILD')

export const name = 'v_execute'
export const formats = ['amd', 'cjs', 'es', 'iife', 'umd', 'system']

export const banner = `//! 📚 Package: ${name} \n//! 👨‍💻 Author: V-core9`
export const footer = '//! - - - - -<[:-v-:]>- - - - - '

export const baseBundleConfig = {
  name,
  banner,
  footer,
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
}

