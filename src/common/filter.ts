export const filterInit = (Vue: any) => {
  Vue.filter('valueFilter', (value: any): number => {
    return 10000
  })
}
