export const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) console.log('✨ Production BUILD')

export const name = 'v_execute'
export const formats = ['amd', 'cjs', 'es', 'iife', 'umd', 'system']

export const banner = `//! 📚 Package: ${name} \n//! 👨‍💻 Author: V-core9`
export const footer = '//! - - - - -<[:-v-:]>- - - - - '
