const FriendStore = {
  data: {
    friends: ["bobby", "billy", "nikson", "jessica", "laura"],
  },
  methods: {
    addFriend(name) {
      FriendStore.data.friends.push(name);
    }
  }
};

export default FriendStore;