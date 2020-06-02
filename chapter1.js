var str = "name    , age, hair\nMerble,35,red\nBob, 64,blonde";
/**
 * [ [ 'name', 'age', 'hair' ],
 * [ 'Merble', '35', 'red' ],
 * [ 'Bob', '64', 'blonde' ] ]
 */
function lameCSV(str) {
    return str.split('\n').reduce(function (table, row) {
        table.push( row.split(',').map((c) => { return c.trim() ;}))
        return table;
    }, [])
}
console.log(lameCSV(str))