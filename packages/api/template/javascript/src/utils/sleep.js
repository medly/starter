export const sleep = async timeInMilliseconds => new Promise(resolve => setTimeout(() => resolve(true), timeInMilliseconds));
