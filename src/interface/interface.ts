export interface GeoLocation {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export interface WeatherInterface {
  name: string;
  weather: {
    description: string;
    main: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
}

export interface FiveDayInterface {
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      main: string;
      icon: string;
    }[];
  }[];
}
