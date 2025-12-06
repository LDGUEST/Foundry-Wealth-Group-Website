/**
 * Database Setup Script
 * Run this to set up the database schema: npx tsx scripts/setup-database.ts
 */

import { sql } from '@vercel/postgres';
import { readFileSync } from 'fs';
import { join } from 'path';

async function setupDatabase() {
  try {
    console.log('Setting up database schema...');
    
    // Read the SQL file
    const sqlFile = readFileSync(join(process.cwd(), 'DATABASE_SCHEMA.sql'), 'utf-8');
    
    // Split by semicolons and execute each statement
    const statements = sqlFile
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await sql.query(statement);
          console.log('✓ Executed statement');
        } catch (error: any) {
          // Ignore "already exists" errors
          if (!error.message?.includes('already exists') && !error.message?.includes('duplicate')) {
            console.error('Error executing statement:', error.message);
            console.error('Statement:', statement.substring(0, 100));
          }
        }
      }
    }

    console.log('✅ Database schema setup complete!');
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();

