/**
 * Created by owang on 10/8/14.
 */
define(function (require) {
    var template = require('templates/tranList.tmpl');
    var vt = require('viewTransaction');
    var container, deferred;
    var data ={
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

                }
            ]
        }
    };
    var getBaseUrl = function() {
        return window.location.protocol + '//' + window.location.host + '/';
    };
    describe('View Transaction History', function () {

        beforeEach(function() {
            container = $('<div class="content"></div>').appendTo('body');
            $('<div id="tran-list"></div>').appendTo(container);
            vt.load();
        });

        afterEach(function () {
           container.remove();
        });

        describe('Initialize', function () {
            var resp;

           it('show transaction list before loading data', function (){
               expect($('#tran-list').html()).toBe('');
           });
           it('after loading fake API', function (){

               for(var prop in data){
                   vt.$list.append($(template(data[prop])));
               }
               expect(vt.$list.find('.list-item').length).toBe(4);
           });
        });
    });
});