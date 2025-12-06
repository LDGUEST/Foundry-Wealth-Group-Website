/**
 * Check Database Tables
 * Run: npx tsx scripts/check-tables.ts
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { sql } from '@vercel/postgres';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

async function checkTables() {
  try {
    console.log('Checking database tables...\n');
    
    // Get all tables
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;
    
    if (tables.rows.length === 0) {
      console.log('❌ No tables found!');
      console.log('\nYou need to run DATABASE_SCHEMA.sql in Neon Dashboard.');
      console.log('See CURRENT_STATUS.md for instructions.');
      return;
    }
    
    console.log(`✅ Found ${tables.rows.length} table(s):\n`);
    
    const requiredTables = ['users', 'documents', 'form_completions', 'activity_log'];
    const foundTables = tables.rows.map((r: any) => r.table_name);
    
    for (const table of requiredTables) {
      if (foundTables.includes(table)) {
        console.log(`  ✓ ${table}`);
      } else {
        console.log(`  ✗ ${table} - MISSING`);
      }
    }
    
    // Check for extra tables
    const extraTables = foundTables.filter((t: string) => !requiredTables.includes(t));
    if (extraTables.length > 0) {
      console.log(`\n  Other tables: ${extraTables.join(', ')}`);
    }
    
    // Note: Table count checking removed due to Vercel Postgres limitations with dynamic table names
    // You can check counts manually in the Neon dashboard if needed
    
    // Verify all required tables exist
    const allPresent = requiredTables.every(t => foundTables.includes(t));
    
    if (allPresent) {
      console.log('\n✅ All required tables are present! Database is ready.');
    } else {
      console.log('\n⚠️  Some tables are missing. Run DATABASE_SCHEMA.sql to create them.');
    }
    
  } catch (error: any) {
    console.error('❌ Error checking tables:', error.message);
    process.exit(1);
  }
}

checkTables();

