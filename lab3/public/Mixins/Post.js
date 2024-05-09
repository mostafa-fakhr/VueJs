import axios from "axios";

export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    GetPostByID() {
      axios
        .get(`http://localhost:2000/posts/${this.id}`)
        .then((res) => {
          this.post = res.data;
          this.id = res.data.id;
          this.title = res.data.title;
          this.body = res.data.body;
          this.tags = res.data.tags;
          this.reactions = res.data.reactions;
        })
        .catch((error) => console.error(error));
    },
  },
};
