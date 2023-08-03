import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('load', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('toString', () => {
  const received = ArrayBufferConverter.toString();
  expect(received).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
