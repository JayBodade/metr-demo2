import projectModel from "~/server/model/project.model";
export default defineEventHandler(async (event) => {
  const { id }  = event.context.params;
  let project =await projectModel.findOne({_id:id});
  return project;
  

})
