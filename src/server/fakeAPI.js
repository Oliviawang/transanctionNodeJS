/**
 * Created by owang on 10/7/14.
 */
'use strict';

var __ = require('lodash');

var ns = {};

/**
 * @typedef {Object} DataSearch
 * @property {String} key - the search key (property name)
 * @property {String} term - the search term (subset of proeprty value)
 */

ns ={
"0":{ uis:
    [

    {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

    },
    {
        date:'12/1/2013',
        user: 'StarBucks',
        amount:'$3.34',
        description:'pay StarBucks $3.34'

    },
        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }

]
},
"1":{ uis:
    [

        {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }, {
        date:'12/1/2013',
        user: 'StarBucks',
        amount:'$3.34',
        description:'pay StarBucks $3.34'

    }
        ,   {
        date:'12/5/2013',
        user: 'John Smith',
        amount:'$123.45',
        description:'pay $123.45 to John Smith'

    },
        {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
    ]
},
 "2":{ uis:
     [

         {
             date:'12/5/2013',
             user: 'John Smith',
             amount:'$123.45',
             description:'pay $123.45 to John Smith'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }, {
         date:'12/1/2013',
         user: 'StarBucks',
         amount:'$3.34',
         description:'pay StarBucks $3.34'

     }
         ,   {
         date:'12/5/2013',
         user: 'John Smith',
         amount:'$123.45',
         description:'pay $123.45 to John Smith'

     },
         {
             date:'12/1/2013',
             user: 'StarBucks',
             amount:'$3.34',
             description:'pay StarBucks $3.34'

         }
     ]
 },
    "3":{ uis:
        [

            {
                date:'12/5/2013',
                user: 'John Smith',
                amount:'$123.45',
                description:'pay $123.45 to John Smith'

            },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            }
            ,   {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            }, {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
            ,   {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            }
            ,   {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            }, {
            date:'12/1/2013',
            user: 'StarBucks',
            amount:'$3.34',
            description:'pay StarBucks $3.34'

        }
            ,   {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            }
            ,   {
            date:'12/5/2013',
            user: 'John Smith',
            amount:'$123.45',
            description:'pay $123.45 to John Smith'

        },
            {
                date:'12/1/2013',
                user: 'StarBucks',
                amount:'$3.34',
                description:'pay StarBucks $3.34'

            }
        ]
    }
};

/**
 * Get matching elements from given Array where search.term exists
 * in the value at search.key
 * @param {Object[]} objects - the original Array of objects to filter
 * @param {DataSearch} search - the search key and term
 * @returns {Object[]} the filtered Array
 */
ns.filterArray = function (objects, search) {
    return __.filter(objects, function (object) {
        var searchValue = object[search.key].toString().toLowerCase();
        return searchValue.indexOf(search.term.toString().toLowerCase()) > -1;
    });
};

/**
 * Get an Array of objects based on the text search
 * @param {String} type - the type of data to fetch
 * @param {DataSearch} [search] - the search key and term
 * @returns {Object[]} an Array of objects matching the search
 */
ns.getObjects = function (type, search) {
    var objects = ns[type];
    return (search) ? ns.filterArray(objects, search) : objects;
};

module.exports = ns;