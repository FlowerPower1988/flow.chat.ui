export const takeIfExists = (key: string, type:any = String ) => {
    const item = localStorage.getItem(key)
    if (item) {
      return type === Number
        ? Number.parseFloat(item)
        : type === Object ? JSON.parse(item) : item
    }
  }