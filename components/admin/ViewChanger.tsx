'use client';

import { Button } from '@/components/ui/button';
import { Table, Grid3x3, List } from 'lucide-react';

interface ViewChangerProps {
  viewMode: 'table' | 'grid' | 'list';
  onViewChange: (mode: 'table' | 'grid' | 'list') => void;
}

export function ViewChanger({ viewMode, onViewChange }: ViewChangerProps) {
  return (
    <div className="flex items-center gap-1 border rounded-md p-1">
      <Button
        variant={viewMode === 'table' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('table')}
        className={viewMode === 'table' ? 'bg-[#7A0026] text-white' : ''}
      >
        <Table className="w-4 h-4" />
      </Button>
      <Button
        variant={viewMode === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('grid')}
        className={viewMode === 'grid' ? 'bg-[#7A0026] text-white' : ''}
      >
        <Grid3x3 className="w-4 h-4" />
      </Button>
      <Button
        variant={viewMode === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('list')}
        className={viewMode === 'list' ? 'bg-[#7A0026] text-white' : ''}
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
}

