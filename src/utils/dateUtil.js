/**
 * dayjs 独立的时间操作工具，方便切换到dayjs
 */
import dayjs from "dayjs";

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const DATE_FORMAT = "YYYY-MM-DD";

export function formatToDateTime(date, format = DATE_TIME_FORMAT) {
  return dayjs(date).format(format);
}

export function formatToDate(date, format = DATE_FORMAT) {
  return dayjs(date).format(format);
}

export const dateUtil = dayjs;
