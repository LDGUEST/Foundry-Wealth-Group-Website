'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface Client {
  auth0_id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  onboarding_completed: boolean;
  forms_completed: number;
  documents_uploaded: number;
}

export function ClientTable({ clients }: { clients: Client[] }) {
  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Forms</TableHead>
            <TableHead>Documents</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                No clients yet
              </TableCell>
            </TableRow>
          ) : (
            clients.map((client) => (
              <TableRow key={client.auth0_id}>
                <TableCell className="font-medium">
                  {client.first_name} {client.last_name}
                </TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {client.forms_completed || 0}/3
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {client.documents_uploaded || 0}
                  </Badge>
                </TableCell>
                <TableCell>
                  {client.onboarding_completed ? (
                    <Badge className="bg-green-100 text-green-800">
                      Complete
                    </Badge>
                  ) : (
                    <Badge className="bg-yellow-100 text-yellow-800">
                      In Progress
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(client.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/clients/${client.auth0_id}`}>
                      View →
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

