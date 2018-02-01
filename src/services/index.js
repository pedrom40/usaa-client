import {sleep} from "../helpers";

export function getHomeContent() {
  return new Promise( (resolve, reject) => {

    // throw an error every once and a while
    if (Math.random() < 0.25) {
      const error = 'Something went wrong while fetching home content...';
      reject(error);
    }

    // fake service call
    sleep(3000);

    // return mock json response
    const res = 'Content for home page...';
    resolve(res);

  });
}

export function getPaycheckPlannerContent() {
  return new Promise( (resolve, reject) => {

    // throw an error every once and a while
    if (Math.random() < 0.25) {
      const error = 'Something went wrong while fetching paycheck planner content...';
      reject(error);
    }

    // fake service call
    sleep(3000);

    // return mock json response
    const res = 'Content for paycheck planner page...';
    resolve(res);

  });
}

export function getSavingsBoosterContent() {
  return new Promise( (resolve, reject) => {

    // throw an error every once and a while
    if (Math.random() < 0.25) {
      const error = 'Something went wrong while fetching savings booster content...';
      reject(error);
    }

    // fake service call
    sleep(3000);

    // return mock json response
    const res = 'Content for savings booster page...';
    resolve(res);

  });
}