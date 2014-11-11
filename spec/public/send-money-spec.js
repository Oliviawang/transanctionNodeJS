/**
 * Created by owang on 10/8/14.
 */
/*eslint max-nested-callbacks:[2,4]*/
/*global $ */
define(function (require) {
    var Q = require('q-xhr');
    var vm = require('viewMoney');

    var getBaseUrl = function() {
        return window.location.protocol + '//' + window.location.host + '/';
    };
    describe('View Money', function () {
        var deferred;
        beforeEach(function() {
            spyOn(Q.xhr, 'get').and.callFake(function () {
                deferred = Q.defer();
                return deferred.promise;
            });
            $('<div class="content"></div>').appendTo('body');
            vm.load();
        });

        afterEach(function () {
            $('body').empty();
        });

        describe('Change currency successfully', function () {
            it('By default', function () {
               expect(vm.$currency.text()).toEqual('USD');
            });
            it('Choose CAD in dropdown', function () {
                vm.$currencyDropDown.find('li').eq(2).click();
                expect(vm.$currency.text()).toEqual('CAD');
            });
        });
        describe('Clear form successfully', function () {

            beforeEach(function() {
                $('input[name="to"]').val('David');
                $('input[name="amount"]').val('1000');
                vm.$currencyDropDown.find('li').eq(1).click();
            });
            it('By default', function () {
                expect($('input[name="to"]').val()).toEqual('David');
                expect($('input[name="amount"]').val()).toEqual('1000');
                expect(vm.$currency.text()).toEqual('CNY');
            });
            it('Click clear button', function () {
                vm.$clear.click();
                expect($('input[name="to"]').val()).toEqual('');
                expect($('input[name="amount"]').val()).toEqual('');
                expect(vm.$currency.text()).toEqual('USD');
            });
        });
        describe('Click next button', function () {
            beforeEach(function() {
                $('input[name="to"]').val('David');
                $('input[name="amount"]').val('1000');
                vm.$currencyDropDown.find('li').eq(1).click();
            });
            it('post form', function () {
                vm.$next.click();
                it('makes the appropriate xhr call', function () {
                    expect(Q.xhr.get).toHaveBeenCalledWith(getBaseUrl() + 'send-money');
                });
            });
        });

    });
});
