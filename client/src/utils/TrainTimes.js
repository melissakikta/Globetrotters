import axios from "axios";
// Service to fetch train schedules from the API
export class TrainSchedulesService {
    constructor() {
        this.baseUrl = "https://v6.vbb.transport.rest";
    }
    // Fetch train schedules for a given station
    async fetchTrainSchedules(stationId) {
        try {
            const response = await axios.get(`${this.baseUrl}/stops/${stationId}/departures`, {
                params: {
                    duration: 60, // Fetch schedules for the next 60 minutes
                },
            });
            return response.data.map((item) => ({
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
        }
        catch (error) {
            console.error("Error fetching train schedules:", error);
            throw new Error("Failed to fetch train schedules.");
        }
    }
}
