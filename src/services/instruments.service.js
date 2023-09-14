import axios from "axios";

class InstrumentsService {
  constructor() {
    this.api = axios.create({
baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });


    this.api.interceptors.request.use((config) => {
     
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/instruments
  createInstrument = (requestBody) => {
    return this.api.post("/api/instruments", requestBody);
  };

  // GET /api/instruments
  getAllInstruments = () => {
    return this.api.get("/api/instruments");
  };

  // GET /api/instruments/:id
  getInstrument = (id) => {
    return this.api.get(`/api/instruments/${id}`);
  };

  // PUT /api/instruments/:id
  updateInstrument = (id, requestBody) => {
    return this.api.put(`/api/instruments/${id}`, requestBody);
  };

  // DELETE /api/instruments/:id
  deleteInstrument = (id) => {
    return this.api.delete(`/api/instruments/${id}`);
  };
}

// Create one instance (object) of the service
const instrumentsService = new InstrumentsService();

export default instrumentsService;
