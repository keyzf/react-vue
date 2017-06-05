import {
  pascalCaseTag
} from '../components/buildComponent.js'

export function dynamicComponent (vm, name) {
  let componentName
  if (typeof name === 'string') {
    componentName = vm.$options.components[pascalCaseTag(name)]
  } else {
    componentName = name
  }
  return componentName
}
