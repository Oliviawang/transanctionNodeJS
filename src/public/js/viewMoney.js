/**
 * Created by owang on 10/6/14.
 */
define(function (require) {
    'use strict';
    require('jquery.spin');
    require('spin');
    var template = require('templates/sendMoney.tmpl');
    var  vm = {};
    vm.load = function () {
        // bind clear event
        $('.content').append($(template()));
        vm.$form = $('#moneyForm');
        vm.$currency = $('#currency');
        vm.$clear = $('#clear');
        vm.$next = $('#next');
        vm.$spin = $('#loader');
        vm.$currencyDropDown = $('#dropdown');
        $('#clear').click(function () {
           var arr =  vm.$form.find('input');
           for(var i=0;i<arr.length;i++){
                arr.eq(i).val('');

            };
            vm.$form.find('input[type="textarea"]').val('');
            vm.$form.find('input[type="radio"]').eq(0).prop( "checked", true );
            vm.$currency.text('USD');
        });
        // use to manually post form data
        vm.$next.click(function (){
            vm.$spin.spin(vm.loadingOptions);
            $('body').addClass('darken');

            setTimeout(function(){
                $.ajax({
                    url:'/send-money',
                    method:'POST',
                    data:{
                        'to':$('input[name="to"]').val(),
                        'amount':$('input[name="amount"]').val(),
                        'currency':$('#currency').text()
                    },
                    beforeSend: function(){
                      //   vm.$spin.spin(vm.loadingOptions);
                      // $('body').addClass('darken');

                    },
                    complete: function(){
                        // Handle the complete event
                        vm.$spin.spin(false);
                        $('body').removeClass('darken');
                        window.location.href = '/succeed';
                    }

                });
            }, 500);

        });
        vm.$currencyDropDown.find('li').click(function(){
            var selected = $(this).find('a').html();
            vm.$currency.text(selected);
        });


    };
    vm.loadingOptions = {
        lines: 7,
        length: 0,
        width: 16,
        radius: 19,
        corners: 1,
        rotate: 14,
        direction: 1,
        color: '#000',
        speed: 1.1,
        trail: 48,
        shadow: false,
        hwaccel: false,
        className: 'spinner'
    };

    return vm;
});
