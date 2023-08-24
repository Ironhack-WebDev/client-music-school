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
  getUser = (userId) => {
    return this.api.get(`/api/users/${userId}`);
  };

  // PUT /api/users/:userid
  updateUser = (userid, requestBody) => {
    return this.api.put(`/api/users/${userid}`, requestBody);
  };

  // GET /api/users/:userId/groups
  getUserGroups = (userId) => {
    return this.api.get(`/api/users/${userId}/groups`);
  };

  // POST /api/groups/:groupId
  addUserToGroup = (groupId) => {
    return this.api.post(`/api/groups/${groupId}`)
  }

  // GET /api/users/:userId/messages
  getUserMessages = (userId) => {
    return this.api.get(`/api/users/${userId}/messages`);
  };
}

const usersService = new UsersService();

export default usersService;
