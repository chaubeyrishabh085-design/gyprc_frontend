import template from './offerLetterTemplate.txt';

export const offerLetterHTML = (data) => {
  return template
    .replace(/{{name}}/g, data.name || '')
    .replace(/{{addressLine1}}/g, data.addressLine1 || '')
    .replace(/{{addressLine2}}/g, data.addressLine2 || '')
    .replace(/{{addressLine3}}/g, data.addressLine3 || '')
    .replace(/{{designation}}/g, data.designation || '')
    .replace(/{{annualStipend}}/g, data.annualStipend || '')
    .replace(/{{date}}/g, data.date || '');
};