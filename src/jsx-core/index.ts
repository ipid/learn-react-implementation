export type IpidNode = IpidElement | string | number | IpidFragment | boolean | null | undefined
export type IpidFragment = Iterable<IpidNode>

export interface IpidClassComponent {
  render: () => IpidNode
}

export interface IpidElement {
  type: string | ((props: unknown) => IpidNode) | (new () => IpidClassComponent)
  props: { [key: string]: any }
  key: string | number | null
}

export function ipidCreateElement() {

}
