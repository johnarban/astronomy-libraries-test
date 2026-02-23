#!/usr/bin/env python3
"""No-args Skyfield runner that emits wide records JSON matching JS column keys."""

from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Any

from astropy.time import Time


from skyfield import almanac
from skyfield.api import Loader, wgs84
from skyfield.errors import EphemerisRangeError


OUTPUT_PATH = Path("outputs/methods_to_check_skyfield_records.json")
INPUTS_PATH = Path("test_inputs.json")
EPHEMERIS = "de440s.bsp"
BASE_COLUMNS = ["index", "lat", "lon", "height", "time", "name"]

METHODS_TO_CHECK = {
    "sun": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentEclipticLongitude",
        "apparentEclipticLatitude",
    ],
    "moon": [
        "geocentricRightAscension",
        "geocentricDeclination",
        "riseTransitSet",
        "geocentricEclipticLongitude",
        "geocentricEclipticLatitude",
        "geocentricDistanceKm",
    ],
    "earth": [
        "eclipticLongitude",
        "eclipticLatitude",
        "radiusVector",
    ],
    "mercury": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "venus": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "mars": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "jupiter": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "saturn": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "uranus": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "neptune": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
    "pluto": [
        "apparentGeocentricRightAscension",
        "apparentGeocentricDeclination",
        "riseTransitSet",
        "apparentGeocentricLongitude",
        "apparentGeocentricLatitude",
        "apparentGeocentricDistance",
    ],
}

TARGET_CANDIDATES = {
    "sun": ("sun",),
    "moon": ("moon",),
    "earth": ("earth",),
    "mercury": ("mercury", "mercury barycenter"),
    "venus": ("venus", "venus barycenter"),
    "mars": ("mars", "mars barycenter"),
    "jupiter": ("jupiter", "jupiter barycenter"),
    "saturn": ("saturn", "saturn barycenter"),
    "uranus": ("uranus", "uranus barycenter"),
    "neptune": ("neptune", "neptune barycenter"),
    "pluto": ("pluto", "pluto barycenter"),
}


def build_column_keys() -> list[str]:
    keys = list(BASE_COLUMNS)
    for body, methods in METHODS_TO_CHECK.items():
        for method in methods:
            if method == "riseTransitSet":
                keys.extend([f"{body}_rise", f"{body}_transit", f"{body}_set"])
            else:
                keys.append(f"{body}_{method}")
    return keys


COLUMN_KEYS = build_column_keys()


def empty_row() -> dict[str, Any]:
    return {key: None for key in COLUMN_KEYS}


def finite_or_none(value: Any) -> float | None:
    if value is None:
        return None
    try:
        val = float(value)
    except Exception:
        return None
    return val if math.isfinite(val) else None


def parse_time_utc(time_iso: str) -> Time:
    return Time(time_iso, format="isot", scale="utc")


def utc_day_start_jd(jd: float) -> float:
    return int(jd - 0.5) + 0.5


def pick_target(eph: Any, body_name: str) -> Any:
    for candidate in TARGET_CANDIDATES[body_name]:
        try:
            return eph[candidate]
        except Exception:
            pass
    raise KeyError(f'Could not resolve Skyfield target for "{body_name}"')


def to_ecliptic(apparent: Any, t: Any) -> tuple[float, float, float]:
    try:
        lat, lon, distance = apparent.ecliptic_latlon(epoch=t)
    except TypeError:
        lat, lon, distance = apparent.ecliptic_latlon()
    return lon.degrees, lat.degrees, distance.au


def create_test_cases(test_inputs: dict[str, Any]) -> list[dict[str, Any]]:
    cases: list[dict[str, Any]] = []
    for location in test_inputs["locations"]:
        for time_name, iso in test_inputs["times"].items():
            cases.append({"location": location, "time": {"name": time_name, "iso": iso}})
    return cases


def first_time(times_result: Any) -> Any | None:
    times = times_result[0] if isinstance(times_result, tuple) else times_result
    return times[0] if len(times) else None


def first_valid_flagged_time(times_result: Any) -> Any | None:
    if not isinstance(times_result, tuple) or len(times_result) < 2:
        return first_time(times_result)
    times, flags = times_result[0], times_result[1]
    for t_event, is_valid in zip(times, flags):
        if bool(is_valid):
            return t_event
    return None


def event_utc_hours(jd_start: float, t_event: Any | None) -> float | None:
    if t_event is None:
        return None
    return finite_or_none((float(t_event.ut1) - jd_start) * 24.0)


def get_sun_values(t: Any, earth: Any, body: Any) -> dict[str, float | None]:
    apparent = earth.at(t).observe(body).apparent()
    ra, dec, _ = apparent.radec(epoch=t)
    ecl_lon, ecl_lat, _ = to_ecliptic(apparent, t)
    return {
        "apparentGeocentricRightAscension": finite_or_none(ra.hours * 15.0),
        "apparentGeocentricDeclination": finite_or_none(dec.degrees),
        "apparentEclipticLongitude": finite_or_none(ecl_lon),
        "apparentEclipticLatitude": finite_or_none(ecl_lat),
    }


