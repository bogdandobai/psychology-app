import { Platform } from 'react-native';
import moment from 'moment';

export const onlyLetters = (text: string) => {
  const expression = /^[a-zA-Z\s]*$/;
  return !expression.test(text);
};

export const isIphone = () => {
  return Platform.OS === 'ios';
};

export const dateBetweenStartAndEndDates = (
  date: Date,
  startDate: number,
  endDate: number,
): boolean => {
  return moment(date).isBetween(startDate, endDate, 'day', '[]');
};

export const validateEmail = (value:string) => {
  const expression = /^\d+$/;
  return (value.length === 13) && expression.test(value);
}

export const validatePassword = (value: string) => {
  return !!value
}

export const formatDate = (date) => {

  return {
    time: moment(date.toDate()).format('LT'),
    date: moment(date.toDate()).format('L'),
  }
};
