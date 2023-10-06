const mockProductDetails = {
    1: {
      id: 1,
      title: 'Teclado Kumura k552',
      description: 'Este es un teclado mecánico de alta calidad...',
      image: '/img/teclado.jpg',
      price: 50,
    },
    2: {
      id: 2,
      title: 'Monitor Curvo Philips',
      description: 'Este es un monitor curvo con excelentes características...',
      image: '/img/monitor-curvo.jpg',
      price: 250,
    },
    3: {
      id: 3,
      title: 'Mouse Logitech G203',
      description: 'Este es un mouse de gaming con seguimiento preciso...',
      image: '/img/Mouse.jpg',
      price: 30,
    },
  };
  
  export const mockFetchProductDetail = (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productDetail = mockProductDetails[productId];
        if (productDetail) {
          resolve(productDetail);
        } else {
          reject(new Error('Producto no encontrado'));
        }
      }); 
    });
  };