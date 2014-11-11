/**
 * Created by owang on 10/7/14.
 */
define(function (require) {
    'use strict';
    require('waypoints');
    var template = require('templates/tranList.tmpl');
    var vt  = {};
    vt.load = function () {
        vt.page = 0;

        vt.$list= $('#tran-list');
        $.get('/api/v1/transaction/'+vt.page, function (val){
            vt.$list.append($(template(val)));
            vt.page+=1;
            vt.bindEvent();
        });


    };

    vt.bindEvent = function (){
        // toggle details
        $(document).on('click', '.list-item',function() {
            $(this).children('ul').toggle('slow');
        });
        $('#tran-list').waypoint({
            offset: 'bottom-in-view',
            handler:function (direction) {
            if(direction === 'down'){
                $.get('/api/v1/transaction/'+vt.page, function (val){
                    vt.$list.append($(template(val)));
                    vt.page+=1;
                });
            }
        }
        });

    };
    return vt;
});
