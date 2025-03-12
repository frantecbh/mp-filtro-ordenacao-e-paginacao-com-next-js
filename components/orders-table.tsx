"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from './ui/badge';
import { ChevronsUpDown } from 'lucide-react';


interface Order {
  id: number;
  customer_name: string;
  customer_email: string;
  order_date: string;
  amount_in_cents: number;
  status: 'pending' | 'completed' | 'canceled';
  created_at: string;
  updated_at: string;
}

interface OrdersTableProps {
  data: Order[];
}

export default function OrdersTable({ data }: OrdersTableProps) {

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Pega apenas a parte da data (YYYY-MM-DD)
  };

  const formatCurrency = (amountInCents: number): string => {
    const amountInReais = amountInCents / 100; // Convertendo de centavos para reais
    return amountInReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="table-cell">Cliente</TableHead>
          <TableHead className="table-cell">Status</TableHead>
          <TableHead className="table-cell cursor-pointer justify-end items-center gap-1">
            <div className="flex items-center gap-1">
              Data
              <ChevronsUpDown className="w-4" />
            </div>
          </TableHead>
          <TableHead className="text-right cursor-pointer flex justify-end items-center gap-1">
            Valor
            <ChevronsUpDown className="w-4" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data.map((order) => (
            <TableRow key={order.id}>     
            <TableCell>
              <div className="font-medium">{order.customer_name}</div>
              <div className="hidden md:inline text-sm text-muted-foreground">
              {order.customer_email}
              </div>
            </TableCell>
            <TableCell>
              <Badge className={`text-xs`} variant="outline">
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{formatDate(order.order_date)}</TableCell>
            <TableCell className="text-right">{formatCurrency(order.amount_in_cents)}</TableCell>
          </TableRow>
          ))
        }
      
      
      </TableBody>
    </Table>
  );
}
