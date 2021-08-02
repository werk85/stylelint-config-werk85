module.exports = {
  extends: ['./scss.js'],
  rules: {
    // otherwise simple styled component renamings are not possible like:
    // const Name = styled.h1``
    'no-empty-source': null,
  }
}
