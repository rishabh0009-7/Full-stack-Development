//another way of consuming promises is async await other than then and catch
//async Keyword
// Used to define an asynchronous function.
// await Keyword
// Used inside async functions to pause execution until a Promise is resolved or rejected.
// await can only  be used when there is async 

// function fetchData (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//          resolve ({name:"chaicode", url:"https://chaicode.com"})
//         }, 3000);

//     })
// }

// async function getuserData() {
//     try {
//         // sabse pehle ye aayega likha hua 
//         console.log("fetching user data ");
//         // fir pause hoga taaki resolve hojaya jab resolve hoga tabhi aage badega  isse 
//         const userData = await fetchData()
//         // ab ye aayega jab ho jayega resolve
//         console.log("user data fetched successfully :", userData);
        

        
//     } catch (error) {
//         console.error("error fetching data ", error);
        
        
//     }
    
// }
// getuserData()


// another example  // how to grab multiple promises 
function fetchPostData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve ("post data fetched")
            
        }, 2000);
    })
}

function fetchCommentData (){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("comment data fetched");
      }, 3000);
    });
}

//method 1 
// async function getBlogData() {
//     try {
//         console.log("fetchingh blog data");
//        const blogData =  await fetchPostData()
//         const commentData = await fetchCommentData() 
//         console.log("fetch complete", blogData);
//         console.log("fetch complete",commentData);
        
        

        
        
//     } catch (error) {
//         console.error("error fetching blog data ",error);
        
//     }
    
// }

// getBlogData()


//method 2 (better way ) promise all
async function getBlogData() {
  try {
    console.log("fetching blog data");
  const [postData,commentData]=  await Promise.all[fetchPostData(),fetchCommentData()]
    console.log(postData)
    console.log(commentData)
  } catch (error) {
    console.error("error fetching blog data ", error);
  }
}

getBlogData();


