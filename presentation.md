# RestaurantList Component - Implementation Presentation

## Overview
I've implemented a dynamic `RestaurantList` component that fetches and displays restaurant data from an external API. The component handles data fetching, loading states, error handling, and renders restaurant cards dynamically.

## Implementation Details

### Architecture & Design Decisions

#### RestaurantList Component
The main component manages the complete data flow:

**State Management**
- `restaurants`: Stores fetched restaurant data
- `loading`: Tracks loading state during API call
- `error`: Captures and displays error messages

**Data Fetching Strategy**
- Uses `useEffect` hook to fetch data on component mount
- Async/await pattern for clean asynchronous code
- Fetches from: [Restaurant API](https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json)

**Error Handling**
- Try-catch block for robust error management
- Response validation (`response.ok` check)
- User-friendly error messages displayed in UI
- Graceful loading state during data fetch

**Dynamic Rendering**
- Maps restaurant array to `RestaurantCard` components
- Uses restaurant `id` as unique key for React reconciliation
- Passes props: name, imageUrl, price, tags

**UI Enhancements**
- Displays total restaurant count
- Truncates long restaurant names (>20 chars) with ellipsis for consistent card alignment
- Maintains semantic HTML structure with proper CSS classes

#### RestaurantCard Component
Presentational component that receives and displays individual restaurant data:
- Renders restaurant image with alt text for accessibility
- Displays name, tags, and price information
- Uses semantic markup with proper CSS classes for styling

## Key Features

✅ **Responsive Data Fetching** - Loads restaurant data on component mount  
✅ **State Management** - Handles loading, error, and success states  
✅ **Error Resilience** - Graceful error handling with user feedback  
✅ **Dynamic Rendering** - Maps data to reusable card components  
✅ **UI Consistency** - Truncates long names for uniform card layout  
✅ **Accessibility** - Proper alt text and semantic HTML  

## Production Improvements (Future Enhancements)

### Performance
- Implement pagination or infinite scroll for large datasets
- Add React.memo to RestaurantCard to prevent unnecessary re-renders
- Lazy load images for faster initial page load
- Implement caching strategy to reduce redundant API calls

### Resilience
- Add retry logic with exponential backoff for failed requests
- Implement fallback UI for missing images
- Add granular error messages for different failure scenarios
- Use error boundaries to catch component-level errors

### Code Quality
- Migrate to TypeScript for type safety
- Add environment variables for API endpoints
- Implement proper loading animations
- Add comprehensive unit and integration tests
- Set up error logging and monitoring

## Tech Stack
- **React**: Component-based UI framework with hooks
- **Jest & React Testing Library**: Testing framework
- **CSS**: Custom styling with BEM naming convention
