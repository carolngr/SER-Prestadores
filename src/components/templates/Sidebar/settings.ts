export type TMenu = {
  id: number,
  label: string,
  icon: string,
  path?: string,
  subMenu?: TMenu[]
}

export const sidebar_menus : TMenu[] = [
  {
    id: 1,
    label: "HOME",
    icon: 'home',
    path: "/home",
  },
  {
    id: 1,
    label: "PROVIDERS",
    icon: 'person',
    path: "/providers",
  },

]
