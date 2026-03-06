const resolvedWrapper = (value) => {
  return new Promise((resolve, reject) => { resolve(value) });
};

const rejectedWrapper = (errorMessage) => {
  return new Promise((resolve, reject) => { reject(Error(errorMessage)) })
};

const handleResolvedPromise = (promise) => {
  return new Promise((resolve, reject) => { resolve(promise.then((v) => { console.log(v); return v.toUpperCase() })) })
};

const handleResolvedOrRejectedPromise = (promise) => {
  let ok = promise.then((v) => { console.log(v); return v.toUpperCase() }).catch((v) => { console.log('Your error message was:', v); return null; })
  return new Promise((resolve, reject) => { if (ok) resolve(ok) })
};

const pauseForMs = (ms) => {
  return new Promise((resolve)=>setTimeout(()=>resolve(),ms))
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
