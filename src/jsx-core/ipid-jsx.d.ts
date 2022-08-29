import type { IpidElement } from './index'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any
    }

    type Element = IpidElement
  }
}
