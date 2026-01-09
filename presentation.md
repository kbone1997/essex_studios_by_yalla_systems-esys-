### Data Source
- **API Endpoint**: [https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json](https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json)
- Fetches a list of restaurants with metadata including name, image, price, and tags

### Dynamic Card Implementation

#### RestaurantList Component
The `RestaurantList` component manages the data flow:
- **UI consistency**: Limited card title so that alignment is same across the whole page
- **State Management**: Uses `useState` for restaurants, loading, and error states
- **Data Fetching**: `useEffect` hook fetches data on component mount
- **Error Handling**: Graceful error messages and loading states
- **Dynamic Rendering**: Maps restaurant data to `RestaurantCard` components
- **Display Count**: Shows total number of restaurants loaded

## Production Improvements

### 1. **Performance Optimization**
- Implement pagination or infinite scroll to handle large datasets
- Add React.memo to RestaurantCard to prevent unnecessary re-renders
- Use image lazy loading for faster initial page load
- Implement caching strategy to reduce API calls

### 2. **Error Handling & Resilience**
- Add retry logic with exponential backoff for failed API requests
- Implement fallback UI for missing images
- Add more granular error messages for different failure scenarios
- Use error boundaries to catch component-level errors

### 3. **Code Quality**
- Add TypeScript for type safety
- Implement proper error logging and monitoring
- Use environment variables for API endpoints
- Implement proper loading state animations

## Current Tech Stack
- **React**: Component-based UI framework
- **Jest & React Testing Library**: Testing framework
- **CSS**: Styling with custom classes
