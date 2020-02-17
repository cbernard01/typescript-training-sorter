export class Node {
  data: number;
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}
