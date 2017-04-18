/**
 * Created by Richard on 4/17/2017.
 */
var esriAngularApp = angular.module('esriAngularApp', ['esri.map']);

esriAngularApp.controller('esriAngularApp', function(esriLoader) {
    var self = this;

    esriLoader.require(['esri/Map', 'esri/WebMap'], function(Map, WebMap) {

        self.webmap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: "e691172598f04ea8881cd2a4adaa45ba"
            }
        });

        self.map = self.webmap;
    });
});