import React from 'react';
import { GetStaticProps } from 'next';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, Chip } from '@mui/material';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import axios from 'axios';

interface Size {
  h: number;
  l: number;
  w: number;
}

interface Product {
  _id: string;
  item: string;
  price: number;
  qty: number;
  size: Size;
  features: string;
  categories: string[];
  image: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.post('https://nextjs-sable-six-36.vercel.app/api/getAllProducts');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const product_list = async () => {
  const products = await fetchProducts();

   // Check if products is undefined or not an array
   if (!Array.isArray(products)) {
    console.log('products',products)
    return <Typography color="error">Error loading products.</Typography>;
  }

  return (
    <BaseCard title="Product Performance">
      <TableContainer sx={{ width: { xs: "274px", sm: "100%" } }}>
        <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Item
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Quantity
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Features
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product: Product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product._id || "N/A"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {product.item}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    ${product.price}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.qty}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{product.features}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default product_list;



