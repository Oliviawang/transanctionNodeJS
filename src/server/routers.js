/**
 * Created by owang on 10/6/14.
 */

'use strict';


var config = require('./config');
var appName = config.get('app');
var data = require('./fakeAPI');
var COPY = 'Copyright &copy; 2014 Cyan&comma; Inc&period; All Rights Reserved&period;';
/** @exports routes */
var ns = {};
/**
 * Configure the routes for the app
 * @param {ExpressApp} app - the expressjs app to configure
 */
ns.configure = function (app) {

    //initial
    app.get('/', function(req, res) {
        res.redirect('/index');
    });
    app.get('/index', function(req, res) {
        res.render('index', {
            static: '/static',
            base:'/base',
            title:'Initial Page'

        });
    });
    app.get('/send-money', function(req, res) {

        res.render('sendMoney', {
            static: '/static',
            base:'/base',
            title:'Send Money'

        });
    });
    app.post('/send-money', function(req, res) {

        res.cookie('to', req.body.to);
        res.cookie('amount', req.body.amount);
        res.cookie('currency', req.body.currency);
        res.redirect('/succeed');
    });

    //success
    app.get('/succeed', function(req, res) {

            res.render('success',  {
                static: '/static',
                base:'/base',
                title:'Send Money',
                to: req.cookies.to,
                amount:req.cookies.amount,
                currency:req.cookies.currency
            });

    });
    // view transaction history ---------------------------------------------
    app.get('/view-transaction', function(req, res) {
        res.render('viewTransaction', {
            base:'/base',
            static:'/static',
            title:'Transaction History'
        });
    });



    // API Proxy -----------------------------------------
    app.get('/api/v1/transaction/:page', function (req, res) {

        var page = req.params.page;
        res.json(data[page]);
    });
    app.all('/'+appName+'/api/*', function (req, res) {
        return api.proxyRequest(req, res);
    });

};
ns.data = {'apps':
    [
        {
            'name': 'Cyan Training',
            'icon': '/static/img/CC_Training.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'cyan-training'
        },
        {
            'name':'CyRequests',
            'icon': '/static/img/CC_CyRequests.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'cyan-request'
        },
        {
            'name':'API Documentation',
            'icon': '/static/img/CC_API-Documentation.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description' :'Get support for your Cyan applications',
            'label':'api-doc'
        },
        {
            'name':'Planet Sim',
            'icon':'/static/img/CC_PlanetSim.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'planet-sim'
        },
        {
            'name': 'Cyan Website',
            'icon': '/static/img/CC_CyWebsite.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'cyan-website'
        },
        {
            'name': 'Partner Portal',
            'icon': '/static/img/CC_PartnerPortal.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'partner-portal'
        },
        {
            'name': 'Planet Design',
            'icon': '/static/img/CC_PlanetDesign.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label': 'planet-design'
        },
        {
            'name': 'Cyan Experience',
            'icon': '/static/img/CC_Experience.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label': 'cy-experience'
        },
        {
            'name': 'Planet Mobility',
            'icon': '/static/img/CC_PlanetMobility.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'planet-mobility'
        },
        {
            'name': 'Cyan Community',
            'icon': '/static/img/CC_Community.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'cy-community'
        },
        {
            'name': 'Blue Planet Pricing',
            'icon': '/static/img/CC_BP-Pricing.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'bp-pricing'
        },
        {
            'name':'Planet View',
            'icon': '/static/img/CC_PlanetView.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'planet-view'
        },
        {
            'name': 'CyLibrary',
            'icon': '/static/img/CC_CyLibrary.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description': 'Get support for your Cyan applications',
            'label': 'cy-library'
        },
        {
            'name':'Statistics',
            'icon':'/static/img/CC_Statistics.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'statistics'
        },
        {
            'name':'Cyan Shopping',
            'icon': '/static/img/CC_CyStore.png',
            'uri': 'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'cy-shop'
        },
        {
            'name':'Planet Inventory',
            'icon':'/static/img/CC_PlanetInventory.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'planet-inventory'
        },
        {
            'name':'Sales Administration',
            'icon':'/static/img/CC_SalesAdmin.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label': 'sales-admin'
        },
        {
            'name':'Software Downloads',
            'icon':'/static/img/CC_SoftwareDownload.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'nagios'
        },
        {
            'name':'Showcase',
            'icon':'/static/img/CC_Showcase.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'showcase'
        },
        {
            'name':'CyQuotes',
            'icon':'/static/img/CC_Quotes.png',
            'uri':'http://cymsserver32.lab.cyanoptics.com:8001/sitemanager/v2',
            'description':'Get support for your Cyan applications',
            'label':'cy-quotes'
        }
    ]};

module.exports = ns;

