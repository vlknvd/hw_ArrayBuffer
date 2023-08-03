export default class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const arrayBuffer = new Uint16Array(this.buffer);
    let str = '';
    for (let i = 0; i < arrayBuffer.length; i += 1) {
      str += String.fromCharCode(arrayBuffer[i]);
    }
    return str;
  }
}
