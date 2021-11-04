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
                     dataProgressbar: {
                         title: 'Credits (1kk)',
                         minValue: 0,
                         maxValue: 150,
                         divisionCount: 0,
                         step: 1,
                         price: 2,
                         sign: '+',
                         measure: '$'

                     },
                     isInput: true,
                     inputProgressbar: {
                        defaultValue: 10
                     }
                 }]

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

 export default calculator