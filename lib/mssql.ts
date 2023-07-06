import 'server-only';
import * as sql from 'mssql';
import { IRecordSet } from 'mssql';

const config = {
  user: 'mmgh900',
  password: '0936',
  server: '192.168.32.2\\SQLEXPRESS',
  database: 'ModiranFarmer',
  encrypt: false
};

class Database {
  private static instance: Database;
  private connection: sql.ConnectionPool | null = null;

  private constructor() {
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      if (!this.connection) {
        this.connection = await sql.connect(config);
        console.log('Connected to database successfully!');
      }
    } catch (error) {
      console.log('Error connecting to database:', error);
    }
  }

  public async executeQuery(query: string): Promise<IRecordSet<any>> {
    try {
      await this.connect();
      const result = await this.connection!.query(query);
      return result.recordset;
    } catch (error) {
      console.log('Error executing query:', error);
      throw error;
    }
  }
}

export default Database.getInstance();