import { atom } from 'recoil';


export const allAnswers = atom({
  key: 'allAnswers',
  default: {
    alcohol: 'toxic',
    wine: 'toxic',
    avocado: 'mildly toxic',
    garlic: 'toxic',
    coffee: 'toxic',
    'aloe vera': 'toxic',
    daffodil: 'toxic'
  },
});

export const allAppointments = atom({
  key: 'allAppointments',
  default: {
    date: '09/21/22',
    type: 'Annual Checkup',
    time: '11 AM',
    address: '124 Rainbow Road'
  },
});