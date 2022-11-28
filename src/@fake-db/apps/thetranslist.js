import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
  users: [
    {
      id: 1,
      billing: 'Manual - Credit Card',
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      role: 'editor',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'Master Card',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 2,
      billing: 'Manual - Paypal',
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'author',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending'
    //   avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 3,
      billing: 'Auto Debit',
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
     role: 'subscriber',


      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'Master Card',
      status: 'active'
    //   avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 4,
      billing: 'Manual - Credit Card',
      fullName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
     role: 'subscriber',


      username: 'crisby3',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 5,
      billing: 'Auto Debit',
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'subscriber',
      username: 'mhurran4',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      currentPlan: 'Master Card',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 6,
      billing: 'Auto Debit',
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'author',
      username: 'shalstead5',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'active',
      avatar: ''
    },
    {
      id: 7,
      billing: 'Manual - Paypal',
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'subscriber',
      username: 'bgallemore6',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'pending',
      avatar: ''
    },
    {
      id: 8,
      billing: 'Manual - Cash',
      fullName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      role: 'author',
      username: 'kliger7',
      country: 'France',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      currentPlan: 'Master Card',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 9,
      billing: 'Auto Debit',
      fullName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      role: 'subscriber',
      username: 'fscotfurth8',
      country: 'China',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 10,
      billing: 'Auto Debit',
      fullName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
     role: 'subscriber',


      username: 'jbellany9',
      country: 'Jamaica',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 11,
      billing: 'Manual - Paypal',
      fullName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
      role: 'subscriber',
      username: 'jwharltona',
      country: 'United States',
      contact: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 12,
      billing: 'Manual - Credit Card',
      fullName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
      role: 'subscriber',
      username: 'shallamb',
      country: 'Peru',
      contact: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 13,
      billing: 'Auto Debit',
      fullName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
      role: 'subscriber',
      username: 'ypottiec',
      country: 'Philippines',
      contact: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      currentPlan: 'Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 14,
      billing: 'Auto Debit',
      fullName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      role: 'author',
      username: 'mkraused',
      country: 'Democratic Republic of the Congo',
      contact: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      currentPlan: 'Master Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 15,
      billing: 'Auto Debit',
      fullName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
     role: 'subscriber',


      username: 'zmcclevertye',
      country: 'France',
      contact: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      currentPlan: 'Master Card',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 16,
      billing: 'Auto Debit',
      fullName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      role: 'author',
      username: 'bemblinf',
      country: 'Spain',
      contact: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 17,
      billing: 'Manual - Paypal',
      fullName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
     role: 'subscriber',


      username: 'bmylesg',
      country: 'Poland',
      contact: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      currentPlan: 'Virtual Account',
      status: 'active',
      avatar: ''
    },
    {
      id: 18,
      billing: 'Manual - Cash',
      fullName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      role: 'editor',
      username: 'bbinerh',
      country: 'Yemen',
      contact: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 19,
      billing: 'Manual - Cash',
      fullName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
      role: 'admin',
      username: 'tbruntjeni',
      country: 'France',
      contact: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      currentPlan: 'Master Card',
      status: 'active',
      avatar: ''
    },
    {
      id: 20,
      billing: 'Auto Debit',
      fullName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      role: 'editor',
      username: 'wburlandj',
      country: 'Honduras',
      contact: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      currentPlan: 'Master Card, Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 21,
      billing: 'Auto Debit',
      fullName: 'Selina Kyle',
      company: 'Wayne Enterprises',
      role: 'admin',
      username: 'catwomen1940',
      country: 'USA',
      contact: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 22,
      billing: 'Auto Debit',
      fullName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      role: 'editor',
      username: 'jlysterl',
      country: 'Ukraine',
      contact: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 23,
      billing: 'Manual - Paypal',
      fullName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
     role: 'subscriber',


      username: 'kskitterelm',
      country: 'Poland',
      contact: '(254) 845-4107',
      email: 'kskitterelm@washingtonpost.com',
      currentPlan: 'Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 24,
      billing: 'Manual - Paypal',
      fullName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      role: 'admin',
      username: 'chatherleighn',
      country: 'Brazil',
      contact: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 25,
      billing: 'Manual - Credit Card',
      fullName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      role: 'admin',
      username: 'amiccoo',
      country: 'France',
      contact: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      currentPlan: 'Master Card',
      status: 'pending',
      avatar: ''
    },
    {
      id: 26,
      billing: 'Manual - Cash',
      fullName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      role: 'admin',
      username: 'hhassonp',
      country: 'China',
      contact: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      currentPlan: 'Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 27,
      billing: 'Manual - Cash',
      fullName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      role: 'editor',
      username: 'gjacombsq',
      country: 'Zambia',
      contact: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      currentPlan: 'Master Card',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 28,
      billing: 'Manual - Credit Card',
      fullName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
     role: 'subscriber',


      username: 'bkildayr',
      country: 'Portugal',
      contact: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'active',
      avatar: ''
    },
    {
      id: 29,
      billing: 'Auto Debit',
      fullName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
     role: 'subscriber',


      username: 'cpinyons',
      country: 'Sweden',
      contact: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      currentPlan: 'Master Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 30,
      billing: 'Manual - Credit Card',
      fullName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      role: 'subscriber',
      username: 'imallindinet',
      country: 'Slovenia',
      contact: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending',
      avatar: ''
    },
    {
      id: 31,
      billing: 'Manual - Cash',
      fullName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      role: 'admin',
      username: 'gmeinekenu',
      country: 'Moldova',
      contact: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      currentPlan: 'Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 32,
      billing: 'Manual - Paypal',
      fullName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      role: 'editor',
      username: 'rsnowballv',
      country: 'Philippines',
      contact: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      currentPlan: 'Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 33,
      billing: 'Auto Debit',
      fullName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      role: 'admin',
      username: 'remerw',
      country: 'North Korea',
      contact: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      currentPlan: 'Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 34,
      billing: 'Manual - Cash',
      fullName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      role: 'subscriber',
      username: 'ofibbensx',
      country: 'Indonesia',
      contact: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 35,
      billing: 'Manual - Paypal',
      fullName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
     role: 'subscriber',


      username: 'smacgilfoyley',
      country: 'Japan',
      contact: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'pending',
      avatar: ''
    },
    {
      id: 36,
      billing: 'Manual - Paypal',
      fullName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      role: 'subscriber',
      username: 'brosebothamz',
      country: 'Belarus',
      contact: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 37,
      billing: 'Manual - Cash',
      fullName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
      role: 'admin',
      username: 'shebblethwaite10',
      country: 'Canada',
      contact: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 38,
      billing: 'Manual - Credit Card',
      fullName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      role: 'subscriber',
      username: 'mpiccard11',
      country: 'Croatia',
      contact: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      currentPlan: 'Master Card',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 39,
      billing: 'Manual - Cash',
      fullName: 'Tyne Widmore',
      company: 'Samuel Obaino',
      role: 'subscriber',
      username: 'twidmore12',
      country: 'Finland',
      contact: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      currentPlan: 'Vitual Account',
      status: 'pending',
      avatar: ''
    },
    {
      id: 40,
      billing: 'Manual - Cash',
      fullName: 'Florentina Abayomi',
      company: 'Kamba PVT LTD',
      role: 'subscriber',
      username: 'fdesporte13',
      country: 'Ukraine',
      contact: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'active',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 41,
      billing: '2022-02-02 05:26:13',
      fullName: 'Edwina Alli',
      company: 'Dazzlesphere PVT LTD',
     role: 'subscriber',


      username: 'ebaldetti14',
      country: 'Haiti',
      contact: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending',
      avatar: ''
    },
    {
      id: 42,
      billing: '2022-03-22 07:26:13',
      fullName: 'Shade Balogun',
      company: 'Mybuzz PVT LTD',
      role: 'subscriber',
      username: 'brossiter15',
      country: 'Indonesia',
      contact: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      currentPlan: 'Master Card, Virtual Account',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 43,
      billing: '2022-03-22 07:26:13',
      fullName: 'Ademuyiwa Onajobi',
      company: 'Tambee PVT LTD',
      role: 'subscriber',
      username: 'mmcnirlan16',
      country: 'Indonesia',
      contact: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      currentPlan: 'Virtual Account',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 44,
      billing: '2022-03-22 07:26:13',
      fullName: 'Nnamdi Eze',
      company: 'Centimia PVT LTD',
      role: 'subscriber',
      username: 'vkoschek17',
      country: 'Guatemala',
      contact: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      currentPlan: 'Master Card, Virtual Account',
      status: 'active',
      avatar: ''
    },
    {
      id: 45,
      billing: '2022-03-22 07:26:13',
      fullName: 'Fatima Duara',
      company: 'Flipopia PVT LTD',
      role: 'subscriber',
      username: 'cperot18',
      country: 'China',
      contact: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      currentPlan: 'Master Card, Virtual Account',
      status: 'pending',
      avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    },
    {
      id: 46,
      billing: '2022-03-22 07:26:13',
      fullName: 'Ahmed Suiabu',
      company: 'Skalith PVT LTD',
      role: 'subscriber',
      username: 'soffner19',
      country: 'Poland',
      contact: '(200) 586-2264',
      email: 'soffner19@mac.com',
      currentPlan: 'Master Card',
      status: 'pending',
      avatar: ''
    },
    {
      id: 47,
      billing: '2022-03-22 07:26:13',
      fullName: 'Victor Anisiobi',
      company: 'Feedfire PVT LTD',
      role: 'subscriber',
      username: 'kcourtliff1a',
      country: 'China',
      contact: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      currentPlan: 'Virtual Account',
      status: 'active',
      avatar: ''
    },
    {
      id: 48,
      billing: '2022-03-22 07:26:13',
      fullName: 'Tobiloba Adelakun',
      company: 'Thoughtmix PVT LTD',
      role: 'subscriber',
      username: 'owind1b',
      country: 'Ukraine',
      contact: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      currentPlan: 'Virtual Account',
      status: 'pending',
      avatar: ''
    },
    {
      id: 49,
      billing: '2022-03-22 07:26:13',
      fullName: 'Ladi Muhammed',
      company: 'Babbleblab PVT LTD',
      role: 'subscriber',
      username: 'pdurber1c',
      country: 'Sweden',
      contact: '070 1694 1275',
      email: 'pdurber1c@yahoo.com',
      currentPlan: 'Master Card, Virtual Account',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 50,
      billing: '2022-03-22 07:26:13',
      fullName: 'Shola Ayandee',
      company: 'Kaymbo PVT LTD',
      role: 'subscriber',
      username: 'bkrabbe1d',
      country: 'China',
      contact: '081 9294 5153',
      email: 'ayandee@gmail.com',
      currentPlan: 'VISA Card, Virtual Account',
      status: 'active',
      avatar: ''
    //   avatar: require('@src/assets/images/avatars/avatar-blank.png').default
    }
  ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-transactions').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)
  const highestValue = data.users.reduce((a, b) => (a.id > b.id ? a : b)).id

  user.id = highestValue + 1

  data.users.push(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/users/list/trans').reply(config => {
  const {
    q = '',
    page = 1,
    role = null,
    perPage = 10,
    sort = 'asc',
    status = null,
    currentPlan = null,
    sortColumn = 'fullName'
  } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()

  const dataAsc = data.users.sort((a, b) => (a[sortColumn] < b[sortColumn] ? -1 : 1))

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

  const filteredData = dataToFilter.filter(
    user =>
      (user.email.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.billing.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      total: filteredData.length,
      users: paginateArray(filteredData, perPage, page)
    }
  ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
