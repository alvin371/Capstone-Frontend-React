let API_ROUTE

process.env.NODE_ENV === 'development'
  ? API_ROUTE = 'https://localhost:8000':
  API_ROUTE = 'https://api.stevenhoyo.co/v1'


export default API_ROUTE