import axios from "axios";

class LessonsService {
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

  // POST /api/lessons
  createLesson = (requestBody) => {
    return this.api.post("/api/lessons", requestBody);
  };

  // GET /api/lessons based on instrument
  getAllLessons = (instrument) => {
    return this.api.get(`/api/lessons?instrument=${instrument}`);
  };

  // GET /api/lessons/:id
  getLesson = (id) => {
    return this.api.get(`/api/lessons/${id}`);
  };

  // PUT /api/lessons/:id
  updateLesson = (id, requestBody) => {
    return this.api.put(`/api/lessons/${id}`, requestBody);
  };

  // DELETE /api/lessons/:id
  deleteLesson = (id) => {
    return this.api.delete(`/api/lessons/${id}`);
  };
}

// Create one instance (object) of the service
const lessonsService = new LessonsService();

export default lessonsService;
