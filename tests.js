'use strict';

const wwtlib = require('./wwtlib/index.js');
const aa = require('./aa-js/aa-js.js');
const inputs = require('./test_inputs.json');

const HOURS_TO_DEGREES = 15;
const AU_IN_KM = 149597870.7;
const MOON_SEMIDIAMETER_TO_PARALLAX_RATIO = 0.272481;
const EARTH_RADIUS_IN_METERS =  6_378_149 // 6300 km

function toJulianDay(dateOrJd) {
    if (typeof dateOrJd === 'number') {
        return dateOrJd;
    }
    return aa.juliandays.getJulianDay(dateOrJd);
}

function utcDayStartJd(jd) {
    return Math.floor(jd - 0.5) + 0.5;
}

function normalizeWwtRiseSet(wwtRiseSetDetails, jdStart, refAltitude) {
    if (!wwtRiseSetDetails.bValid) {
        return {
            rise: { utc: undefined, julianDay: undefined },
            transit: {
                utc: undefined,
                julianDay: undefined,
                altitude: undefined,
                refAltitude,
                isAboveHorizon: false,
                isAboveAltitude: false,
                isCircumpolar: !wwtRiseSetDetails.bNeverRises,
                internals: { m0: undefined, cosH0: undefined },
            },
            set: { utc: undefined, julianDay: undefined },
        };
    }

    return {
        rise: {
            utc: wwtRiseSetDetails.rise,
            julianDay: jdStart + wwtRiseSetDetails.rise / 24,
        },
        transit: {
            utc: wwtRiseSetDetails.transit,
            julianDay: jdStart + wwtRiseSetDetails.transit / 24,
            altitude: undefined,
            refAltitude,
            isAboveHorizon: true,
            isAboveAltitude: true,
            isCircumpolar: false,
            internals: { m0: undefined, cosH0: undefined },
        },
        set: {
            utc: wwtRiseSetDetails.set,
            julianDay: jdStart + wwtRiseSetDetails.set / 24,
        },
    };
}

