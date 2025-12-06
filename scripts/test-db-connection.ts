/**
 * Test Database Connection
 * Run: npx tsx scripts/test-db-connection.ts
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { sql } from '@vercel/postgres';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Test simple query
    const result = await sql`SELECT NOW() as current_time, version() as pg_version`;
    
    console.log('✅ Database connection successful!');
    console.log('Current time:', result.rows[0].current_time);
    console.log('PostgreSQL version:', result.rows[0].pg_version.split(' ')[0] + ' ' + result.rows[0].pg_version.split(' ')[1]);
    
    // Check if tables exist
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;
    
    if (tables.rows.length > 0) {
      console.log('\n📊 Existing tables:');
      tables.rows.forEach(row => {
        console.log(`  - ${row.table_name}`);
      });
    } else {
      console.log('\n⚠️  No tables found. Run DATABASE_SCHEMA.sql to create tables.');
    }
    
  } catch (error: any) {
    console.error('❌ Database connection failed:', error.message);
    console.error('\nMake sure:');
    console.error('1. .env.local file exists with POSTGRES_URL');
    console.error('2. Database credentials are correct');
    console.error('3. Database is accessible');
    process.exit(1);
  }
}

testConnection();

