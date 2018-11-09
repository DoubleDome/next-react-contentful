module.exports = function themifyLoader(source) {
  return `@import '~@/styles/shared';

@include themifier {
${source
    .split('\n')
    .map(x => `  ${x}`)
    .join('\n')}
}`;
};
