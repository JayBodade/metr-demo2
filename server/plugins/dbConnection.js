import mongoose from "mongoose"
export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig();

  const url = config.dbUrl;
  mongoose.connect(url).then(()=>{
    // console.log("this is url",url);
    console.log("connected to database");
  }).catch((e)=>{
    console.log("something went wrong");
  })
})
