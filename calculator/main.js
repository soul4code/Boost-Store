 const calculator = (template, code) => {
     const templates = {
         'options': {
             'dota-2-calibration-games': {
                 IS_EXTRA_OPTIONS: true,
                 EXTRA_OPTIONS: [{
                         ID: 1,
                         TITLE: 'fast leveling',
                         IS_PRICE: true,
                         PRICE: 25,
                         SIGN: '+',
                         MEASURE: '$',
                         INFO: 'abcd'
                         //  Убран BENEFIT 
                     },
                     {
                         ID: 2,
                         TITLE: 'personal reserves',
                         IS_PRICE: true,
                         PRICE: 15,
                         SIGN: '-',
                         MEASURE: '%',
                         INFO: 'abcd'
                         //  Убран BENEFIT 
                     },
                     {
                         ID: 3,
                         TITLE: 'winrate 60% or more',
                         IS_PRICE: true,
                         PRICE: 25,
                         SIGN: '+',
                         MEASURE: '%',
                         INFO: 'abcd'
                         //  Убран BENEFIT 
                     }
                 ],

                 IS_INPUT: true,
                 INPUT: [{
                     ID: 1,
                     IS_SELECT: true, //(если true, то это select и нужен SELECT_LIST, HEADER. если false, то это input, нужен только TITLE)
                     TITLE: 'WN8',
                     HEADER: 'Not selected',
                     SELECT_LIST: [{
                             ID: 1,
                             TEXT: 'Base',
                             IS_PRICE: false,
                         },
                         {
                             ID: 2,
                             TEXT: 'Unikum',
                             IS_PRICE: true,
                             PRICE: 25,
                             SIGN: '+',
                             MEASURE: '%'
                         },
                         {
                             ID: 3,
                             TEXT: 'Super Unikum',
                             IS_PRICE: true,
                             PRICE: 40,
                             SIGN: '+',
                             MEASURE: '%'
                         },

                     ]
                 },
                 {
                    ID: 2,
                    IS_SELECT: true, //(если true, то это select и нужен SELECT_LIST, HEADER. если false, то это input, нужен только TITLE)
                    TITLE: 'WN8',
                    HEADER: 'NOT selected',
                    SELECT_LIST: [{
                            ID: 1,
                            TEXT: 'Base',
                            IS_PRICE: false,
                        },
                        {
                            ID: 2,
                            TEXT: 'Unikum',
                            IS_PRICE: true,
                            PRICE: 25,
                            SIGN: '+',
                            MEASURE: '%'
                        },
                        {
                            ID: 3,
                            TEXT: 'Super Unikum',
                            IS_PRICE: true,
                            PRICE: 40,
                            SIGN: '+',
                            MEASURE: '%'
                        },

                    ]
                }, ],

                 IS_PROGRESSBAR: true,
                 PROGRESSBAR: [{
                         ID: 1,
                         DATA_PROGRESSBAR: {
                             TITLE: 'Credits (1kk)',
                             MIN_VALUE: 20,
                             MAX_VALUE: 150,
                             DENSITY: 5, //(через сколько единиц рисуются отметки на шкале)
                             STEP: 5,
                             PRICE: 5,
                             SIGN: '+',
                             MEASURE: '$',
                             DEFAULT_VALUE: 20,
                             DAYS_IN_COUNT: 2,
                         },
                         IS_INPUT: true, //(есть ли инпут рядом с прогрессбаром)
                     },
                     {
                         ID: 2,
                         DATA_PROGRESSBAR: {
                             TITLE: 'Test',
                             MIN_VALUE: 1,
                             MAX_VALUE: 150,
                             DENSITY: 2,
                             STEP: 1,
                             PRICE: 1,
                             SIGN: '+',
                             MEASURE: '$',
                             DEFAULT_VALUE: 10,
                             DAYS_IN_COUNT: 2,
                         },
                         IS_INPUT: true,
                     }
                 ],

             }


         },

         'progress': {
             ID: "1",
             NAME: "Dota 2 MMR Boosting",
             CODE: "dota-2-mmr-boosting",
             PROPERTY_CARD_TEMPLATE_VALUE: "progress",
             TITLE: null,
             DESCRIPTION: "С другой стороны рамки и место обучения кадров требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.",
             ADVANTAGES: [],
             IS_POSITION_LIST: true,
             POSITION_LIST: [{
                     ID: "83",
                     TEXT: "Herald",
                     IMG: "https://boost-center.com/upload/iblock/19a/79aw43m3ir7i06n7mwaf58d8ow7dgrbr.webp"
                 },
                 {
                     ID: "84",
                     TEXT: "Guardian",
                     IMG: "https://boost-center.com/upload/iblock/af6/e4vb2b8v3cmb20mhu3bqyxiomdxvxqrg.png"
                 },
                 {
                     ID: "85",
                     TEXT: "Crusader",
                     IMG: "https://boost-center.com/upload/iblock/033/56dtbjfxhjpbj139c1649vt8eoyn03t7.webp"
                 },
                 {
                     ID: "86",
                     TEXT: "Archon",
                     IMG: "https://boost-center.com/upload/iblock/dfc/fhbzpx65aj3a0b2ohjd3gj6a6jhfxtjr.png"
                 },
                 {
                     ID: "87",
                     TEXT: "Legend",
                     IMG: "https://boost-center.com/upload/iblock/b91/r3vzcrezq1dhjmfq0hmh774knp4ru5wa.webp"
                 },
                 {
                     ID: "88",
                     TEXT: "Ancient",
                     IMG: "https://boost-center.com/upload/iblock/6f1/l62ks0jmh8qcewtp84o3p1ndwkizdfiy.webp"
                 },
                 {
                     ID: "89",
                     TEXT: "Divine",
                     IMG: "https://boost-center.com/upload/iblock/68b/ms93wl0azvajp4757l2e1ofxtqbang6j.webp"
                 },
                 {
                     ID: "90",
                     TEXT: "Immortal",
                     IMG: "https://boost-center.com/upload/iblock/107/i8aaw4daa7l4uxe1u0u2sipne84norfm.webp"
                 }
             ],
             IS_EXTRA_OPTIONS: true,
             //  Изменения
             //  изменились EXTRA_OPTIONS
             EXTRA_OPTIONS: [{
                 ID: 1,
                 TITLE: 'fast leveling',
                 IS_PRICE: true,
                 PRICE: 25,
                 SIGN: '+',
                 MEASURE: '$',
                 INFO: 'abcd'
             }],
             //  Добавлено
             DEFAULT_VALUE_FIRST: 20,
             DEFAULT_VALUE_SECOND: 40,
             DENSITY: 5, //(через сколько единиц рисуются отметки на шкале)
             STEP: 5,
             PRICE: 5,
             SIGN: '+',
             MEASURE: '$',
             DAYS_IN_COUNT: 2,
         },

         'wot': {
             ID: "23",
             NAME: "Personal missions 1.0",
             CODE: "Personal-missions-1",
             PROPERTY_CARD_TEMPLATE_VALUE: "wot",
             TITLE: "Качаем ЛБЗ 1.0",
             DESCRIPTION: "Personal missions &quot;Long-Awaited Backup&quot;",
             ADVANTAGES: [{
                     TITLE: "Ad1_title",
                     DESCRIPTION: "Ad1_desc"
                 },
                 {
                     TITLE: "Ad2_title",
                     DESCRIPTION: "Ad2_desc"
                 },
                 {
                     TITLE: "Ad3_title",
                     DESCRIPTION: "Ad3_desc"
                 },
                 {
                     TITLE: "Ad4-title",
                     DESCRIPTION: "Ad4_desc"
                 }
             ],
             PERSONAL_MISSION: "1",
             CHOISE_TANKS: [{
                     MODEL: "Stug IV",
                     IMG_SMALL: "https://boost-center.com/upload/iblock/677/7ihaatch3ev3mrehuocqicpoyz1lwfsu.png",
                     IMG_LARGE: "https://boost-center.com/upload/iblock/24b/orxo6kguipr80nb6uoqwv01v73n5xfe1.png",
                     TYPE_TASKS: [{
                             //  добавился ID для TYPE_TASKS
                             ID: 1,
                             TITLE: "ЛТ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_1.png",
                             TASKS_LIST: {
                                 0: {
                                     ID: "73",
                                     TITLE: "ЛТ1",
                                     INFO: "",
                                     ADD_SERVICE: [{
                                         ID: "92",
                                         ADD_SERVICE_TITLE: "Какая-то услуга",
                                         //  изменился ADD_SERVICE_PRICE, добавилось ADD_SERVICE_MEASURE
                                         ADD_SERVICE_PRICE: 1,
                                         ADD_SERVICE_MEASURE: '$',
                                     }],
                                     //  изменился PRICE, добавилось MEASURE
                                     PRICE: 1,
                                     MEASURE: '$',
                                 },
                                 ALL_TANKS: {
                                     ID: 1,
                                     INFO: "Дополнительная информация",
                                     //  Тут, видимо перепутал местами ADD_SERVICE_TITLE и ADD_SERVICE_PRICE было вот так
                                     //  ADD_SERVICE_TITLE: "25",
                                     //  ADD_SERVICE_PRICE: "Доп. услуга при заказе оптом",
                                     PRICE: 210,
                                     //  если есть возможность, передай DISCOUNT числом, а не строкой
                                     DISCOUNT: "5"
                                 }
                             }
                         },
                         {
                             TITLE: "СР",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_2.png",
                             TASKS_LIST: {
                                 0: {
                                     ID: "82",
                                     TITLE: "СР1",
                                     INFO: "Миссия какая-то",
                                     ADD_SERVICE: null,
                                     PRICE: "50.00 RUB"
                                 },
                                 ALL_TANKS: {
                                     INFO: "Дополнительная информация",
                                     ADD_SERVICE_TITLE: "25",
                                     ADD_SERVICE_PRICE: "Доп. услуга при заказе оптом",
                                     PRICE: 50,
                                     DISCOUNT: "5"
                                 }
                             }
                         },
                         {
                             TITLE: "ТЖ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_3.png"
                         },
                         {
                             TITLE: "ПТ-САУ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_4.png"
                         },
                         {
                             TITLE: "САУ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_5.png"
                         }
                     ]
                 },
                 {
                     MODEL: "Т28 Concept",
                     IMG_SMALL: "https://boost-center.com/upload/iblock/caf/p66qx5ebx7vmlvnrntxlaq1dgp18dczg.png",
                     IMG_LARGE: "https://boost-center.com/upload/iblock/3b2/fws2ev3oz9iy2dmtuqdztqjh72u8xduc.png",
                     TYPE_TASKS: [{
                             TITLE: "ЛТ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_1.png",
                             TASKS_LIST: {
                                 0: {
                                     ID: "77",
                                     TITLE: "ЛТ1",
                                     INFO: "",
                                     ADD_SERVICE: null,
                                     PRICE: "70.00 RUB"
                                 },
                                 1: {
                                     ID: "78",
                                     TITLE: "ЛТ2",
                                     INFO: "",
                                     ADD_SERVICE: null,
                                     PRICE: "70.00 RUB"
                                 },
                                 2: {
                                     ID: "79",
                                     TITLE: "ЛТ3",
                                     INFO: "",
                                     ADD_SERVICE: null,
                                     PRICE: "70.00 RUB"
                                 },
                                 ALL_TANKS: {
                                     INFO: "Дополнительная информация",
                                     ADD_SERVICE_TITLE: "25",
                                     ADD_SERVICE_PRICE: "Доп. услуга при заказе оптом",
                                     PRICE: 210,
                                     DISCOUNT: "5"
                                 }
                             }
                         },
                         {
                             TITLE: "СР",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_2.png"
                         },
                         {
                             TITLE: "ТЖ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_3.png"
                         },
                         {
                             TITLE: "ПТ-САУ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_4.png"
                         },
                         {
                             TITLE: "САУ",
                             ICON: "https://boost-center.com/upload/imgtype/icon_mini_5.png"
                         }
                     ]
                 }
             ],
             IS_EXTRA_OPTIONS: true,
             EXTRA_OPTIONS: [{
                     ID: "80",
                     TITLE: "Стрим",
                     INFO: "Стрим во время буста",
                     //  Изменился PRICE в EXTRA_OPTIONS
                     IS_PRICE: true,
                     PRICE: 25,
                     SIGN: '+',
                     MEASURE: '$',
                 },
                 {
                     ID: "81",
                     TITLE: "Общение",
                     INFO: "Общение во время буста с заказчиком",
                     PRICE: "50.00 RUB"
                 }
             ]
         }
     }

     return templates[template][code]
 }

 //  итоговый калькулятор для суммирования
 export const endCalc = (list, name) => {
     let endPrice = 0
     for (let i = 0; i < list.length; i++) {
         if (list[i]) {
             if (name) {
                 endPrice += list[i][name];
             } else {
                 endPrice += list[i];
             }
         } else {
            endPrice+=0
         }
     }
     return Math.ceil(endPrice)
 }

 //  калькулятор цен для options
 export const calcPrice = (numbers, measure, price, sign) => {
     let allPrice = 0
     if (measure !== '%' && sign === '+') {
         allPrice += price * numbers
     } else if (measure === '%' && sign === '+') {
         allPrice += allPrice / 100 * numbers
     } else if (measure !== '%' && sign === '-') {
         allPrice -= price
     } else if (measure === '%' && sign === '-') {
         allPrice -= allPrice / 100 * numbers
     }

     return allPrice
 }

 //  калькулятор дней для options
 export const calcDays = (numbers, daysInCount, sign) => {
     let allDays = 0
     if (sign === '+') {
         allDays += numbers * daysInCount
     } else if (sign === '-') {
         allDays -= numbers * daysInCount
     }
     return allDays
 }

 //  калькулятор для select
 export const calculPriceAfterSelect = (currentPrice, price, sign, measure) => {
     let allPrice = currentPrice
     if (measure !== '%' && sign === '+') {
         allPrice += price
     } else if (measure === '%' && sign === '+') {
         allPrice += allPrice / 100 * price
     } else if (measure !== '%' && sign === '-') {
         allPrice -= price
     } else if (measure === '%' && sign === '-') {
         allPrice -= allPrice / 100 * price
     }

     return allPrice

 }

 //  калькулятор для extra options
 export const calculPriceAfterExtraOptions = (currentPrice, price, sign, measure) => {
     let allPrice = currentPrice
     let editPrice
     if (measure !== '%' && sign === '+') {
         allPrice += price

     } else if (measure === '%' && sign === '+') {
         allPrice += allPrice / 100 * price

     } else if (measure !== '%' && sign === '-') {
         allPrice -= price

     } else if (measure === '%' && sign === '-') {
         allPrice -= allPrice / 100 * price

     }
     editPrice = allPrice - currentPrice

     return editPrice

 }



 export default calculator