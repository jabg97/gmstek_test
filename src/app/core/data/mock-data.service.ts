import {
  Injectable
} from '@angular/core';
import {
  InMemoryDbService
} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  constructor() {}
  createDb() {

    let transactions = [{
      _id: 1,
      date: '2021-09-25',
      merch_invoice: 123456,
      merchant: 'ABC Fuel Company',
      location: 'Miami International Airport',
      icao_iata: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Fuel & Services',
      total: '8699.50',
      card: 'AIR Card®1234',
      status: 'New',
      images: [{
          img: 'https://via.placeholder.com/600.png/09f/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/021/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/321/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/422/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/654/fff'
        },
      ]
    }, {
      _id: 2,
      date: '2021-09-25',
      merch_invoice: 542141,
      merchant: 'DEF Fuel Company',
      location: 'Miami International Airport',
      icao_iata: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Services',
      total: '324.11',
      card: 'AIR Card®1234',
      status: 'New',
      images: [{
          img: 'https://via.placeholder.com/600.png/09f/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/654/fff'
        },
      ]
    }, {
      _id: 3,
      date: '2021-09-25',
      merch_invoice: 123456,
      merchant: 'ABC Fuel Company',
      location: 'Miami International Airport',
      icao_iata: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Services',
      total: '327.45',
      card: 'AIR Card®1234',
      status: 'New',
      images: [{
        img: 'https://via.placeholder.com/600.png/654/fff'
      }, ]
    }, {
      _id: 4,
      date: '2021-09-25',
      merch_invoice: 777222,
      merchant: 'DEF Fuel Company',
      location: 'Miami International Airport',
      icao_iata: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Fuel & Services',
      total: '7692.17',
      card: 'AIR Card®1234',
      status: 'New',
      images: [{
          img: 'https://via.placeholder.com/600.png/021/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/321/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/654/fff'
        },
      ]
    }, {
      _id: 5,
      date: '2021-09-25',
      merch_invoice: 123456,
      merchant: 'ABC Fuel Company',
      location: 'Miami International Airport',
      icao_iata: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Fuel & Services',
      total: '8699.50',
      card: 'AIR Card®1234',
      status: 'New',
    }, {
      _id: 6,
      date: '2021-09-25',
      merch_invoice: 542141,
      merchant: 'DEF Fuel Company',
      location: 'Miami International Airport',
      icao_iata: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Services',
      total: '501.02',
      card: 'AIR Card®1234',
      status: 'New',
      images: [{
          img: 'https://via.placeholder.com/600.png/422/fff'
        },
        {
          img: 'https://via.placeholder.com/600.png/321/fff'
        },

        {
          img: 'https://via.placeholder.com/600.png/654/fff'
        },
      ]
    }];

    let details = [{
        _id: 1,
        merchant_description: 'JetA',
        product_code: 9130013054097,
        quantity: '1,926 gal',
        retail_price: '4.36',
        gov_price: '4.36',
        amount: '8397.36',
        transaction_id: 1,
      }, {
        _id: 2,
        merchant_description: 'Cleaning',
        product_code: 123456,
        quantity: 'FP217',
        retail_price: '324.11',
        gov_price: '302.14',
        amount: '302.14',
        transaction_id: 1,
      },
      {
        _id: 3,
        merchant_description: 'Fix Brakes',
        product_code: 224123456,
        quantity: 'FP2333',
        retail_price: '324.11',
        gov_price: '302.14',
        amount: '302.14',
        transaction_id: 2,
      },
      {
        _id: 4,
        merchant_description: 'Fix Engine',
        product_code: 9130013054097,
        quantity: '1,926 gal',
        retail_price: '4.36',
        gov_price: '4.36',
        amount: '8397.36',
        transaction_id: 3,
      }, {
        _id: 5,
        merchant_description: 'Cleaning',
        product_code: 922123456,
        quantity: 'VFP2173',
        retail_price: '324.11',
        gov_price: '502.14',
        amount: '502.14',
        transaction_id: 5,
      },
      {
        _id: 6,
        merchant_description: 'Cleaning',
        product_code: 775123456,
        quantity: 'RFP217',
        retail_price: '324.11',
        gov_price: '102.14',
        amount: '102.14',
        transaction_id: 6,
      },
    ];

    let histories = [{
      _id: 1,
      event: 'Transaction Created',
      date_time: '2021-09-25 08:15:00',
      transaction_id: 1
    },{
      _id: 2,
      event: 'Transaction Delayed',
      date_time: '2021-09-25 08:15:00',
      transaction_id: 1
    },{
      _id: 3,
      event: 'Transaction Created',
      date_time: '2021-09-25 08:15:00',
      transaction_id: 2
    },{
      _id: 4,
      event: 'Transaction Delayed',
      date_time: '2021-09-25 08:15:00',
      transaction_id: 2
    },{
      _id: 5,
      event: 'Transaction Created',
      date_time: '2021-09-25 08:15:00',
      transaction_id: 3
    },{
      _id: 6,
      event: 'Transaction Delayed',
      date_time: '2018-01-30 08:15:00',
      transaction_id: 3
    },{
      _id: 7,
      event: 'Transaction Created',
      date_time: '2018-01-30 08:15:00',
      transaction_id: 4
    },
    {
      _id: 8,
      event: 'Transaction Delayed',
      date_time: '2021-09-25 08:15:00',
      transaction_id: 4
    },
    {
      _id: 9,
      event: 'Transaction Created',
      date_time: '2018-01-12 08:15:00',
      transaction_id: 5
    },
    {
      _id: 10,
      event: 'Transaction Delayed',
      date_time: '2018-01-25 08:15:00',
      transaction_id: 5
    },
    {
      _id: 11,
      event: 'Transaction Created',
      date_time: '2014-04-06 08:15:00',
      transaction_id: 6
    },
    {
      _id: 12,
      event: 'Transaction Delayed',
      date_time: '2014-04-06 08:15:00',
      transaction_id: 6
    },
  ];
    return {
      transactions,
      details,
      histories
    };

  }
}
