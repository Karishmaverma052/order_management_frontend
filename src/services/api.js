const API_BASE_URL = 'https://order-management-backend-b0z0.onrender.com/api';

// Dashboard API
export const getDashboardStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard/stats`);
    if (!response.ok) throw new Error('Failed to fetch dashboard stats');
    return await response.json();
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return null;
  }
};

// Products API
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const createProduct = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create product');
    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};

export const updateProduct = async (id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return await response.json();
  } catch (error) {
    console.error('Error deleting product:', error);
    return null;
  }
};

// Customers API
export const getCustomers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/customers`);
    if (!response.ok) throw new Error('Failed to fetch customers');
    return await response.json();
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
};

export const createCustomer = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create customer');
    return await response.json();
  } catch (error) {
    console.error('Error creating customer:', error);
    return null;
  }
};

export const updateCustomer = async (id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update customer');
    return await response.json();
  } catch (error) {
    console.error('Error updating customer:', error);
    return null;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete customer');
    return await response.json();
  } catch (error) {
    console.error('Error deleting customer:', error);
    return null;
  }
};

// Orders API
export const getOrders = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`);
    if (!response.ok) throw new Error('Failed to fetch orders');
    return await response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const createOrder = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create order');
    return await response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    return null;
  }
};

export const updateOrder = async (id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update order');
    return await response.json();
  } catch (error) {
    console.error('Error updating order:', error);
    return null;
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete order');
    return await response.json();
  } catch (error) {
    console.error('Error deleting order:', error);
    return null;
  }
};
