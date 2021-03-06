
import { isHaveMenu } from '@/utils/handle'
export default {
  inserted(el, binding, vnode) {
    const value = binding.value
    if (value) {
      const hasPermission = isHaveMenu(value)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      // throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}
