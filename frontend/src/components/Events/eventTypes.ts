// types/eventTypes.ts
export interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    views: number;
    imageUrl: string;
    club: {
      name: string;
      icon: string;
    };
  }
  
  export interface PaginationTypes {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }