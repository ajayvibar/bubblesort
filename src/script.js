class BubbleArray
{
  constructor(array) {
    this.array = array;
    this.sorted_array = this.bubbleSort(array);
    this.median = this.getMedian();
    this.max = this.getMax();
  }

  bubbleSort(array) {
    var sorted = array;
    for (var i = 0; i < sorted.length; i++) {
        for (var j = 0; j < (sorted.length - i - 1); j++) {
            if (sorted[j] > sorted[j + 1]) {
                var temp = sorted[j]
                sorted[j] = sorted[j + 1]
                sorted[j + 1] = temp
            }
        }
    }
    return sorted;
  }

  getMedian() {
    return this.sorted_array[Math.floor((this.array.length -1)/2)];
  }

  getMax() {
    return this.sorted_array[this.array.length -1];
  }

}

const a = new BubbleArray([1,6,4,2,0]);
console.log(a);