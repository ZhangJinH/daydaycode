class ArraySort {
  constructor () {
  }
  /**
   * 冒泡排序
   * 比较相邻的数据
   * @param Array list 
   */
  popsort(list) {
    let time = 0
    for(let i = 0, len = list.length; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        // 相邻元素互相比较
        if (list[j + 1] < list[j]) {
          let tmp = list[j+1]
          list[j+1] = list[j]
          list[j] = tmp
        }
      }
    }
    return list
  }
  /**
   * 选择排序
   * 将第i个元素当作最小的
   * 与第j个元素作比较 比较后得到i+1元素中最小的下标
   * 将i 与 min 互换位置
   * @param Array list 
   */
  selectsort(list) {
    for (let i = 0,len = list.length; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[i] > list[j]) {
          min = j
        }
      }
      if (min !== i) {
        let tmp = list[i] 
        list[i] = list[min]
        list[min] = tmp
      }
    }
    return list
  }
  /**
   * 插入排序
   * 将第i个元素当作是最小的
   * 与i之前的元素进行比较 
   * 如果大于 交换位置
   * 如果小与 终止循环 位置确定
   * @param Array list 
   */
  insertsort(list) {
    for (let i = 1, len = list.length; i < len; i++) {
      let now = list[i]
      let j = i-1
      while (list[j] > now) {
        list[j+1] = list[j]
        j--
      }
      list[j+1] = now
    }
    return list
  }
  rapidsort(list) {
    if (list.length <= 1) return list
    let midIndex = Math.floor(list.length / 2)
    let mid = list.splice(midIndex, 1)[0]
    let left = []
    let right = []
    for(let i = 0, len = list.length ; i< len ; i++) {
      if (list[i] < mid) {
        left.push(list[i])
      } else {
        right.push(list[i])
      }
    }
    console.log(list)
    return this.rapidsort(left).concat([mid], this.rapidsort(right))
  }
}