const calEaster = require("./calEaster");
const DAY_IN_MIL = 24 * 60 * 60 * 1000;

function acordingToEaster (year) {
     
    const easter = calEaster(year);
    return {
        juevesSanto: easter - (3 * DAY_IN_MIL),
        viernesSanto: easter - (2 * DAY_IN_MIL),
        ascencionDeJesus: easter + (43 * DAY_IN_MIL),
        corpusChristi: easter + (64 * DAY_IN_MIL),
        sagradoCorazonDeJesus: easter + (71 * DAY_IN_MIL)
    }
}
function static (year) {

    return {
        añoNuevo: new Date (year, 0, 1).getTime(),
        diaDelTrabajo: new Date (year, 4, 1).getTime(),
        diaDeLaIndependencia: new Date (year, 7, 20).getTime(),
        batallaDeBoyaca: new Date (year, 7, 8).getTime(),
        inmaculadaConcepcion: new Date (year, 11, 8).getTime(),
        navidad: new Date (year, 11, 25).getTime()
    }
}
function dynamic(year) {
  
};



module.exports = {
    acordingToEaster,
    static,
    dynamic
}