import { ChatEngine } from "react-chat-engine";

function Chatapp() {
  // const navigate = useNavigate();
  // const { currentUser } = UserAuth();
  

  

  // const getFile = async(url)=>{
  //   const file = await fetch(url)
  //   const data = await file.blob()

  //   return new File([data], `${currentUser.uid}.jpg`, {type: 'image/jpeg'})
  // }
  // useEffect(() => {

  //   if(!currentUser){
  //     navigate('/')
  //     return;
  //   }
  //   axios.get('https://api.chatengine.io/users/me',{
  //     headers:{
  //       'project-id': process.env.REACT_APP_PROJECTID,
  //       'user-name': currentUser.email,
  //       'user-secret':currentUser.uid
  //     }
  //   }).then((data)=>{
  //     console.log(data);
  //   })
  //   .catch(err=>{

  //     // creating new users in the chat app engie
  //     let formdata = new FormData()
  //     formdata.append('email', currentUser.email)
  //     formdata.append('username', currentUser.displayName)
  //     formdata.append('secret', currentUser.uid)

  //     getFile(currentUser.photoURL)
  //     .then(avatar=>{
  //       formdata.append('avatar', avatar, avatar.name )
  //       axios.post('https:/api.chatengine.io.users', 
  //       formdata,
  //       {
  //         headers:{
  //           'private':process.env.REACT_APP_CHAT_PRIVATE_KEY
  //         }

  //       }
  //       )
  //       .then()
  //       .catch(err=>{
  //         console.log(err)
  //       })
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //     })
  //   })
  // },);




  return (
    <div className="chatapp__window rounded text-black">
      <ChatEngine
        projectID="067b8d48-8192-4a78-9c53-474b84f9cd73" //{process.env.REACT_APP_CHAT_PROJECTID}
        userName=//{process.env.REACT_APP_USERNAME}
        userSecret= //{process.env.REACT_APP_USERSECRET}
        height='100vh'
        width='100vw'

      />
    </div>
  );
}
export default Chatapp;
