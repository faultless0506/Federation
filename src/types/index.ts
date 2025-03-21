interface CompetitionsProps {
    competitions: {
      id: number;
      title: string;
      content: string[];
      images: string[];
      location: string;
      startDate: string;
      resultsId: number | null;
      createdAt: Date;
      updatedAt: Date;
    }[];
    competitionsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    competitionsError: string | null;
  }
  interface NewsProps {
    news: {
      id: number;
      title: string;
      content: string[];
      createdAt: Date;
  
      images: string[];
    }[],
    newsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    newsError: string | null;
  }
  type MainProps = NewsProps & CompetitionsProps;
  export type {CompetitionsProps, NewsProps, MainProps};