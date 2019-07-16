import importAll from 'import-all.macro'

interface ContentModules {
  [key: string]: any
}

const contentModules = importAll.sync('./*.json')
const content: ContentModules = Object.keys(contentModules).reduce(
  (acc, path) => {
    const key = path.replace('./', '').replace('.json', '')
    const value = contentModules[path].default

    return {
      ...acc,
      [key]: value
    }
  },
  {}
)

export default content
