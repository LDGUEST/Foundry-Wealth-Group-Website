'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

interface DocumentFiltersProps {
  clients: any[];
  filters: any;
  onFilterChange: (filters: any) => void;
}

const categoryOptions = [
  'Tax Documents',
  'Investment Statements',
  'Agreements',
  'Insurance',
  'Estate Planning',
  'Business Documents',
  'Other',
];

export function DocumentFilters({
  clients,
  filters,
  onFilterChange,
}: DocumentFiltersProps) {
  const [search, setSearch] = useState(filters.search || '');

  function handleSearch() {
    onFilterChange({ search });
  }

  function clearFilters() {
    setSearch('');
    onFilterChange({
      userId: undefined,
      category: undefined,
      search: undefined,
      dateFrom: undefined,
      dateTo: undefined,
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Search */}
      <div className="lg:col-span-2">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search by filename or client name..."
              className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
            />
          </div>
          <Button onClick={handleSearch} className="bg-[#7A0026] text-white">
            Search
          </Button>
        </div>
      </div>

      {/* Client Filter */}
      <div>
        <select
          value={filters.userId || ''}
          onChange={(e) => onFilterChange({ userId: e.target.value || undefined })}
          className="w-full px-3 py-2 border rounded-md text-sm"
        >
          <option value="">All Clients</option>
          {clients.map(client => (
            <option key={client.auth0_id} value={client.auth0_id}>
              {client.first_name} {client.last_name}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <select
          value={filters.category || ''}
          onChange={(e) => onFilterChange({ category: e.target.value || undefined })}
          className="w-full px-3 py-2 border rounded-md text-sm"
        >
          <option value="">All Categories</option>
          {categoryOptions.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Date Range */}
      <div>
        <input
          type="date"
          value={filters.dateFrom || ''}
          onChange={(e) => onFilterChange({ dateFrom: e.target.value || undefined })}
          placeholder="From Date"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
      </div>

      <div>
        <input
          type="date"
          value={filters.dateTo || ''}
          onChange={(e) => onFilterChange({ dateTo: e.target.value || undefined })}
          placeholder="To Date"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
      </div>

      {/* Clear Filters */}
      {(filters.userId || filters.category || filters.search || filters.dateFrom || filters.dateTo) && (
        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}

