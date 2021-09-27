import moment, { isMoment } from 'moment';

const thaiYearThreshold = 2400;
const thaiYearDifference = 543;
const supportedFormats = ['DD/MM/YYYY', 'YYYY-MM-DD'];

export const convertToMoment = (date) => {
  if (date instanceof Date) {
    return moment(date);
  }
  return moment(date, supportedFormats);
};

export const isThaiYear = (date) => {
  let d = date;
  if (!isMoment(date)) {
    d = convertToMoment(date);
  }

  return d.year() > thaiYearThreshold;
};

export const normalizeDate = (date) => {
  let normalizedDate = date;
  if (!isMoment(date)) {
    normalizedDate = convertToMoment(date);
  }

  if (isThaiYear(normalizedDate)) {
    normalizedDate.year(normalizedDate.year() - thaiYearDifference);
  }

  return normalizedDate;
};
