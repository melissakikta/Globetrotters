import axios from "axios";


// Interface for a station
export interface Station {
  id: string;
  name: string;
  location: {
    type: string;
    latitude: number;
    longitude: number;
  };
}

// Interface for a train schedule entry
export interface TrainSchedule {
  trainId: string; // ID of the train
  departure: string; // Departure time (ISO 8601 format)
  arrival: string; // Arrival time (ISO 8601 format)
  line: {
    name: string; // Line name (e.g., "S5")
    product: string; // Product type (e.g., "train", "subway")
  };
  origin: Station; // Departure station
  destination: Station; // Arrival station
}

// Service to fetch train schedules from the API
export class TrainSchedulesService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://v6.vbb.transport.rest";
  }

  // Fetch train schedules for a given station
  async fetchTrainSchedules(stationId: string): Promise<TrainSchedule[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/stops/${stationId}/departures`, {
        params: {
          duration: 60, // Fetch schedules for the next 60 minutes
        },
      });
      return response.data.map((item: { id: string; when: string; plannedWhen: string; line: { name: string; product: string }; stop: { id: string; name: string; location: { type: string; latitude: number; longitude: number } }; destination: { id: string; name: string; location: { type: string; latitude: number; longitude: number } } }) => ({
        trainId: item.id,
        departure: item.when,
        arrival: item.plannedWhen,
        line: {
          name: item.line.name,
          product: item.line.product,
        },
        origin: {
          id: item.stop.id,
          name: item.stop.name,
          location: item.stop.location,
        },
        destination: {
          id: item.destination.id,
          name: item.destination.name,
          location: item.destination.location,
        },
      }));
    } catch (error) {
      console.error("Error fetching train schedules:", error);
      throw new Error("Failed to fetch train schedules.");
    }
  }
}
