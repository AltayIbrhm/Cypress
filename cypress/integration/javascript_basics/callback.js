const posts = [
    { title: "Post One ", body: "This is post one " },
    { title: "Post two ", body: "This is post two " },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `${post.title}`;
      });
      console.log("post: ", output + " ");
    }, 1000);
  }
  
  function createPosts(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback;
    }, 2000);
  }
  
  //getPosts();
  
  createPosts({ title: "Post three ", body: "This is post three " }, getPosts());
  
  //createPosts({ title: "Post four ", body: "This is post four " }, getPosts());
  