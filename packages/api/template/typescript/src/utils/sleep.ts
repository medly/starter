export const sleep = async (timeInMilliseconds: number): Promise<unknown> =>
    new Promise(resolve => setTimeout(() => resolve(true), timeInMilliseconds));