def get_moon_values(t: Any, earth: Any, body: Any) -> dict[str, float | None]:
    apparent = earth.at(t).observe(body).apparent()
    ra, dec, distance = apparent.radec(epoch=t)
    ecl_lon, ecl_lat, _ = to_ecliptic(apparent, t)
    return {
        "geocentricRightAscension": finite_or_none(ra.hours * 15.0),
        "geocentricDeclination": finite_or_none(dec.degrees),
        "geocentricEclipticLongitude": finite_or_none(ecl_lon),
        "geocentricEclipticLatitude": finite_or_none(ecl_lat),
        "geocentricDistanceKm": finite_or_none(distance.km),
    }


def get_earth_values(t: Any, earth: Any, sun: Any) -> dict[str, float | None]:
    # Using .apparent() for Sun->Earth can produce NaNs in Skyfield's relativity path.
    astrometric = sun.at(t).observe(earth)
    ecl_lon, ecl_lat, distance_au = to_ecliptic(astrometric, t)
    return {
        "eclipticLongitude": finite_or_none(ecl_lon),
        "eclipticLatitude": finite_or_none(ecl_lat),
        "radiusVector": finite_or_none(distance_au),
    }


def get_planet_values(t: Any, earth: Any, body: Any) -> dict[str, float | None]:
    apparent = earth.at(t).observe(body).apparent()
    ra, dec, _ = apparent.radec(epoch=t)
    ecl_lon, ecl_lat, distance_au = to_ecliptic(apparent, t)
    return {
        "apparentGeocentricRightAscension": finite_or_none(ra.hours * 15.0),
        "apparentGeocentricDeclination": finite_or_none(dec.degrees),
        "apparentGeocentricLongitude": finite_or_none(ecl_lon),
        "apparentGeocentricLatitude": finite_or_none(ecl_lat),
        "apparentGeocentricDistance": finite_or_none(distance_au),
    }


def get_rise_transit_set_values(t0: Any, t1: Any, jd_start: float, observer_topo: Any, body: Any) -> dict[str, float | None]:
    rise = first_valid_flagged_time(almanac.find_risings(observer_topo, body, t0, t1))
    transit = first_time(almanac.find_transits(observer_topo, body, t0, t1))
    set_ = first_valid_flagged_time(almanac.find_settings(observer_topo, body, t0, t1))
    return {
        "rise": event_utc_hours(jd_start, rise),
        "transit": event_utc_hours(jd_start, transit),
        "set": event_utc_hours(jd_start, set_),
    }


def base_row(test_case: dict[str, Any], index: int) -> dict[str, Any]:
    loc = test_case["location"]
    t_utc = parse_time_utc(test_case["time"]["iso"])
    row = empty_row()
    row["index"] = index
    row["lat"] = loc["latitude"]
    row["lon"] = loc["longitude"]
    row["height"] = loc["height"]
    row["time"] = f"{t_utc.isot}Z"
    row["name"] = loc.get("name")
    return row


def fill_value(row: dict[str, Any], body: str, method: str, value: Any) -> None:
    if method == "riseTransitSet":
        row[f"{body}_rise"] = finite_or_none(value.get("rise"))
        row[f"{body}_transit"] = finite_or_none(value.get("transit"))
        row[f"{body}_set"] = finite_or_none(value.get("set"))
        return
    row[f"{body}_{method}"] = finite_or_none(value)


def main() -> None:
    root = Path(__file__).resolve().parent
    test_inputs = json.loads((root / INPUTS_PATH).read_text())
    test_cases = create_test_cases(test_inputs)

    load = Loader(str(root / ".skyfield-data"))
    ts = load.timescale()
    eph = load(EPHEMERIS)
    earth = pick_target(eph, "earth")
    sun = pick_target(eph, "sun")

    records: list[dict[str, Any]] = []

    for index, test_case in enumerate(test_cases):
        row = base_row(test_case, index)
        try:
            t_utc = parse_time_utc(test_case["time"]["iso"])
            jd = float(t_utc.jd)
            jd_start = utc_day_start_jd(jd)
            t = ts.ut1_jd(jd)
            t0 = ts.ut1_jd(jd_start)
            t1 = ts.ut1_jd(jd_start + 1.0)

            loc = test_case["location"]
            observer_topo = earth + wgs84.latlon(loc["latitude"], loc["longitude"], elevation_m=loc["height"])

            for body_name, methods in METHODS_TO_CHECK.items():
                body = pick_target(eph, body_name)
                if body_name == "sun":
                    values = get_sun_values(t, earth, body)
                elif body_name == "moon":
                    values = get_moon_values(t, earth, body)
                elif body_name == "earth":
                    values = get_earth_values(t, earth, sun)
                else:
                    values = get_planet_values(t, earth, body)

                rts_values = None
                for method in methods:
                    if method == "riseTransitSet":
                        if rts_values is None:
                            rts_values = get_rise_transit_set_values(t0, t1, jd_start, observer_topo, body)
                        fill_value(row, body_name, method, rts_values)
                        continue
                    fill_value(row, body_name, method, values.get(method))
        except EphemerisRangeError:
            pass

        records.append(row)

    output_path = root / OUTPUT_PATH
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(records, indent=2))
    print(f"Wrote {output_path} ({len(records)} rows, {len(COLUMN_KEYS)} columns)")


if __name__ == "__main__":
    main()
