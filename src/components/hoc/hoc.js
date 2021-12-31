export default wrapperPromise = (component, promiseFn) => {
  return {
    data() {
      return {
        loading: false,
        result: null,
        error: false
      }
    }
  }
}
