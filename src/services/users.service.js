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

   // GET /api/users/
   getAllUsers = () => {
    return this.api.get(`/api/users`);
  };

  // GET /api/users/:userId
  getUser = (userId) => {
    return this.api.get(`/api/users/${userId}`);
  };

  // PUT /api/users/:userid
  updateUser = (userId, requestBody) => {
    return this.api.put(`/api/users/${userId}`, requestBody);
  };

 // GET /api/groups/members?user=${user} 
  getUserGroups = (user) => {
    return this.api.get(`/api/groups/members?user=${user}`);
  };

  // GET /api/lessons?user=${user} 
  getUserLessons = (user) => {
    return this.api.get(`/api/lessons/student?user=${user}`);
  };

  // POST /api/groups/:groupId
  addUserToGroup = (groupId) => {
    return this.api.post(`/api/groups/${groupId}`)
  }

  // GET /api/users/:userId/messages
  getUserMessages = (userId) => {
    return this.api.get(`/api/users/${userId}/messages`);
  };

  // GET /api/admin

  getAdminUser = (userId) => {
    return this.api.get(`/api/admin?userId=${userId}`)
  };
}

const usersService = new UsersService();

export default usersService;
