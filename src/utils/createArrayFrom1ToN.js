function createArrayFrom1ToN(N) {
  return [...Array(N).keys()].map(i => i + 1);
}

export { createArrayFrom1ToN };
