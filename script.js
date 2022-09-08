let ljson = [
    ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
    ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
    ["Robo Machine", "machine006", 0, 0, 2, 0.0, 0.5, 0.0, 0, 0, 0, 0, 0, 0],
]

let clutter = `<thead>
            <tr>
                <th rowspan="2">MACHINE NAME</th>
                <th rowspan="2">MACHONE CODE</th>
                <th colspan="3">ENERGY CONSUMED (kWh)</th>
                <th rowspan="2">Active Power(MW)</th>
                <th rowspan="2">Apparent Power (MVA))</th>
                <th rowspan="2">Reactive Power (MVAr)</th>
                <th rowspan="2">CURRENT(Amps)</th>
                <th rowspan="2">VOLTAGE(Volts)</th>
                <th rowspan="2">POWER FACTOR</th>
                <th colspan="3">IDLE TIME</th>
            </tr>
            <tr>
                <th>Today</th>
                <th>MTD</th>
                <th>YTD</th>
                <th>Today</th>
                <th>MTD</th>
                <th>YTD</th>
            </tr>
        </thead>
        <tbody>
            `
for (let i of ljson) {
    clutter += `<tr>`
    for (let j of i) {
        clutter += `<td>${j}</td>`
    }
    clutter += `</tr>`
}
`</tbody>`

document.querySelector('.table').innerHTML = clutter