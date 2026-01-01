import * as Yup from 'yup';

export const dateSchema=Yup.date().required('Date is required');
export const emailSchema= Yup.string().email('Invalid email address').required('Email is required');
export const descSchema= Yup.string().required('Description is required');