function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`
}

function getMethodsForPlanet(planetName) {
    const aaObj = aa[capitalize(planetName.toLowerCase())];
    const wwtObj = wwtlib[`CAA${capitalize(planetName.toLowerCase())}`];
    return {
        eclipticLongitude: {
            aa: (jd, loc) => aaObj.getEclipticLongitude(jd),
            wwt: (jd, loc) => wwtObj.eclipticLongitude(jd),
        },
        eclipticLatitude: {
            aa: (jd, loc) => aaObj.getEclipticLatitude(jd),
            wwt: (jd, loc) => wwtObj.eclipticLatitude(jd),
        },
        apparentGeocentricLongitude: {
            aa: (jd, loc) => aaObj.getApparentGeocentricEclipticCoordinates(jd).longitude,
            wwt: (jd, loc) => wwtlib.ELL.calculate(jd, wwtlib.SolarSystemObjects[planetName.toLowerCase()]).apparentGeocentricLongitude,
        },
        apparentGeocentricLatitude: {
            aa: (jd, loc) => aaObj.getApparentGeocentricEclipticCoordinates(jd).latitude,
            wwt: (jd, loc) => wwtlib.ELL.calculate(jd, wwtlib.SolarSystemObjects[planetName.toLowerCase()]).apparentGeocentricLatitude,
        },
        apparentGeocentricDistance: {
            aa: (jd, loc) => aaObj.getGeocentricDistance(jd),
            wwt: (jd, loc) => wwtlib.ELL.calculate(jd, wwtlib.SolarSystemObjects[planetName.toLowerCase()]).apparentGeocentricDistance,
        },
        apparentGeocentricRightAscension: {
            aa: (jd, loc) => aaObj.getApparentGeocentricEquatorialCoordinates(jd).rightAscension,
            wwt: (jd, loc) => wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects[planetName.toLowerCase()], 0, 0, -EARTH_RADIUS_IN_METERS).RA * HOURS_TO_DEGREES,
        },
        apparentGeocentricDeclination: {
            aa: (jd, loc) => aaObj.getApparentGeocentricEquatorialCoordinates(jd).declination,
            wwt: (jd, loc) => wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects[planetName.toLowerCase()], 0, 0, -EARTH_RADIUS_IN_METERS).dec,
        },
        riseTransitSet: {
            // so this method is using "GEOCENTRIC coordinates"
            aa: (jd, loc) => aaObj.getAccurateRiseTransitSet(jd, loc),
            wwt: (jd, loc) => {
                // Source: AstroCalc.getRiseTransitSet + AstroCalc.getPlanet(SolarSystemObjects[planetName.toLowerCase()])
                const jdStart = utcDayStartJd(jd);
                const jdStartDynamical = jdStart + wwtlib.DYT.deltaT(jdStart) / 86400;
                // this is topocentric
                const d1 = wwtlib.AstroCalc.getPlanet(jdStartDynamical - 1, wwtlib.SolarSystemObjects[planetName.toLowerCase()], loc.latitude, loc.longitude, loc.height);
                const d2 = wwtlib.AstroCalc.getPlanet(jdStartDynamical, wwtlib.SolarSystemObjects[planetName.toLowerCase()], loc.latitude, loc.longitude, loc.height);
                const d3 = wwtlib.AstroCalc.getPlanet(jdStartDynamical + 1, wwtlib.SolarSystemObjects[planetName.toLowerCase()], loc.latitude, loc.longitude, loc.height);
                const rs = wwtlib.AstroCalc.getRiseTransitSet( jdStart, loc.latitude, -loc.longitude, d1.RA, d1.dec, d2.RA, d2.dec, d3.RA, d3.dec, 0);
                return normalizeWwtRiseSet(rs, jdStart, -0.5667);
            },
        },
    }
}

const planetsMethods = {
    mercury: getMethodsForPlanet('mercury'),
    venus: getMethodsForPlanet('venus'),
    mars: getMethodsForPlanet('mars'),
    jupiter: getMethodsForPlanet('jupiter'),
    saturn: getMethodsForPlanet('saturn'),
    uranus: getMethodsForPlanet('uranus'),
    neptune: getMethodsForPlanet('neptune'),
    pluto: getMethodsForPlanet('pluto'),
};

const sunMethods = {
    geometricEclipticLongitude: {
        aa: (jd, loc) => aa.Sun.getGeometricEclipticLongitude(jd),
        wwt: (jd, loc) => wwtlib.CAASun.geometricEclipticLongitude(jd),
    },
    geometricEclipticLatitude: {
        aa: (jd, loc) => aa.Sun.getGeocentricEclipticLatitude(jd),
        wwt: (jd, loc) => wwtlib.CAASun.geometricEclipticLatitude(jd),
    },
    apparentEclipticLongitude: {
        aa: (jd, loc) => aa.Sun.getApparentGeocentricEclipticLongitude(jd),
        wwt: (jd, loc) => wwtlib.CAASun.apparentEclipticLongitude(jd),
    },
    apparentEclipticLatitude: {
        aa: (jd, loc) => aa.Sun.getApparentGeocentricEclipticLatitude(jd),
        wwt: (jd, loc) => wwtlib.CAASun.apparentEclipticLatitude(jd),
    },
    apparentGeocentricRightAscension: {
        aa: (jd, loc) => aa.Sun.getApparentGeocentricEquatorialCoordinates(jd).rightAscension,
        wwt: (jd, loc) => {
            // Source: AstroCalc.getPlanet(...SolarSystemObjects.sun).RA
            return wwtlib.AstroCalc.getPlanet( jd, wwtlib.SolarSystemObjects.sun, 0, 0, -EARTH_RADIUS_IN_METERS).RA * HOURS_TO_DEGREES;
        },
    },
    apparentGeocentricDeclination: {
        aa: (jd, loc) => aa.Sun.getApparentGeocentricEquatorialCoordinates(jd).declination,
        wwt: (jd, loc) => wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects.sun, 0, 0, -EARTH_RADIUS_IN_METERS).dec,
    },
    riseTransitSet: {
        aa: (jd, loc) => {
            // get geocentric coordinates
            const jdMidnightDynamical = aa.juliandays.getJulianDayMidnightDynamicalTime(jd);
            const eq1 = aa.Sun.getApparentGeocentricEquatorialCoordinates(jdMidnightDynamical - 1);
            const eq2 = aa.Sun.getApparentGeocentricEquatorialCoordinates(jdMidnightDynamical);
            const eq3 = aa.Sun.getApparentGeocentricEquatorialCoordinates(jdMidnightDynamical + 1);
            return aa.risetransitset.getAccurateRiseTransitSetTimes(
                jd,
                [
                    { rightAscension: eq1.rightAscension, declination: eq1.declination },
                    { rightAscension: eq2.rightAscension, declination: eq2.declination },
                    { rightAscension: eq3.rightAscension, declination: eq3.declination },
                ],
                loc,
                aa.STANDARD_ALTITUDE_SUN
            );
        },
        wwt: (jd, loc) => {
            // Source: AstroCalc.getRiseTransitSet + AstroCalc.getPlanet(SolarSystemObjects.sun)
            const jdStart = utcDayStartJd(jd);
            const jdStartDynamical = jdStart + wwtlib.DYT.deltaT(jdStart) / 86400;
            const d1 = wwtlib.AstroCalc.getPlanet(jdStartDynamical - 1, wwtlib.SolarSystemObjects.sun, loc.latitude, loc.longitude, loc.height);
            const d2 = wwtlib.AstroCalc.getPlanet(jdStartDynamical, wwtlib.SolarSystemObjects.sun, loc.latitude, loc.longitude, loc.height);
            const d3 = wwtlib.AstroCalc.getPlanet(jdStartDynamical + 1, wwtlib.SolarSystemObjects.sun, loc.latitude, loc.longitude, loc.height);
            
            const rs = wwtlib.AstroCalc.getRiseTransitSet( jdStart, loc.latitude, -loc.longitude, d1.RA, d1.dec, d2.RA, d2.dec, d3.RA, d3.dec, 1);
            return normalizeWwtRiseSet(rs, jdStart, -0.8333);
        },
    },
};

const earthMethods = {
    eclipticLongitude: {
        aa: (jd, loc) => aa.Earth.getEclipticLongitude(jd),
        wwt: (jd, loc) => wwtlib.CAAEarth.eclipticLongitude(jd),
    },
    eclipticLatitude: {
        aa: (jd, loc) => aa.Earth.getEclipticLatitude(jd),
        wwt: (jd, loc) => wwtlib.CAAEarth.eclipticLatitude(jd),
    },
    radiusVector: {
        aa: (jd, loc) => aa.Earth.getRadiusVector(jd),
        wwt: (jd, loc) => wwtlib.CAAEarth.radiusVector(jd),
    },
    meanObliquityOfEcliptic: {
        aa: (jd, loc) => aa.Earth.getMeanObliquityOfEcliptic(jd),
        wwt: (jd, loc) => wwtlib.CAANutation.meanObliquityOfEcliptic(jd),
    },
    trueObliquityOfEcliptic: {
        aa: (jd, loc) => aa.Earth.getTrueObliquityOfEcliptic(jd),
        wwt: (jd, loc) => wwtlib.CAANutation.trueObliquityOfEcliptic(jd),
    },
    nutationInLongitude: {
        aa: (jd, loc) => aa.Earth.getNutationInLongitude(jd),
        wwt: (jd, loc) => wwtlib.CAANutation.nutationInLongitude(jd),
    },
    nutationInObliquity: {
        aa: (jd, loc) => aa.Earth.getNutationInObliquity(jd),
        wwt: (jd, loc) => wwtlib.CAANutation.nutationInObliquity(jd),
    },
};

const moonMethods = {
    geocentricEclipticLongitude: {
        aa: (jd, loc) => aa.Earth.Moon.getGeocentricEclipticLongitude(jd),
        wwt: (jd, loc) => wwtlib.CAAMoon.eclipticLongitude(jd),
    },
    geocentricEclipticLatitude: {
        aa: (jd, loc) => aa.Earth.Moon.getGeocentricEclipticLatitude(jd),
        wwt: (jd, loc) => wwtlib.CAAMoon.eclipticLatitude(jd),
    },
    geocentricDistanceKm: {
        aa: (jd, loc) => aa.Earth.Moon.getRadiusVectorInKilometer(jd),
        wwt: (jd, loc) => wwtlib.CAAMoon.radiusVector(jd),
    },
    geocentricRightAscension: {
        aa: (jd, loc) => aa.Earth.Moon.getApparentGeocentricEquatorialCoordinates(jd).rightAscension,
        wwt: (jd, loc) => wwtlib.AstroCalc.getPlanet( jd, wwtlib.SolarSystemObjects.moon, 0, 0, -EARTH_RADIUS_IN_METERS).RA * HOURS_TO_DEGREES,
    },
    geocentricDeclination: {
        aa: (jd, loc) => aa.Earth.Moon.getApparentGeocentricEquatorialCoordinates(jd).declination,
        wwt: (jd, loc) => wwtlib.AstroCalc.getPlanet( jd, wwtlib.SolarSystemObjects.moon, 0, 0, -EARTH_RADIUS_IN_METERS).dec,
    },
    phaseAngle: {
        // getPhaseAngle uses getGeocentricEquatorialCoordinates
        aa: (jd, loc) => aa.Earth.Moon.getPhaseAngle(jd),
        wwt: (jd, loc) => {
            // Source: MIFR.phaseAngle + AstroCalc.getPlanet(SolarSystemObjects.moon/sun)
            // geocentric, sink to center of the earth, 0, 0. seet Planets.getPlanet3dLocationJD
            const moon = wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects.moon, 0, 0, -EARTH_RADIUS_IN_METERS);
            const sun = wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects.sun, 0, 0, -EARTH_RADIUS_IN_METERS);
            const moonDistanceAu = moon.distance;
            const earthSunDistance = wwtlib.CAAEarth.radiusVector(jd);
            const elongation = wwtlib.MIFR.geocentricElongation( moon.RA, moon.dec, sun.RA, sun.dec);
            // see AATest.cpp for call signature
            return wwtlib.MIFR.phaseAngle(elongation, moonDistanceAu, earthSunDistance);
        },
    },
    illuminatedFraction: {
        aa: (jd, loc) => aa.Earth.Moon.getIlluminatedFraction(jd),
        wwt: (jd, loc) => {
            // Source: MIFR.illuminatedFraction + AstroCalc.getPlanet(SolarSystemObjects.moon/sun)
            // get the phase angle
            const moon = wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects.moon, 0, 0, -EARTH_RADIUS_IN_METERS);
            const sun = wwtlib.AstroCalc.getPlanet(jd, wwtlib.SolarSystemObjects.sun, 0, 0, -EARTH_RADIUS_IN_METERS);
            const moonDistanceAu = moon.distance;
            const earthSunDistance = wwtlib.CAAEarth.radiusVector(jd);
            const elongation = wwtlib.MIFR.geocentricElongation( moon.RA, moon.dec, sun.RA, sun.dec);
            const phase = wwtlib.MIFR.phaseAngle(elongation, moonDistanceAu, earthSunDistance);
            return wwtlib.MIFR.illuminatedFraction(phase);
        },
    },
    equatorialHorizontalParallax: {
        aa: (jd, loc) => aa.Earth.Moon.getEquatorialHorizontalParallax(jd),
        wwt: (jd, loc) => {
            // Source: CAAMoon.radiusVectorToHorizontalParallax(CAAMoon.radiusVector)
            const r = wwtlib.CAAMoon.radiusVector(jd);
            // aa-js uses the arcsin (wwt uses the small-angle identity)
            return wwtlib.CT.r2D(Math.asin(wwtlib.CT.d2R(wwtlib.CAAMoon.radiusVectorToHorizontalParallax(r))));
        },
    },
    geocentricSemiDiameter: {
        aa: (jd, loc) => aa.Earth.Moon.getGeocentricSemiDiameter(jd), // arcseoncds
        // this is just what is defined in getGeocentricSemiDiameter
        // 358_473_400 is from ((radius of moon) / radiusVector) * 180/pi / 3600
        wwt: (jd, loc) => 358_473_400 / wwtlib.CAAMoon.radiusVector(jd), // arcseconds
    },
    riseTransitSet: {
        aa: (jd, loc) => {
            // use geocentric
            const jdm = aa.juliandays.getJulianDayMidnightDynamicalTime(jd);
            const eq1 = aa.Earth.Moon.getApparentGeocentricEquatorialCoordinates(jdm - 1);
            const eq2 = aa.Earth.Moon.getApparentGeocentricEquatorialCoordinates(jdm);
            const eq3 = aa.Earth.Moon.getApparentGeocentricEquatorialCoordinates(jdm + 1);
            return aa.risetransitset.getAccurateRiseTransitSetTimes(
                jd,
                [
                    { rightAscension: eq1.rightAscension, declination: eq1.declination },
                    { rightAscension: eq2.rightAscension, declination: eq2.declination },
                    { rightAscension: eq3.rightAscension, declination: eq3.declination },
                ],
                loc,
                aa.STANDARD_ALTITUDE_MOON
            );
        },
        wwt: (jd, loc) => {
            // Source: AstroCalc.getRiseTransitSet + AstroCalc.getPlanet(SolarSystemObjects.moon)
            const jdStart = utcDayStartJd(jd);
            const jdStartDynamical = jdStart + wwtlib.DYT.deltaT(jdStart) / 86400; // this is only approximate
            const eq1 = wwtlib.AstroCalc.getPlanet(jdStartDynamical - 1, wwtlib.SolarSystemObjects.moon, loc.latitude, loc.longitude, loc.height);
            const eq2 = wwtlib.AstroCalc.getPlanet(jdStartDynamical, wwtlib.SolarSystemObjects.moon, loc.latitude, loc.longitude, loc.height);
            const eq3 = wwtlib.AstroCalc.getPlanet(jdStartDynamical + 1, wwtlib.SolarSystemObjects.moon, loc.latitude, loc.longitude, loc.height);
            // 2 tells it that rise is when upper limb of moon crosses horizon (alt = -0.125 deg)
            const rs = wwtlib.AstroCalc.getRiseTransitSet( jdStart, loc.latitude, -loc.longitude, eq1.RA, eq1.dec, eq2.RA, eq2.dec, eq3.RA, eq3.dec, 2);
            return normalizeWwtRiseSet(rs, jdStart, 0.125);
        },
    },
};

const bodyMethodSets = {
    sun: sunMethods,
    earth: earthMethods,
    moon: moonMethods,
    mercury: planetsMethods.mercury,
    venus: planetsMethods.venus,
    mars: planetsMethods.mars,
    jupiter: planetsMethods.jupiter,
    saturn: planetsMethods.saturn,
    uranus: planetsMethods.uranus,
    neptune: planetsMethods.neptune,
    pluto: planetsMethods.pluto,
};

function getMethodsForBody(bodyName) {
    const key = `${bodyName}`.toLowerCase();
    const methods = bodyMethodSets[key];
    if (!methods) {
        throw new Error(`Unknown body "${bodyName}".`);
    }
    return methods;
}

function getValuePair(bodyName, methodName, jd, loc) {
    const methods = getMethodsForBody(bodyName);
    const pair = methods[methodName];
    if (!pair) {
        throw new Error(`Unknown method "${methodName}" for ${bodyName}.`);
    }
    return {
        aa: pair.aa(jd, loc),
        wwt: pair.wwt(jd, loc),
    };
}

function listMethods(bodyName) {
    return Object.keys(getMethodsForBody(bodyName));
}

function listMethodsToCheck(bodyName) {
    const key = `${bodyName}`.toLowerCase();
    const configured = METHODS_TO_CHECK[key];
    if (!configured) {
        return listMethods(key);
    }
    const available = new Set(listMethods(key));
    return configured.filter((methodName) => available.has(methodName));
}

function createTestCases() {
    const times = Object.entries(inputs.times);
    const testCases = [];
    for (const location of inputs.locations) {
        for (const [timeName, isoDate] of times) {
            testCases.push({
                location,
                time: { name: timeName, date: new Date(isoDate) },
            });
        }
    }
    return testCases;
}

// node equivalent of if __name__ == '__main__'
// if (require.main === module) {
//     const sample = createTestCases()[0];
//     const jd = toJulianDay(sample.time.date);
//     const loc = sample.location;

//     console.log('Mars apparentGeocentricLongitude:', getValuePair('mars', 'apparentGeocentricLongitude', jd, loc));
//     console.log('Sun riseTransitSet:', getValuePair('sun', 'riseTransitSet', jd, loc));
//     console.log('Moon phaseAngle:', getValuePair('moon', 'phaseAngle', jd, loc));
// }
const ANGULAR_PRECISION = (60 / 3600) // degrees
const TIME_PRECISION = 10 // seconds
const KM_PRECISION = 1 // KM
const AU_PRECISION_IN_KM = 100
const AU_PRECISION = AU_PRECISION_IN_KM / 1.15e8 // 10 km


const PLANET_METHODS_TO_CHECK = [
    'apparentGeocentricRightAscension',
    'apparentGeocentricDeclination',
    'riseTransitSet',
    'apparentGeocentricLongitude', // ecliptic longitude
    'apparentGeocentricLatitude', // ecliptic latitude
    'apparentGeocentricDistance',
];

const METHODS_TO_CHECK = {
    sun: [
        'apparentGeocentricRightAscension',
        'apparentGeocentricDeclination',
        'riseTransitSet',
        'apparentEclipticLongitude',
        'apparentEclipticLatitude',
    ],
    moon: [
        'geocentricRightAscension',
        'geocentricDeclination',
        'riseTransitSet',
        'geocentricEclipticLongitude',
        'geocentricEclipticLatitude',
        'geocentricDistanceKm',
    ],
    earth: [
        'eclipticLongitude',
        'eclipticLatitude',
        'radiusVector',
    ],
    mercury: PLANET_METHODS_TO_CHECK,
    venus: PLANET_METHODS_TO_CHECK,
    mars: PLANET_METHODS_TO_CHECK,
    jupiter: PLANET_METHODS_TO_CHECK,
    saturn: PLANET_METHODS_TO_CHECK,
    uranus: PLANET_METHODS_TO_CHECK,
    neptune: PLANET_METHODS_TO_CHECK,
    pluto: PLANET_METHODS_TO_CHECK,
};


module.exports = {
    planetsMethods,
    sunMethods,
    earthMethods,
    moonMethods,
    bodyMethodSets,
    METHODS_TO_CHECK,
    ANGULAR_PRECISION,
    TIME_PRECISION,
    AU_PRECISION,
    KM_PRECISION,
    getMethodsForBody,
    getValuePair,
    listMethods,
    listMethodsToCheck,
    toJulianDay,
    createTestCases,
};
