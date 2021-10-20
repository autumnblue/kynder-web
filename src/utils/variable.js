import Images from '../assets/images';

export const homeCarouselData = [
  {
    img: Images.homeCarousel1.default,
    name: 'Jana Stanfield',
    description: '“I cannot do all the good that the world needs, but the world needs all the good I can do.”'
  },
  {
    img: Images.homeCarousel2.default,
    name: 'Oscar Wilde',
    description: '“The smallest act of kindness is worth more than the grandest intention.”'
  },
  {
    img: Images.homeCarousel3.default,
    name: 'Eric Hoffer',
    description: '“Kindness can be its own motive, we are made kind by being kind.”'
  },
  {
    img: Images.homeCarousel4.default,
    name: 'Ronald Reagan',
    description: '“We can’t help everyone, but everyone can help someone.”'
  },
  {
    img: Images.homeCarousel5.default,
    name: 'Anne Frank',
    description: '“No one has ever become poor by giving.”'
  },
  {
    img: Images.homeCarousel6.default,
    name: 'Peter Capaldi',
    description: '“Always try to be nice, but never fail to be Kind.”'
  },
  {
    img: Images.homeCarousel7.default,
    name: 'Desmond Tutu',
    description: '“Do your little bits of good where you are; it’s those little bits of good put together that overwhelm the world.”'
  }
]

export const moneyhubCapturedLinks = {
  success: '/moneyhub/success',
  error: '/moneyhub/error',
};

export const pay360CapturedLinks = {
  decline: '/pay360/decline',
  cancel: '/pay360/cancel',
  error: '/pay360/error',
  success: '/pay360/success',
};

export const pauseDonationOptions = [
  {
    label: 'one day',
    value: '1D',
  },
  {
    label: 'one week',
    value: '1W',
  },
  {
    label: 'two weeks',
    value: '2W',
  },
  {
    label: 'three weeks',
    value: '3W',
  },
  {
    label: 'one month',
    value: '1M',
  },
  {
    label: 'three months',
    value: '3M',
  },
  {
    label: 'six months',
    value: '6M',
  },
];

export const onboardingData = [
  {
    title: 'Congratulations',
    description:
      'You’ve taken the first step to joining a caring community of philanthropists and donors.',
    subDescription:
      'From now on you’ll be able to turn everything you do into a slightly Kynder act',
  },
  {
    title: 'What is Kynder?',
    description:
      'Kynder is the newest way to support the causes that matter most to you simply by going about your daily life.',
    subDescription:
      'We call it passive philanthropy and it couldn’t be easier.',
  },
  {
    title: 'How it works',
    description:
      'Kynder works by allowing users to connect their bank account to a chosen charity via OpenBanking. It will then charge a nominated percentage of the users monthly spend and donate it to the Charity of their choice. Kynder does not track against Insurance, Utilities, Rent, Mortgage payments or any other debt repayments.',
    subDescription:
      'So if a user has spent £1000 in a month (on top of the categories listed above) and set their donation level to 1%, Kynder will donate £10 on their behalf at the first day of the following month. If the user spends less the donation decreases, if they spend more, the charity shares in that benefit. This way, every coffee, cab and online shopping splurge becomes a micro-donation and a slightly Kynder act.',
  },
];