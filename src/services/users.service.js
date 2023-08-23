import axios from "axios";

class UsersService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // GET /api/users/:userId
  getUser = (id) => {
    return this.api.get(`/api/users/${id}`);
  };

  // PUT /api/users/:id
  updateUser = (id, requestBody) => {
    return this.api.put(`/api/users/${id}`, requestBody);
  };

  // GET /api/users/:userId/lessons
  getUserLessons = (userId) => {
    return this.api.get("/api/users/:userId/lessons");
  };

  // GET /api/users/:userId/groups
  getUserGroups = (userId) => {
    return this.api.get("/api/users/:userId/groups");
  };

  // GET /api/users/:userId/messages
  getUserMessages = (userId) => {
    return this.api.get("/api/users/:userId/messages");
  };
}

const usersService = new UsersService();

export default usersService;
