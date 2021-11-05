 const calculator = (template, code) => {
     const templates = {
         'options': {
             'dota-2-calibration-games': {
                 options: {
                     isOptions: true,
                     optionsList: [{
                             title: 'fast leveling',
                             isPrice: true,
                             price: 25,
                             sign: '+',
                             measure: '%',
                         },
                         {
                             title: 'personal reserves',
                             isPrice: true,
                             price: 15,
                             sign: '-',
                             measure: '%',
                         },
                         {
                             title: 'winrate 60% or more',
                             isPrice: true,
                             price: 25,
                             sign: '+',
                             measure: '%',
                         }
                     ]
                 },

                 input: [{
                     isSelect: true,
                     title: 'WN8',
                     header: 'Not selected',
                     selectList: [{
                             title: 'Base',
                             isPrice: false,
                         },
                         {
                             title: 'Unikum',
                             isPrice: true,
                             price: 25,
                             sign: '+',
                             measure: '%'
                         },
                         {
                             title: 'Super Unikum',
                             isPrice: true,
                             price: 40,
                             sign: '+',
                             measure: '%'
                         },

                     ]
                 }],

                 progressbar: [{
                         id: 1,
                         dataProgressbar: {
                             title: 'Credits (1kk)',
                             minValue: 20,
                             maxValue: 150,
                             density: 5,
                             step: 5,
                             price: 5,
                             sign: '+',
                             measure: '$',
                             defaultValue: 20,
                             daysInCount: 2,
                         },
                         isInput: true,
                     },
                     {
                         id: 2,
                         dataProgressbar: {
                             title: 'Test',
                             minValue: 0,
                             maxValue: 150,
                             density: 2,
                             step: 1,
                             price: 1,
                             sign: '+',
                             measure: '$',
                             defaultValue: 10,
                             daysInCount: 2,
                         },
                         isInput: true,
                     }
                 ],

             }


         },
         'progress': {
             'dota-2-mmr-boosting': {
                 counts: 100,
                 startValue: 1,
                 price: 2,
             }
         },
         'wot': {

         }
     }

     return templates[template][code]
 }

 //  итоговый калькулятор для суммирования
 export const endCalc = (list) => {
     let endPrice = 0
     for (let i = 0; i < list.length; i++) {
        endPrice += list[i].price;
     }
     return endPrice
 }

 //  калькулятор цен для options
 export const calcPrice = (price, measure, numbers, sign) => {
     let allPrice = 0
     if (measure === '$' && sign === '+') {
         allPrice += price * numbers
     } else if (measure === '%' && sign === '+') {
         allPrice += allPrice / 100 * numbers
     } else if (measure === '$' && sign === '-') {
         allPrice += allPrice - price
     } else if (measure === '%' && sign === '-') {
         allPrice -= allPrice / 100 * numbers
     }

     return allPrice
 }

 export default calculator