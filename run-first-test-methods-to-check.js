'use strict';

const fs = require('fs');
const path = require('path');
const {
    METHODS_TO_CHECK,
    createTestCases,
    toJulianDay,
    getValuePair,
    listMethodsToCheck,
} = require('./tests.js');

const OUTPUT_AA_PATH = path.join('outputs', 'methods_to_check_aa_records.json');
const OUTPUT_WWT_PATH = path.join('outputs', 'methods_to_check_wwt_records.json');
const BASE_COLUMNS = ['index', 'lat', 'lon', 'height', 'time', 'name'];

function buildColumnKeys() {
    const columns = [...BASE_COLUMNS];
    for (const body of Object.keys(METHODS_TO_CHECK)) {
        for (const method of listMethodsToCheck(body)) {
            if (method === 'riseTransitSet') {
                columns.push(`${body}_rise`, `${body}_transit`, `${body}_set`);
                continue;
            }
            columns.push(`${body}_${method}`);
        }
    }
    return columns;
}

const COLUMN_KEYS = buildColumnKeys();

function emptyRow() {
    const row = {};
    for (const key of COLUMN_KEYS) {
        row[key] = null;
    }
    return row;
}

function finiteOrNull(value) {
    return Number.isFinite(value) ? value : null;
}

function fillValue(row, body, method, value) {
    if (method === 'riseTransitSet') {
        row[`${body}_rise`] = finiteOrNull(value?.rise?.utc);
        row[`${body}_transit`] = finiteOrNull(value?.transit?.utc);
        row[`${body}_set`] = finiteOrNull(value?.set?.utc);
        return;
    }
    row[`${body}_${method}`] = finiteOrNull(value);
}

function baseRow(testCase, index) {
    const row = emptyRow();
    row.index = index;
    row.lat = testCase.location.latitude;
    row.lon = testCase.location.longitude;
    row.height = testCase.location.height;
    row.time = testCase.time.date.toISOString();
    row.name = testCase.location.name ?? null;
    return row;
}

function buildCaseRows(testCase, index) {
    const jd = toJulianDay(testCase.time.date);
    const loc = testCase.location;
    const aaRow = baseRow(testCase, index);
    const wwtRow = baseRow(testCase, index);

    for (const body of Object.keys(METHODS_TO_CHECK)) {
        for (const method of listMethodsToCheck(body)) {
            const { aa, wwt } = getValuePair(body, method, jd, loc);
            fillValue(aaRow, body, method, aa);
            fillValue(wwtRow, body, method, wwt);
        }
    }

    return { aaRow, wwtRow };
}

async function main() {
    const cases = createTestCases();
    const rows = await Promise.all(cases.map((testCase, index) => Promise.resolve(buildCaseRows(testCase, index))));
    const aaRecords = rows.map((item) => item.aaRow);
    const wwtRecords = rows.map((item) => item.wwtRow);

    fs.mkdirSync(path.dirname(OUTPUT_AA_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_AA_PATH, JSON.stringify(aaRecords, null, 2));
    fs.writeFileSync(OUTPUT_WWT_PATH, JSON.stringify(wwtRecords, null, 2));

    console.table({
        cases: cases.length,
        columns: COLUMN_KEYS.length,
        aa_rows: aaRecords.length,
        wwt_rows: wwtRecords.length,
    });
    console.log(`Wrote ${OUTPUT_AA_PATH}`);
    console.log(`Wrote ${OUTPUT_WWT_PATH}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
