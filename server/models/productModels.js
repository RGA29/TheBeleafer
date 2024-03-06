const { Pool } = require ("pg"); 

const PG_URI= "postgres://qasqlowl:WHvwD3I453ra7zNG70oE9tnm7m9A-gRY@kesavan.db.elephantsql.com/qasqlowl"; 

// CREATING A NEW POOL 
const pool = new Pool({
    connectionString: PG_URI, 
})

// to add schema of data base here 


module.exports = {
    query: (text, params, callback) => {
        console.log("executed query", text);
        return pool.query(text, params, callback); 
    },
}; 