"use strict";
var hero_1 = require("./hero");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        // let heroes = [
        //   { id: 11, name: 'Pianino' },
        //   { id: 12, name: 'Franclin' },
        //   { id: 13, name: 'Super Mario' },
        //   { id: 14, name: 'Batman' },
        //   { id: 15, name: 'Chubaka' },
        //   { id: 16, name: 'Satana' },
        //   { id: 17, name: 'Splinter' },
        //   { id: 18, name: 'Legalas' },
        //   { id: 19, name: 'Zorro' },
        //   { id: 20, name: 'Marley' }
        // ];
        var heroes = [
            new hero_1.Hero(11, 'Pianino'),
            new hero_1.Hero(12, 'Franclin'),
            new hero_1.Hero(13, 'Super Mario'),
            new hero_1.Hero(14, 'Batman'),
            new hero_1.Hero(15, 'Chubaka'),
            new hero_1.Hero(16, 'Satana'),
            new hero_1.Hero(17, 'Splinter'),
            new hero_1.Hero(18, 'Legalas'),
            new hero_1.Hero(19, 'Zorro'),
            new hero_1.Hero(20, 'Marley')
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map