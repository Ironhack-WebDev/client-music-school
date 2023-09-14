import axios from "axios";

class GroupsService {
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

  // POST /api/groups
  createGroup = (requestBody) => {
    return this.api.post("/api/groups", requestBody);
  };

  // GET /api/groups
  getAllGroups = () => {
    return this.api.get(`/api/groups`);
  };

  // GET /api/groups/timetable
  getGroupsByDay = (day) => {
    return this.api.get(`/api/timetable?day=${day}`);
  };

  // GET /api/groups/:id
  getGroup = (id) => {
    return this.api.get(`/api/groups/${id}`);
  };

  // PUT /api/groups/:id
  updateGroup = (id, requestBody) => {
    return this.api.put(`/api/groups/${id}`, requestBody);
  };

  // PUT /api/groups/:id/join
  joinAGroup = (id, requestBody) => {
    return this.api.put(`/api/groups/${id}/join`, requestBody);
  };

  // PUT /api/groups/:id/leave
  leaveAGroup = (id, requestBody) => {
    return this.api.put(`/api/groups/${id}/leave`, requestBody);
  };

  // DELETE /api/groups/:id
  deleteGroup = (id) => {
    return this.api.delete(`/api/groups/${id}`);
  };
}

// Create one instance (object) of the service
const groupsService = new GroupsService();

export default groupsService;
