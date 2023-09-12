import axios from "axios";

class MessagesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.SERVER_URL || "http://localhost:5005", 
    });

    this.api.interceptors.request.use((config) => {

      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // GET /api/messages
  getAllMessages = () => {
    return this.api.get(`/api/messages`);
  };

  // POST /api/messages
  createMessage = (requestBody) => {
    return this.api.post("/api/messages", requestBody);
  };

  // GET /api/messages/:id
  getMessage = (id) => {
    return this.api.get(`/api/messages/${id}`);
  };

  // DELETE /api/messages/:id
  deleteMessage = (id) => {
    return this.api.delete(`/api/messages/${id}`);
  };
}


const messagesService = new MessagesService();

export default messagesService;
