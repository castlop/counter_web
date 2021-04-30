const createId = () => {
  return (new Date()).getTime();
}

const extractCounterValue = (counterValueAsString) => {
  const substrings = counterValueAsString.split(':', 10);
  return parseInt(substrings.pop());
}


export {
  createId,
  extractCounterValue
}