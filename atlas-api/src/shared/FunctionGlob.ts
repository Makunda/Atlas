/* eslint-disable max-len */
import HttpException from "@exceptions/HttpException";
import { logger } from "./Logger";
import { Request } from "express";

export const pErr = (err: Error) => {
  if (err) {
    logger.error(err);
  }
};

/**
 * Check the body of the request
 * @param {Request} req Request
 * @param {String} parameter Parameter to check
 */
export const checkBody = (req: Request, parameter: string) => {
  if (!(parameter in req.body)) throw new HttpException(400, `Missing parameter: ${parameter} in Body`);
};

/**
 * Check the body of the request
 * @param {Request} req Request
 * @param {String} parameter Parameter to check
 */
export const checkQuery = (req: Request, parameter: string) => {
  if (!(parameter in req.query)) throw new HttpException(400, `Missing parameter: ${parameter} in Query`);
};

/**
 * Check the params of the request
 * @param {Request} req Request
 * @param {String} parameter Parameter to check
 */
export const checkParams = (req: Request, parameter: string) => {
  if (!(parameter in req.params)) throw new HttpException(400, `Missing parameter: ${parameter} in Params`);
};

export const getRandomInt = () => {
  return Math.floor(Math.random() * 1_000_000_000_000);
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function onlyUnique(value: any, index: any, self: any) {
  return self.indexOf(value) === index;
}

/**
 * Merge the two array and keep only unique value
 * @param arr First array
 * @param arr2 Second array
 */
export const mergeUniqueArrays = (arr: string[], arr2: string[]): string[] => {
  return arr.concat(arr2).filter(onlyUnique);
};
