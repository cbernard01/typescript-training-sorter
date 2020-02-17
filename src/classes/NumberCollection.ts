import {Sorter} from "./Sorter";
import {Sortable} from "../interfaces/Sortable";

export class NumberCollection extends Sorter implements Sortable {
  data: number[];

  constructor(data: number[]) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
