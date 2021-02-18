module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/recipes.db3'
    }
  },
  migrations:{
    directory:'./data/migrations.js'
  },
  seeds:{
    directory:'./data/seeds.js'
  },
  pool:{
    afterCreate:(conn, done)=>{
      conn.run("PRAGMA foreign_keys=ON",done)
    }
  }
};
